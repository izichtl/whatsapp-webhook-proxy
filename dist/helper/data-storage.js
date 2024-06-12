"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.storageData = void 0;
const axios_1 = __importDefault(require("axios"));
function storageData(data) {
    const config = {
        method: 'post',
        url: `${process.env.STORAGE_URL}`,
        headers: {
            'Content-Type': 'application/json'
        },
        data: data
    };
    return (0, axios_1.default)(config);
}
exports.storageData = storageData;
//# sourceMappingURL=data-storage.js.map