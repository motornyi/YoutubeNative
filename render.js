document.addEventListener('DOMContentLoaded', attachCallback);

function attachCallback() {
  document.querySelector('#video-input')
    .addEventListener('keydown', (e) => {
      if (e.keyCode != 13) return;

      setUrl(e.target.value);
      e.target.value = '';
    });
}

function setUrl(url) {
  document.querySelector('iframe')
    .src = `https://www.youtube.com/embed/${ parseUrl(url) }`
}

function parseUrl(url) {
  return url.match(/\?v=[^&]+/)[0].replace(/(\?v=)|&/g, '');
}
