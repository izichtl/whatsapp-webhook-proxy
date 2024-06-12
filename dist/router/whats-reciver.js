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
const axios_1 = __importDefault(require("axios"));
const message_flow_1 = require("../helper/message-flow");
const router = express_1.default.Router();
router.use(express_1.default.json());
require("dotenv").config();
router.get('/', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // return res.send(createModel('9191919191', growProgramTags[basic], 'startModel'))
    return res.send('whatsapp-webhook-proxy-to-void-pay-ngrok');
}));
router.post('/webhook', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j;
    const dados = req.body;
    // console.log(JSON.stringify(dados, null, 2))
    // verifica se tem messagem
    const message = (_e = (_d = (_c = (_b = (_a = req.body.entry) === null || _a === void 0 ? void 0 : _a[0]) === null || _b === void 0 ? void 0 : _b.changes[0]) === null || _c === void 0 ? void 0 : _c.value) === null || _d === void 0 ? void 0 : _d.messages) === null || _e === void 0 ? void 0 : _e[0];
    const business_phone_number_id = (_j = (_h = (_g = (_f = req.body.entry) === null || _f === void 0 ? void 0 : _f[0].changes) === null || _g === void 0 ? void 0 : _g[0].value) === null || _h === void 0 ? void 0 : _h.metadata) === null || _j === void 0 ? void 0 : _j.phone_number_id;
    if (message !== undefined) {
        yield (0, message_flow_1.messageFlow)(dados, res);
    }
    else {
        if (message) {
            yield (0, axios_1.default)({
                method: "POST",
                url: `https://graph.facebook.com/v18.0/${business_phone_number_id}/messages`,
                headers: {
                    Authorization: `Bearer ${process.env.WA_TOKEN}`,
                },
                data: {
                    messaging_product: "whatsapp",
                    status: "read",
                    message_id: message.id,
                },
            });
        }
        res.sendStatus(200);
    }
}));
exports.default = router;
//# sourceMappingURL=whats-reciver.js.map