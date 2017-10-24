import {Droppable} from './droppable';

export type DraggedType = string | number;

/**
 * Drag & drop event
 */
export interface DndEvent {
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

export type DndHandler = (event: DndEvent) => void;

export const DRAG_EVENT_TYPE = 'dnd:drag';
