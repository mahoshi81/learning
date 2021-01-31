// 表示するリストのデータ
let datalist = ["あ", "か", "さ", "た", "な", "は", "ま", "や", "ら", "わ"];

window.addEventListener("DOMContentLoaded", function () {
  let displayContent1 = document.getElementById("content1");
  let displayContent2 = document.getElementById("content2");
  let displayContent3 = document.getElementById("content3");
  let displayContent4 = document.getElementById("content4");

  let pageCount = document.getElementById("pageCount");

  let prev = document.getElementById("prev");
  let next = document.getElementById("next");

  let pageCounter = 0;
  let displayDatalist = [];

  separateDatalist(datalist);

  displaylist = displayDatalist[pageCounter];

  displayContents(displaylist);

  pageCounter += 1;

  pageCount.innerHTML = pageCounter + "/" + displayDatalist.length;

  // 次へをクリック
  next.onclick = function () {
    displaylist = [];
    displaylist = displayDatalist[pageCounter];
    displayContents(displaylist);
    pageCounter = pageCounter + 1;
    pageCount.innerHTML = pageCounter + "/" + displayDatalist.length;
  };

  function separateDatalist(dataArray) {
    let index = 0;
    while (index < dataArray.length) {
      displayDatalist.push(dataArray.splice(index, index + 4));
    }
  }

  function displayContents(contentsArr) {
    displayContent1.innerHTML = contentsArr[0];
    displayContent2.innerHTML = contentsArr[1];
    displayContent3.innerHTML = contentsArr[2];
    displayContent4.innerHTML = contentsArr[3];
  }
});
