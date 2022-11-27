import Player from '@vimeo/player';
import throttle from "lodash.throttle";



const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const LOCAL_STORAGE_CURRENT_TIME = "videoplayer-current-time"

const timePlayer = player.on('timeupdate', throttle(function (data) {
    localStorage.setItem(LOCAL_STORAGE_CURRENT_TIME, data.seconds)
    console.log(localStorage);
}, 1000));


player.setCurrentTime(localStorage.getItem(LOCAL_STORAGE_CURRENT_TIME)).then(function(seconds) {
    // seconds = the actual time that the player seeked to
}).catch(function(error) {
    switch (error.name) {
        case 'RangeError':
            // the time was less than 0 or greater than the video’s duration
            break;

        default:
            // some other error occurred
            break;
    }
});
