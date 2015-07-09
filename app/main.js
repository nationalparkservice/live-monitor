var app = require('app'),
  BrowserWindow = require('browser-window'),
  main = null;

app.commandLine.appendSwitch('disable-http-cache');
app.on('ready', function() {
  main = new BrowserWindow({
    fullscreen: true,
    frame: false,
    kiosk: true
  });
  main.loadUrl('file://' + __dirname + '/index.html');
  main.on('closed', function() {
    main = null;
  });
  //main.openDevTools();
});
app.on('window-all-closed', function() {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});
