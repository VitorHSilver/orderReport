const { app, BrowserWindow } = require('electron/main');
const path = require('node:path');

require('electron-reload')(__dirname, {
     electron: path.join(__dirname, 'node_modules', '.bin', 'electron'),
});

function createWindow() {
     const win = new BrowserWindow({
          width: 1000,
          height: 600,
          webPreferences: {
               preload: path.join(__dirname, 'preload.js'),
          },
          autoHideMenuBar: true,
     });

     win.loadFile('./index.html');
}

app.whenReady().then(() => {
     createWindow();

     app.on('activate', () => {
          if (BrowserWindow.getAllWindows().length === 0) {
               createWindow();
          }
     });
});

app.on('window-all-closed', () => {
     if (process.platform !== 'darwin') {
          app.quit();
     }
});
