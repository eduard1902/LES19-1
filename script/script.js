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
    countTimer('02 july 2020');



// menu

const toggoleMenu = () => {
    const btnMenu = document.querySelector('.menu'),
        menu = document.querySelector('menu'),
        closeBtn = document.querySelector('.close-btn'),
        menuItems = menu.querySelectorAll('ul>li');

    const handlerMenu = () =>{
        menu.classList.toggle('active-menu');
    };
    btnMenu.addEventListener('click', handlerMenu);
    closeBtn.addEventListener('click', handlerMenu);
    menuItems.forEach((elem) => elem.addEventListener('click', handlerMenu));   
    
};

toggoleMenu();



//popup

const togglePopUp = () => {
    const popup = document.querySelector('.popup'),
        popupBtn = document.querySelectorAll('.popup-btn'),
        popUpClose =document.querySelector('.popup-close'),
        popupContent = document.querySelector('.popup-content');


    popupBtn.forEach((elem) => {
        elem.addEventListener('click', () => {
            popup.style.display = 'block';
            animate();
        });
    });

    popUpClose.addEventListener('click', () => {
        popup.style.display = 'none';
    });


    //animate
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

//scroll



});