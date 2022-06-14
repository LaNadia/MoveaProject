
//  function to open videos

const buttonsModal = document.querySelectorAll('.button-play__wrap');

buttonsModal.forEach((item, i) => {
    item.addEventListener('click', () => {
        if(this.event.target.id == 'batman') {
            batmanVid.classList.add('active');
        };

        if(this.event.target.id == 'thor') {
            thorVid.classList.add('active');
        };

        if(this.event.target.id == 'spider') {
            spiderVid.classList.add('active');
        };

        if(this.event.target.id == 'adam') {
            adamVid.classList.add('active');
        };
        
        if(this.event.target.id == 'mission') {
            missionVid.classList.add('active');
        };

        if(this.event.target.id == 'school') {
            schoolVid.classList.add('active');
        };


        let modalWindow = document.querySelector('.active');
        let stopVideo = document.querySelector('.active iframe');
        
        modalWindow.addEventListener('click', () => {
            let srcVideo = stopVideo.src;
            modalWindow.classList.remove('active');
            stopVideo.src = "";
            stopVideo.src = srcVideo;
            modalWindow.removeEventListener();
        });
    });
});

// setting Time and Date 

let month = new Date().getMonth();
let day = new Date().getDate();
let hours = new Date().getHours();
let minutes = new Date().getMinutes();
let secs = new Date().getSeconds();
let headerHour = document.querySelector('.header__hour');
let headerDays = document.querySelector('.header__days');

function setDate() {
 
    if (month == 0) month = 'Jan';
    if (month == 1) month =  'Feb';
    if (month == 2) month = 'March';
    if (month == 3) month =  'April';
    if (month == 4) month =  'May';
    if (month == 5) month =  'June';
    if (month == 6) month =  'July';
    if (month == 7) month =  'August';
    if (month == 8) month = 'Sept';
    if (month == 9) month =  'Oct';
    if (month == 10) month =  'Nov';
    if (month == 11) month = 'Dec';
   
    headerDays.textContent = `${month} ${day}`;
};
 
setDate();

function setTime() {
    let hours = new Date().getHours();
    let minutes = new Date().getMinutes();
    let secs = new Date().getSeconds();
    let dots = ' ';

    minutes = minutes < 10 ? '0'+ minutes : minutes;
    if (secs % 2 == 0) dots = ':';
    headerHour.textContent = `${hours}${dots}${minutes}`;

}

setInterval(setTime, 1000);


