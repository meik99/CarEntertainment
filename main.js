const { app, BrowserWindow, ipcMain, Menu } = require("electron");
const path = require("path");
const url = require("url");
const fs = require("fs");
const homedir = require('os').homedir();
const music = require("./music");

let win;

function createWindow() {
  win = new BrowserWindow({ width: 800, height: 480,
    // autoHideMenuBar: true, titleBarStyle: "hidden", frame: false
  });

  // load the dist folder from Angular
  win.loadURL(
    url.format({
      pathname: path.join(__dirname, `/dist/CarEntertainment/index.html`),
      protocol: "file:",
      slashes: true,

    })
  );

  // The following is optional and will open the DevTools:
  // win.webContents.openDevTools()

  win.on("closed", () => {
    win = null;
  });

  ipcMain.on('ping', (event) => {
    event.sender.send('pong');
  });

  music(ipcMain);

  Menu.setApplicationMenu(null);
  // win.webContents.openDevTools()
}

app.on("ready", createWindow);

// on macOS, closing the window doesn't quit the app
app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});

// initialize the app's main window
app.on("activate", () => {
  if (win === null) {
    createWindow();
  }
});
