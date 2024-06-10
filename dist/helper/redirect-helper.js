"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.redirectMessage = void 0;
// @ts-nocheck
const axios_1 = __importDefault(require("axios"));
require("dotenv").config();
function redirectMessage(data) {
    var config = {
        method: 'post',
        url: `${process.env.REDIRECT_URL}/redirect`,
        headers: {
            // 'Authorization': `Bearer ${process.env.WA_TOKEN}`,
            'Content-Type': 'application/json'
        },
        data: JSON.stringify(data)
    };
    return (0, axios_1.default)(config);
}
exports.redirectMessage = redirectMessage;
//# sourceMappingURL=redirect-helper.js.map