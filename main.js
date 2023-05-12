const messages = document.getElementsByClassName('.message');

for (let i = 0; i < messages.length; i++) {
  const message = messages[i];
  const lastChar = message.lastChild;
  const lastCharPos = lastChar.getBoundingClientRect();
  const redPoint = message.nextElementSibling;
  redPoint.style.top = lastCharPos.top + 'px';
  redPoint.style.left = lastCharPos.right + 'px';
}