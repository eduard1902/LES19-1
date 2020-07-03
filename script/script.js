window.addEventListener('DOMContentLoaded', function(){
    'use strict';
    
    //Timer
function countTimer(deadline){
    let timeHours = document.querySelector('#timer-hours'),
        timeMinutes = document.querySelector('#timer-minutes'),
        timeSeconds = document.querySelector('#timer-seconds');

function getTimeRemaining(){
    let dateStop = new Date(deadline).getTime(),
        dateNow = new Date().getTime(),
        timeRemaining = (dateStop - dateNow) / 1000,
        seconds = Math.floor(timeRemaining % 60),
        minutes = Math.floor((timeRemaining / 60) % 60),
        hours = Math.floor(timeRemaining / 60 / 60 );
        return {timeRemaining, hours, minutes, seconds};
}

function updateClock() {
    let timer = getTimeRemaining();

    function substitute(item) {
        return item < 10 ? '0' + item : item;      
    };
        timeHours.textContent = substitute(timer.hours);
        timeMinutes.textContent = substitute(timer.minutes);
        timeSeconds.textContent = substitute(timer.seconds);

        if(timer.timeRemaining < 0) {
            clearInterval(stopTime);
            timeHours.textContent = '00';
            timeMinutes.textContent = '00';
            timeSeconds.textContent = '00';
        let timerNumbers = document.querySelector('.timer-numbers');
            timerNumbers.style.color = 'red';
        }    
    }
    const stopTime = setInterval(updateClock, 1000);
    updateClock();
    }
countTimer('04 july 2020');

// menu
    const toggoleMenu = () => {
        
    const btnMenu = document.querySelector('.menu'),
        menu = document.querySelector('menu'),
        body = document.querySelector('body');

btnMenu.addEventListener('click', () => {
        menu.classList.add('active-menu');
    });

body.addEventListener(('click'), (event) => {
    let target = event.target;

    if(target.closest('menu') && menu.classList.contains('active-menu')) { 
        if(target.tagName !== 'MENU') {
            if(target.tagName === 'A'){ 
                menu.classList.remove('active-menu');
            }
        }
    } else if (!target.closest('menu') && !target.closest('.menu')) {
        menu.classList.remove('active-menu');
    }
});
};

toggoleMenu();

// popup
const togglePopUp = () => {
    const popup = document.querySelector('.popup'),
        popupBtn = document.querySelectorAll('.popup-btn'),
        popupContent = document.querySelector('.popup-content');

    popupBtn.forEach((elem) => {
        elem.addEventListener('click', () => {
            popup.style.display = 'block';
            animate();
        });
    });

    popup.addEventListener('click', (event) => {
        let target = event.target;

        if(target.classList.contains('popup-close')){
             popup.style.display = 'none';
        } else {
            target = target.closest('.popup-content');

            if(!target){
                popup.style.display = 'none';
            }
        }
    });

// animate
    let count = 0,
        flyInterval;
const animate = () => {
        if (window.innerWidth > 768){
            flyInterval = requestAnimationFrame(animate);
            count +=7;
            if(count < 80){
                popupContent.style.top = count + 'px';
            }else {
                cancelAnimationFrame(flyInterval);
                count = 0;
            }
        } 
    };    
    };    
togglePopUp();

// //scroll
    const anchors = document.querySelectorAll('li a[href*="#"]');

    for (let anchor of anchors) {
    anchor.addEventListener('click',  (e) => {
        e.preventDefault();
        
        const blockId = anchor.getAttribute('href').substr(1);
        
        document.getElementById(blockId).scrollIntoView({
        behavior: 'smooth',
        block: 'start'
        });
    });
};

// tabs
const tabs = () => {
    const tabHeader = document.querySelector('.service-header'),
    tab = tabHeader.querySelectorAll('.service-header-tab'),
    tabContent = document.querySelectorAll('.service-tab');

const toggleTabContent = (index) => {
    for(let i = 0; i < tabContent.length; i++) {
        if(index === i){
            tab[i].classList.add('active');
            tabContent[i].classList.remove('d-none');
        } else {
            tab[i].classList.remove('active');
            tabContent[i].classList.add('d-none');
        }
    }
}    

    tabHeader.addEventListener('click', (event) => {
        let target = event.target;
            target = target.closest('.service-header-tab');
            tab.forEach((item, i) => {
                if(item === target) {
                    toggleTabContent(i);
                }
            });
    });
};
tabs();

//slider

const slider = () => {

    const slide = document.querySelectorAll('.portfolio-item'),
            btn = document.querySelectorAll('.portfolio-btn'),
            slider = document.querySelector('.portfolio-content'),
            dots = document.querySelector('.portfolio-dots');

console.log(slider);

    let currentSlide = 0,
        interval;
    
    const addDots = () => {
        for (let i = 0; i < slide.length; i++) {
            let li = document.createElement('li');
            li.className = 'dot';
            if (i === 0) {
                li.classList.add('dot-active');
            }
            dots.appendChild(li);
            }
    };  
    addDots();
    let dot = document.querySelectorAll('.dot');

    const prevSlide = (elem, index, strClass) => {
        elem[index].classList.remove(strClass);
    };

    const nextSlide = (elem, index, strClass) => {
        elem[index].classList.add(strClass);
    };

    const autoPlaySlide = () => {

        prevSlide(slide, currentSlide, 'portfolio-item-active');
        prevSlide(dot, currentSlide, 'dot-active');
        currentSlide++;
        if(currentSlide >= slide.length){
            currentSlide = 0;
        }
        nextSlide(slide, currentSlide, 'portfolio-item-active');
        nextSlide(dot, currentSlide, 'dot-active');

    };

    const startSlide = (time = 3000) => {
        interval = setInterval(autoPlaySlide, time);
    };

    const stopSlide = () => {
        clearInterval(interval);
    };

    slider.addEventListener('click', (event) => {
        event.preventDefault();

        let target = event.target;

        if (target.matches('portfolio-btn',  '.dot')){
            return;
        }

        prevSlide(slide, currentSlide, 'portfolio-item-active');
        prevSlide(dot, currentSlide, 'dot-active');

        if (target.matches('#arrow-right')){
            currentSlide++;
        } else if (target.matches('#arrow-left')){
            currentSlide--;
        } else if (target.matches('.dot')){
            dot.forEach((elem, index) => {
                if (elem === target){
                    currentSlide = index;
                }
            });
        }

        if (currentSlide >= slide.length){
            currentSlide = 0;
        }
        if (currentSlide < 0){
            currentSlide = slide.length -1;
        }

        nextSlide(slide, currentSlide, 'portfolio-item-active');
        nextSlide(dot, currentSlide, 'dot-active');

    });

    slider.addEventListener('mouseover', (event) => {
        if (event.target.matches('.portfolio-btn') ||
        event.target.matches('.dot')){
            stopSlide();
        }
    });

    slider.addEventListener('mouseout', (event) => {
        if (event.target.matches('.portfolio-btn') ||
        event.target.matches('.dot')){
            startSlide();
        }
    });

    
    startSlide(1500);
};

slider();
});