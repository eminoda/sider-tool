const path = require("path");
const { createWindow, getScreenDisplay } = require("../utils");
const config = require("../config/index");
const { setLogger } = require("../logger");
const logger = setLogger("window:search");

exports.show = () => {
  const { workAreaSize } = getScreenDisplay();

  const rect = {
    width: workAreaSize.width,
    height: workAreaSize.height,
  };

  const win = createWindow({
    // 自定义参数
    ...config.windows.screenShot,
    ...rect,
    resizable: true,
    autoHideMenuBar: true,
    frame: false,
    transparent: true,
    webPreferences: {
      devTools: true,
      preload: path.join(__dirname, "../preload.js"),
      webSecurity: true,
      nodeIntegration: true,
      webviewTag: true,
    },
  });
};
