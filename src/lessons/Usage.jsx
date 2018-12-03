import React, { Component } from 'react';

import Switch from '../Switch';

const On = ({ on, children }) => (on ? children : null);
const Off = ({ on, children }) => (on ? null : children);
const Button = ({ on, toggle, ...props }) => {
  console.log('props', on, toggle);
  return (
  <Switch
    on={on}
    onClick={() => { console.log('toggle'); toggle(); }}
    {...props}
  />
);
  }

class Toggle extends Component {

  state = { on: true };

  toggle = () => {
    console.log('ssd');
    this.setState(
      ({ on }) => ({ on: !on }), 
      () => this.props.onToggle(this.state.on),
    );
  }
  
  render() {
    return React.Children.map(this.props.children, child => (
      React.cloneElement(child, {
        on: this.state.on,
        toggle: this.toggle,
      })
    ));
  }
}

function Usage({
  onToggle = (...args) => console.log('onToggle', ...args)
}) {
  return (
    <Toggle onToggle={onToggle}>
      <On>Toggle is ON</On>
      <Off>Toggle is OFF</Off>
      <Button>Toggle me!</Button>
    </Toggle>
  );
}

export default Usage;