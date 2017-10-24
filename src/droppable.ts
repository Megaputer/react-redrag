import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {DraggedType, DndHandler, DndEvent, DRAG_EVENT_TYPE} from './event';

export interface DroppableProps {
  /**
   * Types (identifiers) that can accept Droppable. Callbacks will fire when `types` are equal.
   */
  type: DraggedType | Array<DraggedType>;
  /**
   * Custom data attached to droppable object.
   */
  dropData?: any;
  /**
   * Called when a mouse is moved over the target.
   */
  onEnter?: DndHandler;
  /**
   * Called when mouse leaves target.
   */
  onLeave?: DndHandler;
  /**
   * Called when a mouse is moved over the target.
   */
  onDragOver?: DndHandler;
  /**
   * Called when drop happens.
   */
  onDrop?: DndHandler;
}

/**
 * Drop target wrapper.
 */
export class Droppable extends React.Component<DroppableProps, {}> {
  acceptable(test: DraggedType): boolean {
    const {type} = this.props;
    if (Array.isArray(type)) {
      return type.indexOf(test) !== -1;
    } else {
      return type === test;
    }
  }

  private handle(callback: DndHandler, customEvent: CustomEvent) {
    const dndEvent: DndEvent = customEvent.detail;
    if (this.acceptable(dndEvent.type)) {
      dndEvent.dropTarget = this;
      customEvent.stopPropagation();
      callback && callback(dndEvent);
    }
  }

  private onDrag = (event: CustomEvent) => {
    this.handle(this.props.onDragOver, event);
  };

  componentDidMount() {
    ReactDOM.findDOMNode(this).addEventListener(DRAG_EVENT_TYPE, this.onDrag);
  }

  componentWillUnmount() {
    ReactDOM.findDOMNode(this).removeEventListener(DRAG_EVENT_TYPE, this.onDrag);
  }

  render() {
    return React.cloneElement(React.Children.only(this.props.children));
  }
}
