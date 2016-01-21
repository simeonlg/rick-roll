function copyTextToClipboard(text) {
  var copyFrom = document.createElement("textarea");
  copyFrom.textContent = text;
  var body = document.getElementsByTagName('body')[0];
  body.appendChild(copyFrom);
  copyFrom.select();
  document.execCommand('copy');
  body.removeChild(copyFrom);
}

document.addEventListener('DOMContentLoaded', function() {
  var link = document.getElementById('link');
  //onClick logic below
  link.addEventListener('click', function() {
    copyTextToClipboard("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
  })
})