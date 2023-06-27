const path = require('path');
const os = require('os');
const fs = require('fs');

function getMusicFolderPath() {
  const platform = os.platform();
  let musicFolder;

  if (platform === 'win32') {
    musicFolder = path.join(os.homedir(), 'Music');
  } else if (platform === 'darwin') {
    musicFolder = path.join(os.homedir(), 'Music');
  } else if (platform === 'linux') {
    musicFolder = path.join(os.homedir(), 'Music');
  } else {
    console.error('Unsupported platform:', platform);
    return;
  }

  return musicFolder;
}
const musicFolderPath = getMusicFolderPath();

function getMusicFiles() {
  const allowedExtensions = ['.mp3', '.wav', '.flac'];
  const musicFiles = [];

  fs.readdirSync(musicFolderPath).forEach((file) => {
    const filePath = path.join(musicFolderPath, file);
    const fileExtension = path.extname(file).toLowerCase();

    if (allowedExtensions.includes(fileExtension)) {
      musicFiles.push(filePath);
    }
  });

  return musicFiles;
}

module.exports.musicFiles = getMusicFiles();