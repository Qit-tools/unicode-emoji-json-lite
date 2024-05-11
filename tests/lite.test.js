"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// tests/lite.test.ts
const tape_1 = __importDefault(require("tape"));
const fs_1 = require("fs");
const lite_1 = require("../scripts/lite");
const readJsonFile = (path) => {
    const data = (0, fs_1.readFileSync)(path, { encoding: 'utf-8' });
    return JSON.parse(data);
};
(0, tape_1.default)('Validate simplified emoji data', (t) => {
    const simplifiedEmojis = readJsonFile('data-by-emoji-lite.json');
    const simplifiedGroups = readJsonFile('data-by-group-lite.json');
    const groupMap = readJsonFile('data-group-map.json');
    for (const [key, value] of Object.entries(lite_1.expectedGroupMap)) {
        t.equal(groupMap[key], value, `Correct shortcut for ${key}`);
    }
    t.ok(Object.keys(simplifiedEmojis).length > 0, 'Should have simplified emojis');
    const exampleEmoji = '😀';
    t.equal(simplifiedEmojis[exampleEmoji].name, 'grinning face', 'Correct name for 😀');
    t.equal(simplifiedEmojis[exampleEmoji].group, 'SE', 'Correct group shortcut for 😀');
    t.equal(simplifiedEmojis[exampleEmoji].tone, undefined, 'Correct skin tone support for 😀');
    t.ok(simplifiedGroups.length > 0, 'Should have simplified groups');
    t.equal(simplifiedGroups[0].name, 'SE', 'First group should be "SE"');
    t.ok(simplifiedGroups[0].emojis.length > 0, 'First group should have emojis');
    t.end();
});
