import { BrowserWindow } from "electron";
const path = require('path');

export const WindowUtil = {
  createWindow: ({
    width,
    height,
  }: {
    width: number;
    height: number;
  }) => {
    let win: BrowserWindow | null = new BrowserWindow({
      show: false,
      minWidth: 1200,
      minHeight: 800,
      width: width,
      height: height,
    });

    if (process.env.mode === 'dev') {
        win.loadURL('http://localhost:3000')
        win.webContents.openDevTools()
      } else {
        // win.loadURL(`file://${path.join(__dirname, '../build/index.html')}`)
        win.loadFile(`${path.join(__dirname, '../build/index.html')}`)
      }
    
      win.once('ready-to-show', () => win?.show());
      win.on('closed', () => {
        win = null;
      });
  },
};
