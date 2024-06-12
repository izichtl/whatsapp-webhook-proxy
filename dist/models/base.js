"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createModel = exports.cloneModelObject = exports.growProgramTags = exports.models = exports.refuseModel = exports.endModel = exports.startModel = exports.loginModel = void 0;
const datetime_1 = require("../helper/datetime");
exports.loginModel = {
    "type": "login",
    "data": "user_login",
    "user_id": '',
    "timestamp": {}
};
exports.startModel = {
    "type": "start",
    "data": "",
    "user_id": '',
    "timestamp": {}
};
exports.endModel = {
    "type": "end",
    "data": "",
    "user_id": '',
    "timestamp": {}
};
exports.refuseModel = {
    "type": "end",
    "data": "",
    "user_id": '',
    "timestamp": {}
};
exports.models = {
    loginModel: exports.loginModel,
    startModel: exports.startModel,
    endModel: exports.endModel,
    refuseModel: exports.refuseModel
};
exports.growProgramTags = {
    contact: 'user_contact',
    basic: 'grow_program_basic',
    basic_plus: 'grow_program_basic_plus',
    investiment: 'grow_program_investiment',
    assembly: 'grow_program_assembly',
    not_bank: 'grow_program_notbank',
};
function cloneModelObject(obj) {
    return Object.assign({}, obj);
}
exports.cloneModelObject = cloneModelObject;
const createModel = (userId, data, model) => {
    const dataFormatada = (0, datetime_1.formatDateTime)(new Date());
    const newObject = cloneModelObject(exports.models[model]);
    newObject.data = data;
    newObject.user_id = userId;
    newObject.timestamp = dataFormatada;
    return newObject;
};
exports.createModel = createModel;
//# sourceMappingURL=base.js.map