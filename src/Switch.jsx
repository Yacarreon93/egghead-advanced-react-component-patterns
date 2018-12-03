import React from 'react';

export default function Switch({ on = false, ...props }) {
  return (
    <button {...props}>
      {on && 'ON'}
      {!on && 'OFF'}
    </button>
  );
}