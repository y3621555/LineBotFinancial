var linebot = require('linebot');
var request = require('request');
var cheerio = require('cheerio');

var bot = linebot({
    channelId: '1655633754', 
    channelSecret: 'b745e50e79064d2faf87cbe9421629b3', 
    channelAccessToken: 'ZNn8e+aaWH0PxzgZQEPvlrKm6GZMm2V+0qec5vtAC8hMdwXYVf8p8DMnXRqf4nSwLTwKH1KxavYp5u17EgPJ9wPksr6ei//XDsig63RzEiz9+/p/fJOvy4FpdsPtD5y5eQXyjWxhXrfstubkPMHBXwdB04t89/1O/w1cDnyilFU='
});

var Prefix = "/";
bot.on('message', function (event){
    var MSG = event.message.text
    if (MSG.substring(0,1) == Prefix){
        if ( MSG.substring(1,3) == "幫助" || MSG.substring(1,2) == "h"){
            event.reply("指令").then(function (data) { 
                // 當訊息成功回傳後的處理 
            }).catch(function (error) { 
                // 當訊息回傳失敗後的處理
            });
        }
        event.reply("指令").then(function (data) { 
            // 當訊息成功回傳後的處理 
        }).catch(function (error) { 
            // 當訊息回傳失敗後的處理
        });
        
    }
    else {
        event.reply(event.message.text).then(function (data) { 
            // 當訊息成功回傳後的處理 
        }).catch(function (error) { 
            // 當訊息回傳失敗後的處理
        });
    }
});

// Bot所監聽的webhook路徑與port
bot.listen('/linemwebhook', 3000, function () { 
    console.log('[BOT已準備就緒]'
    );
});