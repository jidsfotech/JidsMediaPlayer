const player = require('play-sound');
const musicPath = require('./music');

function playAudio(filepath) {
    player().play(filepath, (error) => {
        if (error) {
            console.error('Error playing audio:', error);
        }
        console.log('palying music')
    });
}
console.log(musicPath.musicFiles[0])
playAudio(musicPath.musicFiles[0]);