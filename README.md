# Unicode Emoji JSON Lite

[![Test status](https://github.com/Qit-tools/unicode-emoji-json-lite/workflows/Node.js%20CI/badge.svg)](https://github.com/Qit-tools/unicode-emoji-json-lite/actions/workflows/node.js.yml)

This 📚 [library](https://www.npmjs.com/package/@qit.tools/unicode-emoji-json-lite) provides a 🪶 lightweight version of the [unicode-emoji-json](https://www.npmjs.com/package/unicode-emoji-json) library. Essentially, this library simplifies JSON files by using ready-made JSON from the unicode-emoji-json library.

## 👀 DEMO

Example of using the library: [Random Emoji Generator](https://qit.tools/generators/random-emoji/)


## 🏗️ Install

### 🎉 NPM

```bash
npm install @qit.tools/unicode-emoji-json-lite
```

### 🧁 Bun

```bash
bun add @qit.tools/unicode-emoji-json-lite
```

### 🌟 PNPM

```bash
pnpm add @qit.tools/unicode-emoji-json-lite
```

### 🧶 Yarn

```bash
yarn add @qit.tools/unicode-emoji-json-lite
```

## 🎓 How to use

```ts
// Import by default
import dataEmoji from "@qit.tools/unicode-emoji-json-lite";

// Import by JSON files
import dataEmoji from "@qit.tools/unicode-emoji-json-lite/data-by-emoji-lite.json";
import dataEmojiGroup from "@qit.tools/unicode-emoji-json-lite/data-by-group-lite.json";
// ...

// Import types
import type { DataEmoji, DataEmojiGroup, DataEmojiMap, DataEmojiOrdered } from "@qit.tools/unicode-emoji-json-lite";
```


## 📝 Details

### Skin tone variations

Emoji's skin tone variations are consolidated into one base entry, with a `tone` flag on them.

This means one entry of 👋 represents its 5 variations– 👋🏻, 👋🏼, 👋🏽, 👋🏾, 👋🏿; while raw unicode data list them as individual emoji entries.

The tone flag is present where needed; in other cases, it remains undefined to avoid creating a negative flag.

## 📄 Files

`data-by-emoji-lite.json`:

```json
{
  "😀": {
    "name": "grinning face",
    "group": "SE"
  },
  ...
  "👋": {
    "name": "waving hand",
    "group": "PB",
    "tone": true
  },
}
```


`data-by-group-lite.json`:

```json
[
  {
    "name": "SE",
    "emojis": [
      {
        "emoji": "😀",
        "name": "grinning face"
      },
      ...
    ]
  }
]
```

`data-emoji-components.json`:

```json
{
  "light_skin_tone": "🏻",
  "medium_light_skin_tone": "🏼",
  "medium_skin_tone": "🏽",
  "medium_dark_skin_tone": "🏾",
  "dark_skin_tone": "🏿",
  "red_hair": "🦰",
  "curly_hair": "🦱",
  "white_hair": "🦳",
  "bald": "🦲"
}
```

`data-group-map.json`:

```json
{
  "SE": "Smileys & Emotion",
  "PB": "People & Body",
  "AN": "Animals & Nature",
  "FD": "Food & Drink",
  "TP": "Travel & Places",
  "A": "Activities",
  "O": "Objects",
  "S": "Symbols",
  "F": "Flags"
}
```

`data-ordered-emoji.json`:

```json
[
  "😀",
  "😃",
  "😄",
  "😁",
  ...
]
```

## Showcases

Chrome Extension: [Emoji Keyboard Copy & Paste](https://chromewebstore.google.com/detail/lgdjbhmmimmgenckodpogdgakjepiicm)

Edge Add-on: [Emoji Keyboard Copy & Paste](https://microsoftedge.microsoft.com/addons/detail/madhfecnpclggkpaaklddcdchhajkmoo)

Website: [Emoj.in](https://emoj.in/)


## Unicode License Agreement

https://www.unicode.org/license.html