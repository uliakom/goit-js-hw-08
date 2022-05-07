
import Player from '@vimeo/player';
import throttle from 'lodash/throttle';

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

const STORAGE_KEY = "videoplayer-current-time";
    

    player.on('play', function() {
        console.log('played the video!');
    });

const onCurrentTimeSave = function (data) {
    localStorage.setItem(STORAGE_KEY, data.seconds);
   console.log(data);
};

player.on('timeupdate', throttle(onCurrentTimeSave,1000));

const currentTime = localStorage.getItem(STORAGE_KEY);

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


