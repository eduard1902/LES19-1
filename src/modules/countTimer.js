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

export default countTimer;