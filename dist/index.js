"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAreasByDistrict = getAreasByDistrict;
exports.getAllDistricts = getAllDistricts;
const areas_json_1 = __importDefault(require("./data/areas.json"));
const district_json_1 = __importDefault(require("./data/district.json"));
// get areas by district name
function getAreasByDistrict(districtName) {
    return areas_json_1.default.areas.filter((area) => area.district_name === districtName);
}
//get all district
function getAllDistricts() {
    return district_json_1.default;
}
