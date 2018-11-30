import React from 'react';

export default function Switch({ on = false, ...props }) {
  return (
    <div {...props}>
      {on && 'ON'}
      {!on && 'OFF'}
    </div>
  );
}