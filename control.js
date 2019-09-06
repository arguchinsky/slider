"use strict";
const gallery = document.querySelector('.gallery');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');

const width = 960;

const leftPos = gallery.getBoundingClientRect().left;
const endSwitch = (gallery.getBoundingClientRect().width * -1) + width ;

let position = 0;

const prevSlide = () => {
    if (position < 0) position += width;
    else position = 0;
    gallery.style.marginLeft = position+'px';
    console.log(position);
}

const nextSlide = () => {
    if (position > endSwitch )position -= width;
    else position = endSwitch;
    gallery.style.marginLeft = position+'px';
    console.log(position);
}

nextBtn.addEventListener('click', nextSlide);
prevBtn.addEventListener('click', prevSlide);
