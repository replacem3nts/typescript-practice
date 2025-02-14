"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.dateStringToDate = void 0;
exports.dateStringToDate = function (dateString) {
    var dateParts = dateString
        .split('/')
        .map(function (value) { return parseInt(value); });
    return new Date(dateParts[2], dateParts[0], dateParts[1]);
};
