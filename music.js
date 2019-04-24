const fs = require("fs");
const path = require("path");
const homedir = require('os').homedir();
const mplayer = require("mplayer-wrapper")();

const musicpath = path.join(homedir, "Music");
let currentPath = musicpath;

const music = (ipcMain) => {
  let sendDirectoryContent = (event) => {
    fs.readdir(currentPath, (err, files) => {
      if (!err) {
        for (let i = 0; i < files.length; i++) {
          const file = files[i];
          fs.stat(path.join(currentPath, files[i]), (err, stat) => {
            if (stat.isDirectory()) {
              event.sender.send("musicdir", file);
            } else {
              event.sender.send("musicfile", file);
            }
          });
        }
      }
    });
  };



  ipcMain.on("music", (event, args) => {
    sendDirectoryContent(event);
  });

  ipcMain.on("music-directory-push", (event, args) => {
    currentPath = path.join(currentPath, args);
    sendDirectoryContent(event);
  });

  ipcMain.on("music-directory-pop", (event, args) => {
    currentPath = path.join(currentPath, "..");
    sendDirectoryContent(event);
  });

  ipcMain.on("music-queue", (event, args) => {
    mplayer.queue(path.join(currentPath, args));
  });

  ipcMain.on("music-play", (event, args) => {
    mplayer.play(path.join(currentPath, args));
  });

  ipcMain.on("music-volume", (event, args) => {
    mplayer.setVolume(args);
  });

  ipcMain.on("music-seek", (event, args) => {
    mplayer.seek(args);
  });

  ipcMain.on("music-play-pause", (event, args) => {
    mplayer.playPause();
  });

  ipcMain.on("music-next", (event, args) => {
    mplayer.next();
  });

  ipcMain.on("music-previous", (event, args) => {
    mplayer.previous();
  });

  ipcMain.on("music-time-pos", (event, args) => {
    mplayer.getProps(["time_pos"]);
    mplayer.once("time_pos", (pos) => {
      event.sender.send("music-time-pos", pos);
    });
  });

  ipcMain.on("music-length", (event, args) => {
    mplayer.getProps(["length"]);
    mplayer.once("length", (pos) => {
      event.sender.send("music-length", pos);
    });
  });

  ipcMain.on("music-current", (event, args) => {
    mplayer.getProps(["filename"]);
    mplayer.once("filename", (filename) => {
      event.sender.send("music-current", filename);
    });
  });

  ipcMain.on("music-status", (event, args) => {
    mplayer.getProps(["pause"]);
    mplayer.once("pause", (args) => {
      event.sender.send("music-status", args);
    });
  });
};

module.exports = music;
