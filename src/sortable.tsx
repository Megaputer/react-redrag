import * as React from 'react';
import {DndEvent} from './event';
import {Draggable} from './draggable';
import {Droppable} from './droppable';

export function arrayMove<T>(items: T[], from: number, to: number): T[] {
  items.splice(to, 0, items.splice(from, 1)[0]);
  return items;
}

function defaultState(props: SortableProps): SortableState {
  return {
    order: React.Children.map((props as any).children, (_, i) => i),
    startIndex: undefined
  };
}

export interface SortableProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Make moved element invisible. As a dragged layer will be used clone of that element.
   */
  hideDragged?: boolean;
  /**
   * Provide custom `Draggable`. In that case each child must be ready to accept `DraggableProps`.
   */
  customDraggable?: boolean;
  /**
   * Called when dragging starts.
   */
  onSortStart?: () => void;
  /**
   * Called when the drag is finished without any reorder.
   */
  onSortCancel?: () => void;
  /**
   * Called when user has made some reorder.
   */
  onSortEnd: (from: number, to: number) => void;
}

export interface SortableState {
  order: number[];
  startIndex: number;
}

/**
 * Helper component which able to reorder children.
 */
export class Sortable extends React.Component<SortableProps, SortableState> {
  private uid = Math.random();

  constructor(props: SortableProps) {
    super(props);
    this.state = defaultState(props);
  }

  private indexOf(childIndex: number): number {
    return this.state.order.indexOf(childIndex);
  }

  private onDragOver = (e: DndEvent) => {
    const {startIndex} = this.state;
    const currentIndex = e.dropTarget.props.dropData as number;

    if (startIndex === undefined) {
      this.setState({startIndex: currentIndex});
    } else if (startIndex !== currentIndex) {
      this.setState({
        order: arrayMove(this.state.order, this.indexOf(startIndex), this.indexOf(currentIndex))
      });
    }
  };

  private onDragEnd = () => {
    const {startIndex} = this.state;
    const toIndex = this.indexOf(startIndex);
    if (startIndex !== toIndex) {
      this.props.onSortEnd(startIndex, toIndex);
    } else {
      this.props.onSortCancel && this.props.onSortCancel();
      this.setState(defaultState(this.props));
    }
  };

  componentWillReceiveProps(props: SortableProps) {
    this.setState(defaultState(props));
  }

  render() {
    const {onSortStart, onSortCancel, onSortEnd, hideDragged, customDraggable, children, ...props} = this.props;
    const childrenArray = React.Children.toArray(children) as React.ReactElement<any>[];

    const reorderedChildren = this.state.order.map(i => {
      let child = childrenArray[i];

      if (hideDragged && this.state.startIndex === i) {
        child = React.cloneElement(child, {style: {visibility: 'hidden'}});
      }

      const draggableProps = {type: this.uid, onEnd: this.onDragEnd};
      if (customDraggable) {
        child = React.cloneElement(child, draggableProps);
      } else {
        child = (
          <Draggable {...draggableProps} onStart={onSortStart}>
            {child}
          </Draggable>
        );
      }

      return (
        <Droppable key={childrenArray[i].key} type={this.uid} dropData={i} onDragOver={this.onDragOver}>
          {child}
        </Droppable>
      );
    });

    return (
      <div {...props}>
        {reorderedChildren}
      </div>
    );
  }
}
