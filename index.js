//貼り付け処理
async function past() {
  try {
    const text = await navigator.clipboard.readText();
    document.getElementById('befor').value = text;
  } catch (err) {
    console.error('Failed to read clipboard contents: ', err);
  }
}

//変換処理
function change() {
  var befor = document.getElementById('befor').value;
  var after = convertYoutubeLiveUrl(befor);
  var outputDiv = document.getElementById('after');
  outputDiv.innerHTML = ''; // 出力をクリア


  if (after == '入力されたURLは有効なYouTubeライブURLではありません。') {
    outputDiv.innerText = after;
  } else {
    var link = createLink(after);
    outputDiv.appendChild(link);
  }
}

function convertYoutubeLiveUrl(befor) {
  var livePattern = 'https://www.youtube.com/live/';
  console.log("befor:" + befor);
  console.log("livePattern:" + livePattern);
  if (befor.indexOf(livePattern) === 0) {
    // 前方一致のときの処理
    return befor.replace('https://www.youtube.com/live/', 'https://www.youtube.com/watch?v=');
  } else {
    return '入力されたURLは有効なYouTubeライブURLではありません。';
  }
}

function createLink(after) {
  var anchor = document.createElement('a');
  anchor.href = after;
  anchor.innerText = after;
  anchor.target = '_blank'; // リンクを新しいタブで開く
  return anchor;
}

//削除処理
function clearFields() {
  document.getElementById('befor').value = '';
  document.getElementById('after').innerHTML = '';
}

//一括ボタン処理
async function oneTime() {
  await past();
  change();
}
