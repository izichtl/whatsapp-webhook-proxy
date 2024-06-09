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
const whats_sender_1 = require("../helper/whats-sender");
const axios_1 = __importDefault(require("axios"));
const uuid_1 = require("uuid");
const a = (0, uuid_1.v4)();
const router = express_1.default.Router();
router.use(express_1.default.json());
require("dotenv").config();
router.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    return res.send('whatsapp-webhook-proxy-to-void-pay-ngrok');
}));
router.post('/t', (req, res) => {
    console.log('ttttttttttttttt');
    console.log(req.body);
    if (true) {
        (0, whats_sender_1.whatsAppSenderMessage)("5521982608223", a, "107368482457800");
        res.status(200).send('Webhook recebida com sucesso!2');
    }
});
router.post('/webhook', (req, res) => {
    const dados = req.body;
    console.log('axios entry');
    const url = `${process.env.REDIRECT_URL}/t`;
    console.log(url);
    axios_1.default.post(url, dados).then(response => {
        // Resposta recebida da outra rota
        console.log(response.data);
        // Você pode retornar uma resposta para o cliente, se desejar
        // res.send('Dados enviados com sucesso para a outra rota!');
    })
        .catch(error => {
        // Tratamento de erros, se houver
        console.error('Erro ao enviar os dados para a outra rota:', error);
        // Retorne um status de erro para o cliente, se necessário
        // res.status(500).send('Erro ao enviar os dados para a outra rota!');
    });
    console.log('axios out');
    res.status(200).send('Webhook recebida com sucesso!');
});
exports.default = router;
//# sourceMappingURL=whats-reciver.js.map