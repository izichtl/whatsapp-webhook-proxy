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
const a = (0, uuid_1.v4)();
const router = express_1.default.Router();
router.use(express_1.default.json());
require("dotenv").config();
router.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    return res.send('whatsapp-webhook-proxy-to-void-pay-ngrok');
}));
router.post('/redirect', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(req.body);
    try {
        const wmaid = '107368482457800';
        const url = `https://graph.facebook.com/v19.0/${wmaid}/messages`;
        const response = yield fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${process.env.WA_TOKEN}`,
            },
            body: JSON.stringify({
                messaging_product: 'whatsapp',
                to: "5521982608223",
                type: "text",
                text: {
                    "body": 'resposta ao usuário',
                }
            }),
        });
        // console.log(response)
        // Verifica se a resposta foi bem-sucedida
        if (!response.ok) {
            throw new Error('Erro ao enviar os dados');
        }
        // Converte a resposta para JSON
        const responseData = yield response.json();
        // Envia os dados de volta para o cliente
        res.json(responseData);
        res.status(200).send('Sucesso na requisição');
    }
    catch (error) {
        console.error('Erro na requisição:', error);
        res.status(500).send('Erro na requisição');
    }
}));
router.post('/webhook', (req, res) => {
    const dados = req.body;
    console.log('axios entry');
    console.log(dados);
    console.log(req.body);
    try {
        const wmaid = '107368482457800';
        const url = `https://graph.facebook.com/v19.0/${wmaid}/messages`;
        const response = yield fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${process.env.WA_TOKEN}`,
            },
            body: JSON.stringify({
                messaging_product: 'whatsapp',
                to: "5521982608223",
                type: "text",
                text: {
                    "body": 'resposta ao usuário',
                }
            }),
        });
        // console.log(response)
        // Verifica se a resposta foi bem-sucedida
        if (!response.ok) {
            throw new Error('Erro ao enviar os dados');
        }
        // Converte a resposta para JSON
        const responseData = yield response.json();
        // Envia os dados de volta para o cliente
        res.json(responseData);
        res.status(200).send('Sucesso na requisição');
    }
    catch (error) {
        console.error('Erro na requisição:', error);
        res.status(500).send('Erro na requisição');
    }
});
exports.default = router;
//# sourceMappingURL=whats-reciver.js.map