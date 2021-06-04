'use strict';

const openBtn = document.querySelector('.open');
const closeBtn = document.querySelector('.close');
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');

openBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

function openModal(){
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden')
}

function closeModal(){
  modal.classList.add('hidden');
  overlay.classList.add('hidden')
}