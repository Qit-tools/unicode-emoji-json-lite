"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.dataEmojiOrdered = exports.dataEmojiGroupMap = exports.dataEmojiComponents = exports.dataEmojiByGroup = exports.dataEmoji = void 0;
var data_by_emoji_lite_json_1 = __importDefault(require("./data-by-emoji-lite.json"));
var data_by_group_lite_json_1 = __importDefault(require("./data-by-group-lite.json"));
var data_emoji_components_json_1 = __importDefault(require("./data-emoji-components.json"));
var data_group_map_json_1 = __importDefault(require("./data-group-map.json"));
var data_ordered_emoji_json_1 = __importDefault(require("./data-ordered-emoji.json"));
exports.dataEmoji = data_by_emoji_lite_json_1.default;
exports.dataEmojiByGroup = data_by_group_lite_json_1.default;
exports.dataEmojiComponents = data_emoji_components_json_1.default;
exports.dataEmojiGroupMap = data_group_map_json_1.default;
exports.dataEmojiOrdered = data_ordered_emoji_json_1.default;
