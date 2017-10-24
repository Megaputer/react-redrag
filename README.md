# react-redrag

Yes, another one library to drag and drop. It written in [Typescript](http://www.typescriptlang.org/) for [React](https://facebook.github.io/react/) and containing `Draggable`, `Droppable` and `Sortable` components. Drag and Drop should be simple and pleasant!

## Examples

This is a basic usage examples.

## API

#### `Draggable`

Drag source wrapper. May be used without any Droppable. Do not unmount component while dragging!

```typescript
interface DraggableProps {
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
}
```

#### `Droppable`

Drop target wrapper.

```typescript
interface DroppableProps {
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
```

#### `DndEvent`

Drag & drop event

```typescript
interface DndEvent {
  /**
   * Type of dragged object, if not defined Draggable doesn't interact with Droppable
   */
  type?: DraggedType;
  pageX: number;
  pageY: number;
  clientX: number;
  clientY: number;
  target: EventTarget;
  deltaX?: number;
  deltaY?: number;
  dragData?: any;
  dropTarget?: Droppable;
  ctrlKey?: boolean;
  shiftKey?: boolean;
}
```

## `Sortable`

Helper component which able to reorder children.

```typescript
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
```

## Author

Grigoriev Alexander - grigoriev@megaputer.ru