"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// @ts-nocheck 
const express_1 = __importDefault(require("express"));
const uuid_1 = require("uuid");
const sender_helper_1 = require("../helper/sender-helper");
const a = (0, uuid_1.v4)();
const router = express_1.default.Router();
router.use(express_1.default.json());
require("dotenv").config();
router.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    return res.send('whatsapp-webhook-proxy-to-void-pay-ngrok');
}));
router.post('/', function (req, res, next) {
    var data = (0, sender_helper_1.getTextMessageInput)('5521982608223', 'Welcome to the Movie Ticket Demo App for Node.js!');
    console.log(data, '');
    (0, sender_helper_1.sendMessage)(data)
        .then((response) => {
        res.redirect(200, '/');
        return;
    })
        .catch(function (error) {
        console.log(error);
        console.log(error.response.data);
        res.sendStatus(500);
        return;
    });
});
router.post('/webhook', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const dados = req.body;
    console.log('axios entry');
    console.log(dados);
    console.log(req.body);
}));
exports.default = router;
//# sourceMappingURL=whats-reciver.js.map