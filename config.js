const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "+923342856909";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_08_12_08_03_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzIsXG4gICAgICAgIDI0MixcbiAgICAgICAgNTQsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNSxcbiAgICAgICAgMTYzLFxuICAgICAgICAxOSxcbiAgICAgICAgMTY3LFxuICAgICAgICA2NyxcbiAgICAgICAgMTUwLFxuICAgICAgICAxODAsXG4gICAgICAgIDksXG4gICAgICAgIDksXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjQxLFxuICAgICAgICAxNDIsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMTAsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMjM3LFxuICAgICAgICAyNixcbiAgICAgICAgNCxcbiAgICAgICAgMzYsXG4gICAgICAgIDI0LFxuICAgICAgICA5NSxcbiAgICAgICAgNjksXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTM4LFxuICAgICAgICAxODIsXG4gICAgICAgIDIxOCxcbiAgICAgICAgODUsXG4gICAgICAgIDgxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgzLFxuICAgICAgICAxODIsXG4gICAgICAgIDg4LFxuICAgICAgICAyMzcsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjEsXG4gICAgICAgIDQ2LFxuICAgICAgICAxMzgsXG4gICAgICAgIDE2MixcbiAgICAgICAgMjExLFxuICAgICAgICAxMjYsXG4gICAgICAgIDE0MSxcbiAgICAgICAgNTQsXG4gICAgICAgIDg3LFxuICAgICAgICAxMDcsXG4gICAgICAgIDMyLFxuICAgICAgICA0MixcbiAgICAgICAgNjcsXG4gICAgICAgIDgyLFxuICAgICAgICAzLFxuICAgICAgICAxODQsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMzQsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTYxLFxuICAgICAgICAyMjksXG4gICAgICAgIDI5LFxuICAgICAgICAzNSxcbiAgICAgICAgMTYxLFxuICAgICAgICAxMDMsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMzlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk2LFxuICAgICAgICAyMixcbiAgICAgICAgODgsXG4gICAgICAgIDIwOSxcbiAgICAgICAgOTQsXG4gICAgICAgIDU1LFxuICAgICAgICA0OSxcbiAgICAgICAgMjQ3LFxuICAgICAgICA4OSxcbiAgICAgICAgMjAzLFxuICAgICAgICAxOTYsXG4gICAgICAgIDc0LFxuICAgICAgICAxMjYsXG4gICAgICAgIDM4LFxuICAgICAgICAyMTEsXG4gICAgICAgIDY1LFxuICAgICAgICA1NyxcbiAgICAgICAgMTU1LFxuICAgICAgICAxMjcsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTA1LFxuICAgICAgICAxNjksXG4gICAgICAgIDg0LFxuICAgICAgICAxODMsXG4gICAgICAgIDcyLFxuICAgICAgICA3MixcbiAgICAgICAgMjEzLFxuICAgICAgICAxMzksXG4gICAgICAgIDEyNixcbiAgICAgICAgNTcsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTIzXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjM2LFxuICAgICAgICAyNDYsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjMsXG4gICAgICAgIDM4LFxuICAgICAgICAxNjgsXG4gICAgICAgIDMzLFxuICAgICAgICAxNjksXG4gICAgICAgIDg5LFxuICAgICAgICA0NyxcbiAgICAgICAgMTY2LFxuICAgICAgICAyMTcsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTc5LFxuICAgICAgICAyNTMsXG4gICAgICAgIDgwLFxuICAgICAgICAyNTQsXG4gICAgICAgIDk5LFxuICAgICAgICAyMDIsXG4gICAgICAgIDQ0LFxuICAgICAgICAyMDEsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNTIsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTgxLFxuICAgICAgICA0NSxcbiAgICAgICAgNjcsXG4gICAgICAgIDg5LFxuICAgICAgICAxODEsXG4gICAgICAgIDI0MixcbiAgICAgICAgMzZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDg4LFxuICAgICAgICAyNDcsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjA4LFxuICAgICAgICAxMSxcbiAgICAgICAgNTksXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTc3LFxuICAgICAgICAyNDUsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjMwLFxuICAgICAgICAxNDAsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTc4LFxuICAgICAgICA5LFxuICAgICAgICAxLFxuICAgICAgICA2MyxcbiAgICAgICAgNTIsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTE3LFxuICAgICAgICAxNzcsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTYwLFxuICAgICAgICA5NixcbiAgICAgICAgMjMwLFxuICAgICAgICAyMDcsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjM3LFxuICAgICAgICA1NyxcbiAgICAgICAgMjE2LFxuICAgICAgICAxNzUsXG4gICAgICAgIDczXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTU3LFxuICAgICAgICAyMzMsXG4gICAgICAgIDExMixcbiAgICAgICAgNDAsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjM1LFxuICAgICAgICAyMTgsXG4gICAgICAgIDI1LFxuICAgICAgICAyMjEsXG4gICAgICAgIDQxLFxuICAgICAgICA3MCxcbiAgICAgICAgNjcsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjQyLFxuICAgICAgICA2LFxuICAgICAgICAxMDgsXG4gICAgICAgIDk0LFxuICAgICAgICAyNDEsXG4gICAgICAgIDYyLFxuICAgICAgICAzNyxcbiAgICAgICAgMTczLFxuICAgICAgICA4MSxcbiAgICAgICAgODMsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTI2LFxuICAgICAgICAxNzQsXG4gICAgICAgIDk0LFxuICAgICAgICAyMTYsXG4gICAgICAgIDcxLFxuICAgICAgICA1MSxcbiAgICAgICAgNDRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgOCxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDE5OSxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxMzQsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICA5OCxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDE0OSxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTE1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICAyMyxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAxMjdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzMsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTAzLFxuICAgICAgICAzNyxcbiAgICAgICAgMjUxLFxuICAgICAgICAxOTMsXG4gICAgICAgIDc4LFxuICAgICAgICA1MixcbiAgICAgICAgMjQzLFxuICAgICAgICAyMzAsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTQsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNDgsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMzksXG4gICAgICAgIDEwMyxcbiAgICAgICAgNTcsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTU5LFxuICAgICAgICAxNDgsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjU0LFxuICAgICAgICA0NCxcbiAgICAgICAgMjUyLFxuICAgICAgICAxOTQsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMjE2LFxuICAgICAgICAyMzUsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNjYsXG4gICAgICAgIDU3LFxuICAgICAgICAxOTEsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjU1LFxuICAgICAgICAyNDMsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTU2LFxuICAgICAgICAxMTgsXG4gICAgICAgIDI4LFxuICAgICAgICAyMDIsXG4gICAgICAgIDgsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMixcbiAgICAgICAgNzYsXG4gICAgICAgIDY0LFxuICAgICAgICAxNSxcbiAgICAgICAgMTIzLFxuICAgICAgICA4OSxcbiAgICAgICAgMTkyLFxuICAgICAgICAyNyxcbiAgICAgICAgMjMsXG4gICAgICAgIDc2LFxuICAgICAgICAxOTYsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTUzLFxuICAgICAgICAyMzUsXG4gICAgICAgIDcsXG4gICAgICAgIDE1MCxcbiAgICAgICAgOTUsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjI1LFxuICAgICAgICAxMzlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDM4LFxuICBcImFkdlNlY3JldEtleVwiOiBcIm5XTHhsZFhoUVR4TjN3TnFKTWFoN2xVN0gxeStOdUhZY2o3TkdNY1pZdzA9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIk05ME8wRW03UXJHVXZ0UEZkd0JJWHdcIixcbiAgXCJwaG9uZUlkXCI6IFwiZjJkMGVlYmQtN2I3Ny00YWI2LTliNGYtNmZmNjEwMjk2NzEyXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDQsXG4gICAgICA2MixcbiAgICAgIDE3NCxcbiAgICAgIDE1NixcbiAgICAgIDE3MixcbiAgICAgIDExNixcbiAgICAgIDI0OSxcbiAgICAgIDU5LFxuICAgICAgMTkyLFxuICAgICAgMTY5LFxuICAgICAgMTI4LFxuICAgICAgNTQsXG4gICAgICA5NSxcbiAgICAgIDI0NixcbiAgICAgIDE4MCxcbiAgICAgIDIwNCxcbiAgICAgIDIyLFxuICAgICAgODcsXG4gICAgICAyNDIsXG4gICAgICAyMThcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjI0LFxuICAgICAgNDYsXG4gICAgICA4OCxcbiAgICAgIDE5MyxcbiAgICAgIDE1MCxcbiAgICAgIDIxNCxcbiAgICAgIDE5MSxcbiAgICAgIDExNixcbiAgICAgIDE4OSxcbiAgICAgIDE0MyxcbiAgICAgIDE0MSxcbiAgICAgIDIxMixcbiAgICAgIDUwLFxuICAgICAgMTM1LFxuICAgICAgMTc4LFxuICAgICAgMTY0LFxuICAgICAgMTg3LFxuICAgICAgMTkwLFxuICAgICAgMjQxLFxuICAgICAgMTVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiOUFGMkRFMk1cIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjkyMzM0Mjg1NjkwOTozNEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiNzg5Mjg5MzI3OTA0ODA6MzRAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTUtlLzBzUXdzeTN0UVlZQVNBQUtBQT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJqNzltTUZyRjI4NWJxMVlWT0tuYTlTZnFSVkxxR093Q1FRTUE4Z2MxSm1BPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImdjWlFtczJZVmhJWkkvdGpIL29HRGdVNVdiVEhBUjVwMUZab1VuQVhYcEEwY0pwajZJNFByMk16SXBMTE9yN0Fwbm14NUhmQTB6L0dxZFNDY21jcERnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInZaZTJSdGxSako5Q2t6THdLNThNYVU3ZUR3enZwYnE2WEdNR3FLSjE1ZU5CZTVINzFxd1BUOGIyaDVMS3QxZlZ2WTFRK2I0MDZoQnVsU3lOa2xwVWhnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzM0Mjg1NjkwOTozNEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAyMSxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAyLFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgNyxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICA5NlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIyNjcyNzExXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ==
"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
