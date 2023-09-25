const { app, BrowserWindow } = require('electron')
function createWindow () {
    let mainWindow = new BrowserWindow({
        width: 1200,
        height: 800,
        
        webPreferences: {
          nodeIntegration: true
        }
      });
    mainWindow.loadFile('index.html');
    mainWindow.setMenuBarVisibility(false);
    mainWindow.setResizable(false);
}
app.whenReady().then(createWindow);