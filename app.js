const msgReq = require('./all_message.json');

require('dotenv').config();
const qrcode = require('qrcode-terminal');

// const { Client } = require('whatsapp-web.js');
// const client = new Client();

const { Client, NoAuth } = require('whatsapp-web.js');
const client = new Client({
    puppeteer: {
        args: [
            '--no-sandbox',
            '--disable-setuid-sandbox'
        ],
        authStrategy: new NoAuth()
    }
});

client.on('qr', qr => {
    qrcode.generate(qr, {small: true});
});

client.on('ready', () => {
    console.log('Client is ready!');
});


client.on('message', message => {
    const noHp = process.env.NO_HP;
    const number = noHp.substring(1) + "@c.us";
    const noFrom = message.from;
    
    const req_sapaan = msgReq.message_request.sapaan_request;
    const res_sapaan = msgReq.message_response.sapaan_response;
    
    var delayTime = Math.floor(Math.random() * 15000) + 5000;
    var randomMessage = Math.floor(Math.random() * res_sapaan.length)

	if(req_sapaan.includes(message.body.toLowerCase())) {
        if (noFrom === number) {
            setTimeout(delay, delayTime);

            function delay() {
                message.reply(res_sapaan[randomMessage]);
            }
        }
	}
});

client.initialize();
