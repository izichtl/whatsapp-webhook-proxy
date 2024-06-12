"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// @ts-nocheck
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const whats_reciver_1 = __importDefault(require("./router/whats-reciver"));
const app = (0, express_1.default)();
require("dotenv").config();
app.use(body_parser_1.default.urlencoded({ extended: false }));
app.use(body_parser_1.default.json());
// router
app.use('/', whats_reciver_1.default);
app.get("/webhook", (req, res) => {
    // let mode=req.query["hub.mode"];
    let challange = req.query["hub.challenge"];
    res.status(200).send(challange);
    // let token=req.query["hub.verify_token"];
    // console.log(process.env.API_ME)
    // console.log(token)
    // if(mode && token){
    //   if(mode === "subscribe" && token === process.env.API_ME){
    //     res.status(200).send(challange);
    //   }else{
    //       res.status(403)
    //   }
    // }
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta http://localhost:${PORT}`);
});
//# sourceMappingURL=index.js.map