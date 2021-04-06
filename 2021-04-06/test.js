a = document.querySelector('.box');
console.log(a);
var random = Math.floor(Math.random() * 4) + 1;
var clickOne = document.querySelector('.box:nth-child(' + random + ')');

console.log(clickOne);
// clickOne.addEventListener('click', function () {
//     // console.log(1);
//     // // document.querySelector('.content').innerHTML = '';
// });