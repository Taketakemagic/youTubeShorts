function buttonClick() {
  var befor = document.getElementById('befor').value;
  var after = convertYoutubeLiveUrl(befor);
  document.getElementById('after').innerText = after;
}
function convertYoutubeLiveUrl(befor) {
  var livePattern = /^https:\/\/www\.youtube\.com\/live\/([a-zA-Z0-9_-]+)$/;
  var match = befor.match(livePattern);
  if (match) {
    return 'https://www.youtube.com/watch?v=' + match[1];
  } else {
    return '入力されたURLは有効なYouTubeライブURLではありません。';
  }
}
