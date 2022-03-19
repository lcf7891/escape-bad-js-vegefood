/**
 * TODO: 修正 ESLint 錯誤、補上分號、前輩說要改單引號 QQ
 */

// 外部資料位址
const url='https://hexschool.github.io/js-filter-data/data.json';

// 表單 DOM 元素
const table = document.querySelector('.table-content');

// 按鈕 DOM 元素
const filter=document.querySelector('.filter');

// 監聽按鈕觸發篩選函式渲染
filter.addEventListener('click', filterCategory);

// 外部資料存放位置
let data;

/* global axios */
axios.get(url)
    .then(function(res) {
      data=res.data.filter((a)=>a.作物名稱);
      renderData(data);
    });


/**
 * 觸發按鈕篩選
 * @param {event} e
 */
function filterCategory(e) {
  if (e.target.nodeName=='BUTTON') {
    const showData=data.filter((i)=>{
      return i.種類代碼==e.target.dataset.category;
    });
    renderData(showData);
  } else {
    // return;
    renderData(data);
  }
}

/**
 * 渲染篩選後資料
 * @param {data} data
 */
function renderData(data) {
  let str='';
  data.forEach((b)=>{
    const content=
          `<tr>
            <td>${b.作物名稱}</td>
            <td>${b.市場名稱}</td>
            <td>${b.上價}</td>
            <td>${b.中價}</td>
            <td>${b.下價}</td>
            <td>${b.平均價}</td>
            <td>${b.交易量}</td>
          </tr>`;
    str+=content;
  });
  table.innerHTML=str;
}
