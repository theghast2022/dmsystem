const Discord = require('discord.js');
const fs = require('fs');
const client = new Discord.Client();
const ytdl = require("ytdl-core");
const { Client, Util } = require('discord.js');
const getYoutubeID = require('get-youtube-id');
const fetchVideoInfo = require('youtube-info');
const YouTube = require('simple-youtube-api');
const youtube = new YouTube("AIzaSyAdORXg7UZUo7sePv97JyoDqtQVi3Ll0b8");
const queue = new Map();
var prefix = "_"

client.on('message', message => {
  if (message.content === "#support") {
  let embed = new Discord.RichEmbed()
.setAuthor(message.author.username)
.setColor("#9B59B6")
.addField(" ** :gear: Server Support :gear: **" , "  **https://discord.gg/p6WKSDq**")
  
  
message.channel.sendEmbed(embed);
 }
});
client.login('NTA4MjYwMzExMzU1MDk3MDk4.DvcmuA.OZP91zAb-jkzJ2sENTRLGzxdzaE');