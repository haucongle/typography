var el = document.createElement('output');
document.body.append(el);
Object.assign(el.style, {
  position: 'fixed',
  bottom: 0,
  left: 0,
  background: 'red',
  color: 'white',
  padding: '5px',
  fontSize: '11px',
  opacity: 0.7,
});
function updateOutput() {
  var html = document.documentElement;
  var body = document.getElementsByTagName('body');
  var style = window.getComputedStyle(body[0]).getPropertyValue('font-size');
  var fontSize = parseFloat(style);
  el.value = html.clientWidth + ' × ' + html.clientHeight + ' | ' + fontSize;
}
window.addEventListener('resize', updateOutput);
updateOutput();
