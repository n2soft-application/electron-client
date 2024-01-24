const { app, BrowserWindow } = require("electron");
const path = require("node:path");

const createWindow = () => {
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
      preload: path.join(__dirname, "../public/preload.js"),
    },
  });

  if (process.env.mode === "dev") {
    win.loadURL("http://localhost:3000");
    win.webContents.openDevTools();
  } else {
    win.loadFile(`${path.join(__dirname, "../build/index.html")}`);
  }

  win.once("ready-to-show", () => win.show());
  win.on("closed", () => {
    win = null;
  });
};

app.whenReady().then(() => {
  createWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
