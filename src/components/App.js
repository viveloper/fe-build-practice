import { LikeButton } from './LikeButton.js';

export const App = () => {
  return React.createElement(
    'div',
    null,
    React.createElement(LikeButton, null, null),
    React.createElement(LikeButton, null, null)
  );
};
