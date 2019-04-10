import React from 'react';
import subscribe from '../../infrastructure/store/subscriptions';
import { getIn } from '../..//infrastructure/store/storeUtils';

export function Toast({ text, shown }) {

  return shown && (
    <div className="toast">{text}</div>
  )
}

function selectToastVisible(state) {
  return getIn(state, ['toast', 'visible']);
}

function selectToastText(state) {
  return getIn(state, ['toast', 'text']);
}

export default subscribe(function (state) {
  return {
    text: selectToastText(state),
    shown: selectToastVisible(state),
  };
})(Toast);

