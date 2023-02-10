/* eslint-disable linebreak-style */
/* local storage start */

function storageAvailable(type) {
  let storage;
  try {
    storage = window[type];
    const x = '__storage_test__';
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  } catch (err) {
    return (
      err instanceof DOMException
      && (err.code === 22
        || err.code === 1014
        || err.name === 'QuotaExceededError'
        || err.name === 'NS_ERROR_DOM_QUOTA_REACHED')
      && storage
      && storage.length !== 0
    );
  }
}

const hasLS = () => storageAvailable('localStorage');

const nameC = document.querySelector('input[name="name"]');
const formEmail = document.querySelector('input[name="email"]');
const message = document.querySelector('textarea[name="message"]');

const formData = {};

function saveToStorage(key, value) {
  if (hasLS) {
    formData[key] = value;
    localStorage.setItem(key, value);
  }
}

nameC.onchange = () => {
  saveToStorage('name', nameC.value);
};
formEmail.onchange = () => {
  saveToStorage('email', formEmail.value);
};
message.onchange = () => {
  saveToStorage('message', message.value);
};
