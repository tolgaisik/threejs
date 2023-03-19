import '../css/global.css';
import '../scss/global.scss';

import _config from '../../_config.cjs';
import Three from './three';

const githubCornerTitle = 'Get started on GitHub';
const githubRepoUrl = 'https://github.com/doinel1a/wp-vanilla-three-js-starter';

document.addEventListener('DOMContentLoaded', () => {
  const title = document.querySelector('#title');
  const main = document.querySelector('#main');
  const githubCorner = main.querySelector('#github');

  title.textContent = _config.title;

  githubCorner.setAttribute('title', githubCornerTitle);
  githubCorner.setAttribute('aria-label', githubCornerTitle);
  githubCorner.setAttribute('href', githubRepoUrl);
});

window.addEventListener('load', () => {
  new Three(document.querySelector('#canvas'));
});
