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
Object.defineProperty(exports, "__esModule", { value: true });
exports.messageFlow = void 0;
const base_1 = require("../models/base");
const data_storage_1 = require("./data-storage");
const sender_helper_1 = require("./sender-helper");
const messageFlow = (dados, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s, _t;
    const from = dados.entry[0].changes[0].value.messages[0].from;
    const messageType = (_f = (_e = (_d = (_c = (_b = (_a = dados === null || dados === void 0 ? void 0 : dados.entry) === null || _a === void 0 ? void 0 : _a[0]) === null || _b === void 0 ? void 0 : _b.changes) === null || _c === void 0 ? void 0 : _c[0]) === null || _d === void 0 ? void 0 : _d.value) === null || _e === void 0 ? void 0 : _e.messages[0]) === null || _f === void 0 ? void 0 : _f.type;
    const geralMessage = (_l = (_k = (_j = (_h = (_g = dados === null || dados === void 0 ? void 0 : dados.entry) === null || _g === void 0 ? void 0 : _g[0]) === null || _h === void 0 ? void 0 : _h.changes) === null || _j === void 0 ? void 0 : _j[0]) === null || _k === void 0 ? void 0 : _k.value) === null || _l === void 0 ? void 0 : _l.messages[0];
    if (messageType === 'interactive') {
        const { nfm_reply } = geralMessage.interactive;
        const { response_json } = nfm_reply;
        const response_json_parsed = JSON.parse(response_json);
        const { accpet_response, screen_0_Dropdown_0 } = response_json_parsed;
        if (screen_0_Dropdown_0 !== undefined) {
            // pic_a_theme
            // need to be continued were
            (0, data_storage_1.storageData)((0, base_1.createModel)(from, base_1.growProgramTags['investiment'], 'startModel')).then(e => res.sendStatus(200));
            // const data = getTemplatedMessageInput(from, 'IVAN', 'pic_a_theme');
            // sendMessage(data)
            // .then((response) => {
            //   res.sendStatus(200)
            // return
            // })
            // .catch(function (error) {
            //   console.log(error)
            //   console.log(error.response.data)
            //   res.sendStatus(500)
            //   return
            // })
        }
        if (accpet_response === 'accept_program_grow') {
            // pic_a_theme
            (0, data_storage_1.storageData)((0, base_1.createModel)(from, base_1.growProgramTags['basic'], 'endModel'));
            const data = (0, sender_helper_1.getTemplatedMessageInput)(from, 'IVAN', 'pic_a_theme');
            (0, sender_helper_1.sendMessage)(data)
                .then((response) => {
                res.sendStatus(200);
                return;
            })
                .catch(function (error) {
                // console.log(error)
                // console.log(error.response.data)
                res.sendStatus(500);
                return;
            });
        }
        if (accpet_response === 'not_accept_program_grow') {
            (0, data_storage_1.storageData)((0, base_1.createModel)(from, base_1.growProgramTags['basic'], 'endModel'));
            const data = (0, sender_helper_1.getTemplatedMessageInput)(from, 'IVAN', 'pic_a_theme');
            (0, sender_helper_1.sendMessage)(data)
                .then((response) => {
                res.sendStatus(200);
                return;
            })
                .catch(function (error) {
                res.sendStatus(500);
                return;
            });
        }
    }
    if (messageType === 'button') {
        const { payload } = geralMessage.button;
        if (payload === 'accepted_crescer') {
            const data = (0, sender_helper_1.getTemplatedMessageInputFlow)(from, '972419024603961');
            (0, sender_helper_1.sendMessage)(data)
                .then((response) => {
                (0, data_storage_1.storageData)((0, base_1.createModel)(from, base_1.growProgramTags['basic'], 'startModel'));
                res.sendStatus(200);
                return;
            })
                .catch(function (error) {
                res.sendStatus(500);
                return;
            });
        }
        if (payload === 'not_accepted_crescer') {
            const data = (0, sender_helper_1.getTextMessageInput)(from, 'Obrigado, quando quiser começar é só falar :)');
            (0, sender_helper_1.sendMessage)(data)
                .then((response) => {
                (0, data_storage_1.storageData)((0, base_1.createModel)(from, base_1.growProgramTags['contact'], 'refuseModel'));
                res.sendStatus(200);
                return;
            })
                .catch(function (error) {
                res.sendStatus(500);
                return;
            });
        }
    }
    if ((_t = (_s = (_r = (_q = (_p = (_o = (_m = dados === null || dados === void 0 ? void 0 : dados.entry) === null || _m === void 0 ? void 0 : _m[0]) === null || _o === void 0 ? void 0 : _o.changes) === null || _p === void 0 ? void 0 : _p[0]) === null || _q === void 0 ? void 0 : _q.value) === null || _r === void 0 ? void 0 : _r.messages[0]) === null || _s === void 0 ? void 0 : _s.text) === null || _t === void 0 ? void 0 : _t.body) {
        // user-menssage
        const messages = dados.entry[0].changes[0].value.messages[0].text.body;
        if (messages === '3') {
            const data = (0, sender_helper_1.getTemplatedMessageInputFlow)(from, '2664511340375583');
            (0, sender_helper_1.sendMessage)(data)
                .then((response) => {
                res.sendStatus(200);
                return;
            })
                .catch(function (error) {
                res.sendStatus(500);
                return;
            });
        }
        // messagem genérica
        (0, data_storage_1.storageData)((0, base_1.createModel)(from, base_1.growProgramTags['contact'], 'loginModel'));
        const data = (0, sender_helper_1.getTemplatedMessageInput)(from, 'Ivan', 'start_crescer');
        (0, sender_helper_1.sendMessage)(data)
            .then((response) => {
            res.sendStatus(200);
            return;
        })
            .catch(function (error) {
            res.sendStatus(500);
            return;
        });
    }
});
exports.messageFlow = messageFlow;
//# sourceMappingURL=message-flow.js.map