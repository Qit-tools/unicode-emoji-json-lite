import emojiData from 'unicode-emoji-json/data-by-emoji.json';
import emojisGroup from 'unicode-emoji-json/data-by-group.json';
import emojisComponents from 'unicode-emoji-json/data-emoji-components.json';
import emojisOrdered from 'unicode-emoji-json/data-ordered-emoji.json';
import { writeFileSync } from 'fs';

export const expectedGroupMap: { [key: string]: string } = {
  'Smileys & Emotion': 'SE',
  'People & Body': 'PB',
  'Animals & Nature': 'AN',
  'Food & Drink': 'FD',
  'Travel & Places': 'TP',
  Activities: 'A',
  Objects: 'O',
  Symbols: 'S',
  Flags: 'F',
};

const simplifiedEmojis = Object.fromEntries(
  Object.entries(emojiData).map(([emoji, data]) => [
    emoji,
    {
      name: data.name,
      group: expectedGroupMap[data.group as keyof typeof expectedGroupMap] || data.group,
      ...(data.skin_tone_support ? { tone: data.skin_tone_support } : {}),
    },
  ]),
);

const simplifiedEmojisGroup = emojisGroup.map((group) => ({
  name: expectedGroupMap[group.name] || group.name,
  emojis: group.emojis.map((emoji) => ({
    emoji: emoji.emoji,
    name: emoji.name,
    ...(emoji.skin_tone_support ? { tone: emoji.skin_tone_support } : {}),
  })),
}));

export const invertedGroupMap = Object.entries(expectedGroupMap).reduce((acc, [key, value]) => {
  acc[value] = key;
  return acc;
}, {});

writeFileSync('data-by-group-lite.json', JSON.stringify(simplifiedEmojisGroup, null, 2));
writeFileSync('data-by-emoji-lite.json', JSON.stringify(simplifiedEmojis, null, 2));
writeFileSync('data-emoji-components.json', JSON.stringify(emojisComponents, null, 2));
writeFileSync('data-ordered-emoji.json', JSON.stringify(emojisOrdered, null, 2));
writeFileSync('data-group-map.json', JSON.stringify(invertedGroupMap, null, 2));
