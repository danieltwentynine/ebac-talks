AOS.init(); //aos initiation and starts animations

const eventDate = new Date("Dec 12, 2024 19:00:00");
const timeStampEvent = eventDate.getTime();

const countTime = setInterval(function () {
    const now = new Date();
    const timeStampNow = now.getTime();

    //gap from present date to event date
    const eventGap = timeStampEvent - timeStampNow;

    //all in milliseconds
    const days = 1000 * 60 * 60 * 24;
    const hours = 1000 * 60 * 60;
    const minutes = 1000 * 60;
    const seconds = 1000;

    const daysTilEvent = Math.floor(eventGap / days);
    const hoursTilEvent = Math.floor((eventGap % days) / hours);
    const minTilEvent = Math.floor((eventGap % hours) / minutes);
    const secTilEvent = Math.floor((eventGap % minutes) / seconds);

    document.getElementById('contador').innerHTML = `${daysTilEvent}d ${hoursTilEvent}h ${minTilEvent}m ${secTilEvent}s`;

    if(eventGap < 0) {
        clearInterval(countTime);
        document.getElementById('contador').innerHTML = 'Evento Expirado';
    }

}, 1000)