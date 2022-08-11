//════════════════════════════//

const fs = require("fs")
const chalk = require("chalk")

//aumto functioner
global.autoTyping = false //auto tying in gc (true to on, false to off)
global.autoreadpmngc = false //auto reading in gc and pm (true to on, false to off)
global.autoReadGc = true //auto reading in gc (true to on, false to off)
global.autoReadAll = true // auto reading in all pchat gc and status (true to on, false to off)
global.autoRecord = false //auto recording (true to on, false to off)
global.available = true //auto available (true to on, false to off)

//documents variants
global.doc1 = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.doc2 = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.doc3 = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.doc4 = 'application/zip'
global.doc5 = 'application/pdf'
global.doc6 = 'application/vnd.android.package-archive'

//owmner v card
global.owner = ['6288214989352'] //masukin no owner nya
global.ownername = "IlhamGanteng"
global.ytname = "YT: Hamz9999+" //ur yt chanel name
global.socialm = "GitHub: HamzBotzzzzz" //ur github or insta name
global.location = "Indonesia, Jawa, Bandung" //ur location

//bot bombdy
global.botname = "ZxynnBotz" //ur bot name
global.websitex = "https://github.com/HamzBotzzzzz" //ur website
global.vidmenu = { url: 'https://k.top4top.io/m_2368l5agg1.mp4' } //gif and video menu
global.packname = "ZxynnBotz\n\n\n\n\n\n\n🕊️🕊️ "
global.author = "IlhamGanteng" 
global.themeemoji = "🐷"
global.reactmoji = "🐣"
global.ownertag = ['6288214989352','79203890637'] //ur owner tag
global.ownernummenu = ['6288213989352','6288214989352'] //ur owner number in menu and all
global.watermark = "ZxynnBotz" //ur watermark
global.botscript = "https://github.com/HamzBotzzzzz"
global.linkz1 = "https://chat.whatsapp.com/FdP0znFDbNWKkleGN6bhxx"
global.linkz2 = "https://chat.whatsapp.com/FdP0znFDbNWKkleGN6bhxx"

//Bot theme media
global.thum = fs.readFileSync("./Galery/theme/DNP77picture.jpg") //ur thumb pic
global.log0 = fs.readFileSync("./Galery/theme/DNP77picture.jpg") //ur logo pic
global.err4r = fs.readFileSync("./Galery/theme/DNP77picture.jpg") //ur error pic
global.thumb = fs.readFileSync("./Galery/theme/DNP77picture.jpg") //ur thumb pic

//database
global.ntilinkytvid = []
global.ntilinkytch = []
global.ntilinkig = []
global.ntilinkfb = []
global.ntilinktg = []
global.ntilinktt = []
global.ntilinktwt = []
global.ntilinkall = []
global.nticall = []
global.ntwame = []
global.nttoxic = []
global.ntnsfw = []
global.ntvirtex = []
global.rkyt = []
global.wlcm = []
global.gcrevoke = []
global.autorep = []
global.ntilink = []

//omther
global.lolhuman = "KaysaS"
global.sessionName = "session"
global.antitags = true
global.prefa = ['','!','.','🐦','🐤','🗿']
global.mess = {
    success: 'Done✓',
    admin: 'Lu Admin? ',
    botAdmin: 'Jujurly Bot Blm Admin',
    owner: 'Lu Owner ?',
    group: 'Mesti Ke Group Kita',
    private: 'Pc Ngab',
    bot: 'This feature is only for bot',
    wait: 'Tunggu Sabarr',
    linkm: 'Mana Link Nya??',
    error: 'Error!',
    ban: 'You have been banned by the owner, if you want to be unbanned, chat owner.',
    nsfw: 'The nsfw feature has not been activated, please contact the admin to activate',
    banChat: 'The bot was banned in this group, please contact the owner to unban'
}
global.limitawal = {
    premium: "Infinity",
    free: 2,
    monayawal: 1000
}
   global.rpg = {
   darahawal: 100,
   besiawal: 95,
   goldawal: 30,
   emeraldawal: 8,
   umpanawal: 10,
   potionawal: 5
}
global.limitawal = {
    rakyat: "Infinity",
    free: 100
}
// api website by xenz
global.APIs = {
	zenz: 'https://zenzapis.xyz',
}

// key
global.APIKeys = {
	'https://zenzapis.xyz': 'Your Key',
}
//menu logo maker
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
