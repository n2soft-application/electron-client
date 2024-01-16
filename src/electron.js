const { app, BrowserWindow } = require('electron')
const path = require('path');

app.whenReady().then(() => {
  let win = new BrowserWindow({
    show: false,
    minWidth: 1200,
    minHeight: 800,
    width: 1200,
    height: 800,
    // transparent: true,
    // frame: false,
    // titleBarStyle: 'hidden',
    webPreferences: {
      enableRemoteModule: true,
      preload: `${__dirname}/preload.js`
    }
  })
  console.log(process.env)
  if (process.env.mode === 'dev') {
    win.loadURL('http://localhost:3000')
    win.webContents.openDevTools()
  } else {
    // win.loadURL(`file://${path.join(__dirname, '../build/index.html')}`)
    win.loadFile(`${path.join(__dirname, '../build/index.html')}`)
  }

  win.once('ready-to-show', () => win.show());
  win.on('closed', () => {
    win = null;
  });
})

app.on('window-all-closed', () => {
  app.quit()
})