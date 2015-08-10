import JSDOM from 'jsdom';

global.document = JSDOM.jsdom('<!doctype html><html><body></body></html>');

global.window = document.parentWindow;

global.navigator = {
  userAgent: 'node.js'
};
