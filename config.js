//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "davidcyril209@gmail.com";
global.location = "Abuja, Nigeria";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/DeeCeeXxx/Queen_Anita-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/17c8ba84a7761eed633f6.jpg";
global.devs = "https://t.me/deecee_x";
global.sudo = process.env.SUDO || "2348084953516";
global.owner = process.env.OWNER_NUMBER || "2348084953516";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/H4qeXwa.jpeg,https://telegra.ph/file/ba9ced500f9eca7db8acb.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaUI4UkxoUlZFWGVIbGtVRVJjejRiUlV3WWJxMXQyZi9ZL29oZVBvNlhrUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR1REd09WV0tHSzdySGZCNUZRdW9rbmVaM1lqeTI4K2R0WFJQUGEwV3dqZz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJBRlBVNlpPS2hqblgzRzhnWXA2dmZHYkdFMkV6TDVjdVpnckRxeU4vdG5jPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIyVGdUa1FOUEtsQ1dYOEU1eVJoaXFCbVl6K1Z1SnN0ako5V0h3R0hrUVNzPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjRGRS93bE1WbUVBK3N1UjFHbkJ2T1FnOGZsRzdCd1dTb3ZjSjR4TmdkMzg9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im9hS05mREwyWEV5QWJHNmx0Wi9LdXZ6QkxjTlgrMDVFQUc4V0lCck9TR0k9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNkdYYTJRZkVYa0VqZDZOSjZGeTVLZjkreFpCV0w2T0xLMjNQaWEwL3lFND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaUoxRmtXb0Y5bnpWcVl5VWQyY0dSWDQ1M0xOMG5RMS8weGVPT0Y4UG13OD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJiTVcyVDR3RTBxQUlmZGFrbmFhWCtHbHp2eXQ4QkJBK3QwYkJXUzE4UTY1ZFNSVmNJQjUyeWk3U0V6NEJPNFprQnp5VWZaTXF5ZTdoZ0Z5dzFEekRnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6OTQsImFkdlNlY3JldEtleSI6Impsd1R1RDd4T3lOVWx2NlU0MUdSUXhkZWhuSEthMkRaNFhUSUlhb3l3eXc9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IndtSTFicHJSU3VLNVJ4VmZVV0dlbVEiLCJwaG9uZUlkIjoiOTY3YzViYzMtYjM0Ny00NjBiLTg4MTItNGZhNjliODlhMmRkIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IitwUmhuNzlEVFNQRVlWYTNQaVBWaVh6ejVZRT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJBdVFLRGFUMzZQYTlLbU95VXVrNUVwRXZpSHM9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiWkZGTFZXTFYiLCJtZSI6eyJpZCI6IjIzNDgwODQ5NTM1MTY6NEBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJVbW1pbWkgQ29sbGVjdGlvbiJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTjJFaC9JQkVPYTQxYllHR0FRZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoidWlvRXBuQmdFQ1J0cjA5RkFIbU1HZ0N1Nys3WVpFREwzTFhGMGJvVkFtdz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiYU9FT1crVzd3TTBhV05UTGFsWk1hNk0yU3lBeUZGQjFLT3kyY2h5clRGelhXR3BSaEZVSFdrNi9hK1I5bUlLUVBGcmkwRTRhVjJvTnBjc2daYld2Q0E9PSIsImRldmljZVNpZ25hdHVyZSI6IkxvTmE4Wjl1UVNhRUlQNElzTWFHWTl1SENrWlgxNlNsVVJ0K2JNbVppRjVES3hGQjBqTTRGL2hmOUZseXJOdmw4SFFGTzl1N0FmcDlaTXBrWjIwVUN3PT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjM0ODA4NDk1MzUxNjo0QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmJvcUJLWndZQkFrYmE5UFJRQjVqQm9BcnUvdTJHUkF5OXkxeGRHNkZRSnMifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjUyNTg4NjksIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBRzBKIn0="
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_ANITA-V2™`",
  author: process.env.PACK_AUTHER || "QUEEN_ANITA-V2",
  packname: process.env.PACK_NAME || "A N I T A",
  botname: process.env.BOT_NAME || "QUEEN_ANITA-V2",
  ownername: process.env.OWNER_NAME || "David Cyril",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "A N I T A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
