const {
    app,
    BrowserWindow,
    webContents,
    screen,
    shell
} = require('electron')
const path = require('path')

var mainWindow;


function createWindow(address, prop) {

    let win = new BrowserWindow(prop)

    //    const mainWindow = new BrowserWindow({
    //        width: 800,
    //        height: 600,
    //        title: 'u boy',                             // come in front, if html file have not a title
    //        backgroundColor: '#e2e2e2',
    //        webPreferences: {
    //            preload: path.join(__dirname, 'preload.js')
    //        }
    //    })

    win.loadFile(address)
    //    console.log(webContents.getAllWebContents())              //  to show all web contents related

    return win

}



app.whenReady().then(() => {

    console.log(app.getLocale())

    mainWindow = createWindow('index.html', {
        width: 800,
        height: 600,
        title: 'u boy',
        backgroundColor: '#e2e2e2',
        //   icon: path.join(__dirname, 'assets/img14.jpg')        // to add icon to app
        webPreferences: {
            preload: path.join(__dirname, 'preload.js')
        }
    })

    /*   createWindow('index.html', {
           width: 300,
           height: 300,
           title: 'u boy',
           backgroundColor: '#e2e2e2',
           webPreferences: {
               preload: path.join(__dirname, 'preload.js')
           }
       }) */

    mainWindow.on('activate', function () {
        if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
    //    console.log('==>   ', screen.getAllDisplays())                    // to get info of all displays attached 
    //    console.log('==>   ', screen.getPrimaryDisplay())                 // to get info of primary display

    mainWindow.on('blur', () => {

        mainWindow.setIcon(path.join(__dirname, 'assets/logan.jpg'))

    })
    
    mainWindow.on('focus', () => {

        mainWindow.setIcon(path.join(__dirname, 'assets/img14.jpg'))

    })

//    let filepath = app.getAppPath() + '\\README.md'       // open to use file in shell
//    shell.showItemInFolder(filepath)                      //this is to show any file in folder
//    shell.openItem(filepath)                              //this will open that file
    
//    let fp = 'file:\\' + app.getAppPath() + '\\index.html'  //  to open externally
//    shell.openExternal(fp)                                  //  open it in Browser
    

})

//    shell.beep()          // make beep sound

app.on('window-all-closed', function () {
    if (process.platform !== 'darwin') app.quit()
})
