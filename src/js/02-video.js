
import Player from '@vimeo/player';
import throttle from 'lodash/throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
    

    player.on('play', function() {
        console.log('played the video!');
    });

    player.getVideoTitle().then(function(title) {
        console.log('title:', title);
    });

const onCurrentTimeSave = function (data) {
    localStorage.setItem("videoplayer-current-time", data.seconds);
   console.log(data);
};

player.on('timeupdate', throttle(onCurrentTimeSave,1000));

const currentTime = localStorage.getItem("videoplayer-current-time");

player.setCurrentTime(currentTime).then(function (seconds) {
    seconds = currentTime;
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            seconds <= 0;
            break;

        default:
            `Other error occurred`
            break;
    }
});


