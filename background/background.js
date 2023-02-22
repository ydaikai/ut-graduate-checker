// tbody要素を取得する
const tbody = document.querySelector('tbody');

// tbody内のすべてのtr要素を取得する
const trs = tbody.querySelectorAll('tr');

// 各tr要素に対して、td要素の中から「可」という文字列を含む要素を抽出する
trs.forEach((tr) => {
  const tds = tr.querySelectorAll('td');
  tds.forEach((td) => {
    if (td.textContent === '可') {
      console.log(td.textContent);
    }
  });
});
