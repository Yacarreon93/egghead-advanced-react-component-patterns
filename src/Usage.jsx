import React, { Component } from 'react';

import Switch from './Switch';
  
class Toggle extends Component {
  static On = ({ on, children }) => (on ? children : null);

  static Off = ({ on, children }) => (on ? null : children);

  static Button = ({ on, toggle, ...props }) => (
    <Switch
      on={on}
      onClick={toggle}
      {...props}
    />
  );

  state = { on: true };

  toggle = () => {
    this.setState(({ on }) => ({ on: !on }), () => {
      this.props.onToggle(this.state.on);
    });
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
      <Toggle.Button />
      <Toggle.On>Toggle is ON</Toggle.On>
      <Toggle.Off>Toggle is OFF</Toggle.Off>
    </Toggle>
  );
}

export default Usage;