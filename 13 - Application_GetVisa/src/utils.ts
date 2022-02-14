export function getRandomIntInclusive(minimum, maximum): number {
  const min = Math.ceil(minimum);
  const max = Math.floor(maximum);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function arrayRandElement(arr) {
  const rand = Math.floor(Math.random() * arr.length);
  return arr[rand];
}

export function getNodeById(id) {
  return document.getElementById(id);
}

export function addListener(id, eventType, cb) {
  const node = document.getElementById(id);

  if (node) {
    node.addEventListener(eventType, cb);
  }
}

export function setTextValue(id, value) {
  const node = <HTMLInputElement>document.getElementById(id);
  if (node) {
    node.value = value;
    return true;
  }
  return false;
}

export function getTextValue(id) {
  const node = <HTMLInputElement>document.getElementById(id);

  if (node) {
    return node.value;
  }
  return '';
}

export function buttonsDisabledOn(id) {
  const node = <HTMLButtonElement>document.getElementById(id);
  if (node && !node.disabled) {
    node.disabled = true;
    return true;
  }
  return false;
}

export function buttonsDisabledOff(id) {
  const node = <HTMLButtonElement>document.getElementById(id);
  if (node && node.disabled) {
    node.disabled = false;
    return true;
  }
  return false;
}

export function createHTMLElement(place, type, value) {
  const node = <HTMLButtonElement>document.getElementById(place);
  const nodeChild = <HTMLElement>document.createElement(type);
  if (node && nodeChild) {
    node.append(nodeChild);
    nodeChild.textContent = value;
    return true;
  }
  return false;
}

export function elementsVisibilityToggler(id) {
  const node = <HTMLButtonElement>document.getElementById(id);
  if (node) {
    node.classList.toggle('hidden');
    node.classList.toggle('visible');
    return true;
  }
  return false;
}
