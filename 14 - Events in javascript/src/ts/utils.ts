export function getElementById(id: string) {
  return document.getElementById(id);
}

export function addListener(id: string, eventType: string, cb) {
  const node = document.getElementById(id);
  if (node) {
    node.addEventListener(eventType, cb);
    return true;
  }
  return false;
}
