// CSS and SASS files
import './index.scss';

import { default as Tobi } from '@midzer/tobii'
const tobi = new Tobi()

// Remove the following lines to remove the darkmode js
import Darkmode from 'darkmode-js'
function addDarkmodeWidget() {
  new Darkmode().showWidget()
}
window.addEventListener('load', addDarkmodeWidget)
