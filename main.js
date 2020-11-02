const {
    app,
    BrowserWindow,
    webContents,
    screen,
    shell
} = require('electron')
const path = require('path')



var mainWindow, splash;


function createWindow(address = null, prop = null) {

    //    let win = new BrowserWindow(prop)

    mainWindow = new BrowserWindow({
        width: 800,
        height: 600,
        title: 'u boy', // come in front, if html file have not a title
        backgroundColor: '#e2e2e2',
        icon: "./build/icon.ico",
        show: false,
        webPreferences: {
            preload: path.join(__dirname, 'preload.js'),
            nodeIntegration: true
        }
    })

    mainWindow.loadFile('index.html')
    //    mainWindow.webContents.toggleDevTools()
    //    console.log(webContents.getAllWebContents())              //  to show all web contents related
    //    return win

}



app.whenReady().then(() => {

    console.log(app.getLocale())
    createWindow()
    mainWindow.show()
    //    mainWindow = createWindow('index.html', {
    //        width: 800,
    //        height: 600,
    //        title: 'u boy',
    //        backgroundColor: '#e2e2e2',
    //        //   icon: path.join(__dirname, 'assets/img14.jpg')        // to add icon to app
    //        webPreferences: {
    //            preload: path.join(__dirname, 'preload.js')
    //        }
    //    })

    //    splash = createWindow('splash.html', {
    //        width: 300,
    //        height: 300,
    //        title: 'u boy',
    //        backgroundColor: '#e2e2e2',
    //        webPreferences: {
    //            preload: path.join(__dirname, 'preload.js')
    //        }
    //    })

    //    console.log('==>   ', screen.getAllDisplays())                    // to get info of all displays attached 
    //    console.log('==>   ', screen.getPrimaryDisplay())                 // to get info of primary display

    //    mainWindow.on('blur', () => {
    //
    //        mainWindow.setIcon(path.join(__dirname, 'assets/logan.jpg'))
    //
    //    })
    //
    //    mainWindow.on('focus', () => {
    //
    //        mainWindow.setIcon(path.join(__dirname, 'assets/img14.jpg'))
    //
    //    })

    //    let filepath = app.getAppPath() + '\\README.md'       // open to use file in shell
    //    shell.showItemInFolder(filepath)                      //this is to show any file in folder
    //    shell.openItem(filepath)                              //this will open that file

    //    let fp = 'file:\\' + app.getAppPath() + '\\index.html'  //  to open externally
    //    shell.openExternal(fp)                                  //  open it in Browser

})

//    shell.beep()          // make beep sound

//mainWindow.on('activate', function () {
//    if (BrowserWindow.getAllWindows().length === 0) createWindow()
//})


app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') app.quit()
})



