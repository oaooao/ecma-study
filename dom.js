/**
 * 学习 DOM 操作
 */

// 需求： 点击按钮的时候，在段落 2 后面，添加一个段落，里面内容是：我是段落 3

// 1. 获取按钮
const button = document.querySelector('.add-btn');

console.log(button);


// // 2. 获取容器 section
const container = document.querySelector('.container');

let n = 3;

function handleClick () {
  // 创建一个新的段落
  const p = document.createElement('p');
  p.innerHTML = `我是段落 ${n}`;
  // 添加类名 new-p
  p.classList.add('new-p');

  container.insertAdjacentElement('beforeend', p);

  n++;
}

// 3. 给按钮添加点击事件
button.addEventListener('click', handleClick);





