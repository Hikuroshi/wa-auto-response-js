
# WA auto response with javascript

Simple bot to automatically respond to incoming chats


## Requirements

 - [whatsapp-web.js](https://www.npmjs.com/package/whatsapp-web.js)
 - [qrcode-terminal](https://www.npmjs.com/package/qrcode-terminal)
 - [dotenv](https://www.npmjs.com/package/dotenv)


## Run Locally

Clone the project

```bash
  git clone https://github.com/Hikuroshi/wa-auto-response-js.git
```

Go to the project directory

```bash
  cd wa-auto-response-js
```

Install dependencies

```bash
  npm install
```
## Environment Variables

To run this project, you will need to add the following environment variables to your `.env` file
Add environment variables `.env` file to root directory for `NO_HP`.

`NO_HP` is so that the bot is only active when the chat comes from that number.
## Running Tests

To run tests, run the following command

```bash
  npm start
```

After that, please scan the QR code that appears to login. \
To add or change request and response messages, you can see it in `all_message.json`
## Contributing

Contributions are always welcome!


