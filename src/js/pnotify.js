import '@pnotify/core/dist/PNotify.js';
import '@pnotify/mobile/dist/PNotifyMobile.js';
import '@pnotify/core/dist/BrightTheme.css';
import '@pnotify/core/dist/PNotify.css';
import { error } from '@pnotify/core';

function messageError() {
  error({
    text: 'The field can not be empty, please try again',
    delay: 2000,
    type: 'error',
  });
}
export default messageError;
