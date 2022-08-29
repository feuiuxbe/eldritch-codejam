const buttonMiddle = document.querySelector('.button');
const gb1 = document.querySelector('.gb-1');
const gb2 = document.querySelector('.gb-2');
const gb3 = document.querySelector('.gb-3');
const brb1 = document.querySelector('.brb-1');
const brb2 = document.querySelector('.brb-2');
const brb3 = document.querySelector('.brb-3');
const bb1 = document.querySelector('.bb-1');
const bb2 = document.querySelector('.bb-2');
const bb3 = document.querySelector('.bb-3');

function fillCountContainerKtulhu() {
  gb1.innerHTML = 0;
  gb2.innerHTML = 1;
  gb3.innerHTML = 3;
  brb1.innerHTML = 2;
  brb2.innerHTML = 3;
  brb3.innerHTML = 4;
  bb1.innerHTML = 2;
  bb2.innerHTML = 0;
  bb3.innerHTML = 0;
}

function fillCountContainerShub() {
  gb1.innerHTML = 1;
  gb2.innerHTML = 3;
  gb3.innerHTML = 2;
  brb1.innerHTML = 2;
  brb2.innerHTML = 2;
  brb3.innerHTML = 4;
  bb1.innerHTML = 1;
  bb2.innerHTML = 1;
  bb3.innerHTML = 0;
}

function fillCountContainerYog() {
  gb1.innerHTML = 0;
  gb2.innerHTML = 2;
  gb3.innerHTML = 3;
  brb1.innerHTML = 2;
  brb2.innerHTML = 3;
  brb3.innerHTML = 4;
  bb1.innerHTML = 1;
  bb2.innerHTML = 1;
  bb3.innerHTML = 0;
}

function fillCountContainerAzathot() {
  gb1.innerHTML = 1;
  gb2.innerHTML = 2;
  gb3.innerHTML = 2;
  brb1.innerHTML = 2;
  brb2.innerHTML = 3;
  brb3.innerHTML = 4;
  bb1.innerHTML = 1;
  bb2.innerHTML = 1;
  bb3.innerHTML = 0;
}

const imageAncient = document.querySelector('.image-ancient');
const imageShubniggurath = document.querySelector('.image-shubniggurath');
const imageIogsothoth = document.querySelector('.image-iogsothoth');
const imageAzathoth = document.querySelector('.image-azathoth');

imageAncient.addEventListener('click', fillCountContainerKtulhu());
imageShubniggurath.addEventListener('click', fillCountContainerShub());
imageIogsothoth.addEventListener('click', fillCountContainerYog());
imageAzathoth.addEventListener('click', fillCountContainerAzathot());

