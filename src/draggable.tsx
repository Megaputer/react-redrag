import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {DndEvent, DraggedType, DndHandler, DRAG_EVENT_TYPE} from './event';
import {Droppable} from './droppable';

function appendToBody(): HTMLDivElement {
  return document.body.appendChild(document.createElement('div'));
}

function removeFromBody(e: Element) {
  ReactDOM.unmountComponentAtNode(e);
  document.body.removeChild(e);
}

function mouseEvent(event: MouseEvent | React.MouseEvent<HTMLElement>): DndEvent {
  return {
    clientX: event.clientX,
    clientY: event.clientY,
    pageX: event.pageX,
    pageY: event.pageY,
    target: event.target,
    ctrlKey: event.ctrlKey,
    shiftKey: event.shiftKey
  };
}

function touchEvent(event: TouchEvent | React.TouchEvent<HTMLElement>): DndEvent {
  const clientX = event.changedTouches[0].clientX;
  const clientY = event.changedTouches[0].clientY;
  return {
    clientX,
    clientY,
    pageX: event.changedTouches[0].pageX,
    pageY: event.changedTouches[0].pageY,
    target: document.elementFromPoint(clientX, clientY),
    ctrlKey: event.ctrlKey,
    shiftKey: event.shiftKey
  };
}

function customEvent(type: string, params: CustomEventInit): CustomEvent {
  try {
    return new CustomEvent(type, params);
  } catch (e) {
    let event = document.createEvent('CustomEvent');
    event.initCustomEvent(type, params.bubbles, params.cancelable, params.detail);
    return event;
  }
}

function setUserSelect(value: string | null) {
  document.body.style.userSelect = value;
  document.body.style.msUserSelect = value;  
}

const dragLayer: React.CSSProperties = {
  position: 'fixed',
  zIndex: 9999,
  opacity: .8,
  pointerEvents: 'none'
};

const LEFT_BUTTON = 0;
const DEFAULT_DRAG_THRESHOLD = 5;

export interface DraggableProps {
  /**
   * Type (identifier) of dragged object. If not defined, `Draggable` doesn't interact with any Droppable.
   */
  type?: DraggedType;
  /**
   * Element that shown while dragging near the mouse. If not defined, children will be shown.
   */
  dragLayer?: React.ReactElement<any>;
  /**
   * Data attached to draggable object. This data can be accessed by DndEvent handlers.
   */
  dragData?: any;
  /**
   * Disables shifting drag layer.
   * Shift value is difference between cursor position and left top point of the dragged element.
   */
  disableShift?: boolean;
  /**
   * Specifies the drag threshold in pixels.
   */
  dragThreshold?: number;
  /**
   * Called when drag started.
   */
  onStart?: DndHandler;
  /**
   * Called while dragging.
   */
  onDrag?: DndHandler;
  /**
   * Called when a drag ends.
   */
  onEnd?: DndHandler;
  children?: React.ReactElement<any>;
}

/**
 * Drag source wrapper. May be used without any Droppable. Do not unmount component while dragging.
 */
export class Draggable extends React.Component<DraggableProps, {}> {
  private dragging: boolean = false;
  private touchId: number;
  private originX: number = 0;
  private originY: number = 0;
  private shiftX: number = 0;
  private shiftY: number = 0;
  private container: Element = undefined;
  private dropTarget: Droppable = undefined;
  private draggedElement: React.ReactElement<any> = undefined;

  private extend(event: DndEvent): DndEvent {
    return {...event,
      type: this.props.type,
      dragData: this.props.dragData,
      deltaX: event.pageX - this.originX,
      deltaY: event.pageY - this.originY
    };
  }

  private dispatch(type: string, event: DndEvent) {
    if (event.target && event.type) {
      const params = {
        bubbles: true,
        cancelable: true,
        detail: event
      };
      event.target.dispatchEvent(customEvent(type, params));
    }
  }

  private onMouseDown = (event: MouseEvent) => {
    if (event.button === LEFT_BUTTON) {
      this.onDown(mouseEvent(event));
    }
  };

  private onTouchStart = (event: TouchEvent) => {
    if (event.touches.length === 1) {
      this.touchId = event.changedTouches[0].identifier;
      this.onDown(touchEvent(event));
    }
  };

  private onDown(event: DndEvent) {
    this.addListeners();

    setUserSelect('none');

    this.originX = event.pageX;
    this.originY = event.pageY;

    if (this.props.disableShift) {
      this.shiftX = this.shiftY = 0;
    } else {
      const rect = ReactDOM.findDOMNode(this).getBoundingClientRect();
      this.shiftX = event.clientX - rect.left;
      this.shiftY = event.clientY - rect.top;
    }

    this.onMove(this.extend(event));
  }

  private onMouseMove = (event: MouseEvent) => {
    this.onMove(this.extend(mouseEvent(event)));
  };

  private onTouchMove = (event: TouchEvent) => {
    if (event.touches.length === 1) {
      this.onMove(this.extend(touchEvent(event)));
    }
  };

  private startDrag(event: DndEvent) {
    const dragThreshold = this.props.dragThreshold != null ? this.props.dragThreshold : DEFAULT_DRAG_THRESHOLD;
    return !this.dragging && Math.abs(event.deltaX) + Math.abs(event.deltaY) >= dragThreshold;
  }

  private onMove(event: DndEvent) {
    if (this.startDrag(event)) {
      this.dragging = true;
      this.props.onStart && this.props.onStart(event);
      if (this.props.type) {
        this.container = appendToBody();
        this.draggedElement = this.props.dragLayer || this.props.children;
      }
      this.dropTarget = undefined;
    }

    if (this.dragging) {
      this.container && this.renderDragLayer(event);

      this.dispatch(DRAG_EVENT_TYPE, event);

      if (this.dropTarget !== event.dropTarget) {
        this.dropTarget && this.dropTarget.props.onLeave && this.dropTarget.props.onLeave(event);
        event.dropTarget && event.dropTarget.props.onEnter && event.dropTarget.props.onEnter(event);
        this.dropTarget = event.dropTarget;
      }

      this.props.onDrag && this.props.onDrag(event);
    }
  }

  private onMouseUp = (event: MouseEvent) => {
    this.onEnd(this.extend(mouseEvent(event)));
  };

  private onTouchEnd = (event: TouchEvent) => {
    for (let i = 0; i < event.changedTouches.length; ++i) {
      if (event.changedTouches[i].identifier === this.touchId) {
        this.onEnd(this.extend(touchEvent(event)));
        break;
      }
    }
  };

  private onTouchCancel = (event: TouchEvent) => {
    this.onEnd(this.extend(touchEvent(event)));
  };

  private onEnd(event: DndEvent) {
    this.removeListeners();

    setUserSelect(null);

    if (this.dragging) {
      this.dragging = false;

      if (this.container) {
        removeFromBody(this.container);
        this.container = undefined;
        this.draggedElement = undefined;
      }

      this.dropTarget && this.dropTarget.props.onLeave && this.dropTarget.props.onLeave(event);
      this.dropTarget && this.dropTarget.props.onDrop && this.dropTarget.props.onDrop(event);

      // sometimes usefull to know drop target
      this.props.onEnd && this.props.onEnd({...event, dropTarget: this.dropTarget});
    }
  }

  private addListeners() {
    window.addEventListener('mousemove', this.onMouseMove);
    window.addEventListener('mouseup', this.onMouseUp);

    window.addEventListener('touchmove', this.onTouchMove);
    window.addEventListener('touchend', this.onTouchEnd);
    window.addEventListener('touchcancel', this.onTouchCancel);
  }

  private removeListeners() {
    window.removeEventListener('mousemove', this.onMouseMove);
    window.removeEventListener('mouseup', this.onMouseUp);

    window.removeEventListener('touchmove', this.onTouchMove);
    window.removeEventListener('touchup', this.onTouchEnd);
    window.removeEventListener('touchcancel', this.onTouchCancel);
  }

  componentDidMount() {
    let node = ReactDOM.findDOMNode(this);
    node.addEventListener('mousedown', this.onMouseDown);
    node.addEventListener('touchstart', this.onTouchStart);
  }

  componentWillUnmount() {
    let node = ReactDOM.findDOMNode(this);
    node.removeEventListener('mousedown', this.onMouseDown);
    node.removeEventListener('touchstart', this.onTouchStart);
  }

  private renderDragLayer(event: DndEvent) {
    const style: React.CSSProperties = {...dragLayer,
      left: event.clientX - this.shiftX,
      top: event.clientY - this.shiftY
    };

    ReactDOM.render(
      <div style={style}>
        {this.draggedElement}
      </div>,
      this.container
    );
  }

  render() {
    return this.props.children;
  }
}
