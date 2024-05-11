# Unicode Emoji JSON Lite

[![Test status](https://github.com/dejurin/unicode-emoji-json-lite/workflows/Node.js%20CI/badge.svg)](https://github.com/dejurin/unicode-emoji-json-lite/actions/workflows/node.js.yml)

This 📚 library provides a 🪶 lightweight version of the [unicode-emoji-json](https://www.npmjs.com/package/unicode-emoji-json) library. Essentially, this library simplifies JSON files by using ready-made JSON from the unicode-emoji-json library.

## 🏗️ Install

## 🎉 NPM

```bash
npm install @qit.tools/unicode-emoji-json-lite
```

## 🧁 Bun

```bash
bun add @qit.tools/unicode-emoji-json-lite
```

## 🌟 PNPM

```bash
pnpm add @qit.tools/unicode-emoji-json-lite
```

### 🧶 Yarn

```bash
yarn add @qit.tools/unicode-emoji-json-lite
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
  "Smileys & Emotion": "SE",
  "People & Body": "PB",
  "Animals & Nature": "AN",
  "Food & Drink": "FD",
  "Travel & Places": "TP",
  "Activities": "A",
  "Objects": "O",
  "Symbols": "S",
  "Flags": "F"
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