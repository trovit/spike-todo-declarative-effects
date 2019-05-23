import React from 'react';

export default function Toast({ text, shown }) {
  return shown ? <div className="toast">{text}</div> : '';
}
