import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Sortable, arrayMove, Draggable, DndEvent, Droppable} from '../../dist/react-redrag';
import * as style from './index.css';

function cn(...classNames: (string | boolean)[]) {
  return classNames.filter(c => typeof c === 'string').join(' ');
}

interface DraggableExampleState {
  start: number;
  left: number;
}

class DraggableExample extends React.Component<{}, DraggableExampleState> {
  constructor() {
    super();
    this.state = {
      start: 0,
      left: 0
    }
  }

  private normalize(delta: number) {
    return Math.max(0, Math.min(80, this.state.start + delta))
  }

  private onDrag = (e: DndEvent) => {
    this.setState({left: this.normalize(e.deltaX)});
  };

  private onEnd = (e: DndEvent) => {
    this.setState({start: this.normalize(e.deltaX)});
  };

  render() {
    return (
      <div className={style.slider}>
        <Draggable onDrag={this.onDrag} onEnd={this.onEnd} dragLayer={null}>
          <div
            className={style.draggable}
            style={{position: 'absolute', left: this.state.left}}
          />
        </Draggable>
      </div>
    );
  }
}

interface ColorTargetProps {
  type: string;
  color: string;
  onDrop: () => void;
}

class ColorTarget extends React.Component<ColorTargetProps, {over: boolean}> {
  constructor(props: any) {
    super(props);
    this.state = {
      over: false
    }
  }

  render() {
    return (
      <Droppable
        type={this.props.type}
        onEnter={() => this.setState({over: true})}
        onLeave={() => this.setState({over: false})}
        onDrop={this.props.onDrop}
      >
        <div
          className={cn(style.droppable, this.state.over && style.acceptable)}
          style={{backgroundColor: this.props.color}}
        >
          {this.props.children}
        </div>
      </Droppable>
    );
  }
}

interface DroppabaleExampleState {
  orange: number;
  green: number;
}

class DroppableExample extends React.Component<{}, DroppabaleExampleState> {
  constructor() {
    super();
    this.state = {
      orange: 0,
      green: 0
    }
  }

  private onGreen = () => {
    this.setState({green: this.state.green + 1});
  };

  private onOrange = () => {
    this.setState({orange: this.state.orange + 1});
  };

  render() {
    return (
      <div className={cn(style.row, style.childSpacingH)}>
        <div className={cn(style.column, style.childSpacingV)}>
          <Draggable type='green'>
            <div className={style.draggable} style={{backgroundColor: 'mediumaquamarine'}} />
          </Draggable>
          <Draggable type='orange'>
            <div className={style.draggable} style={{backgroundColor: 'papayawhip'}} />
          </Draggable>
        </div>
        <div className={cn(style.column, style.childSpacingV)}>
          <ColorTarget type='orange' color='papayawhip' onDrop={this.onOrange}>
            {this.state.orange}
          </ColorTarget>
          <ColorTarget type='green' color='mediumaquamarine' onDrop={this.onGreen}>
            {this.state.green}
          </ColorTarget>
        </div>
      </div>
    );
  }
}

interface SortableExampleState {
  list: number[];
}

class SortableExample extends React.Component<{}, SortableExampleState> {
  constructor() {
    super();
    this.state = {
      list: [1, 2, 3, 4, 5]
    }
  }

  private onSortEnd = (from: number, to: number) => {
    this.setState({list: arrayMove(this.state.list, from, to)});
  };

  render() {
    return (
      <Sortable className={style.childSpacingV} onSortEnd={this.onSortEnd} hideDragged>
        {this.state.list.map(v =>
          <div key={v} className={cn(style.draggable, style.droppable)}>{v}</div>
        )}
      </Sortable>
    );
  }
}

function Example() {
  return (
    <div className={style.column}>
      <h1>Basic usage examples of <a href='https://github.com/Megaputer/react-redrag.git'>react-redrag</a></h1>
      <h1>Draggable</h1>
      <DraggableExample />
      <h1>Droppable</h1>
      <DroppableExample />
      <h1>Sortable</h1>
      <SortableExample />
    </div>
  );
}

ReactDOM.render(<Example />, document.getElementById('root'));
