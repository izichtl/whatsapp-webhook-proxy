"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTextMessageInput = exports.sendMessage = void 0;
// @ts-nocheck
const axios_1 = __importDefault(require("axios"));
function sendMessage(data) {
    var config = {
        method: 'post',
        url: `https://graph.facebook.com/${process.env.VERSION}/${process.env.PHONE_NUMBER_ID}/messages`,
        headers: {
            'Authorization': `Bearer ${process.env.WA_TOKEN}`,
            'Content-Type': 'application/json'
        },
        data: data
    };
    return (0, axios_1.default)(config);
}
exports.sendMessage = sendMessage;
function getTextMessageInput(recipient, text) {
    return JSON.stringify({
        "messaging_product": "whatsapp",
        "preview_url": false,
        "recipient_type": "individual",
        "to": recipient,
        "type": "text",
        "text": {
            "body": text
        }
    });
}
exports.getTextMessageInput = getTextMessageInput;
// module.exports = {
//   sendMessage: sendMessage,
//   getTextMessageInput: getTextMessageInput
// };
//# sourceMappingURL=sender-helper.js.map