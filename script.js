
const num = document.querySelector('.number');
const increaseBtn = document.querySelector('.incre');
const decreaseBtn = document.querySelector('.decre');
const resetBtn = document.querySelector('.rese');

let count = 0;

increaseBtn.addEventListener('click', () => {
  count++;
  num.textContent = count;
});

decreaseBtn.addEventListener('click', () => {
  count--;
  num.textContent = count;
});

resetBtn.addEventListener('click', () => {
  count = 0;
  num.textContent = count;
});











