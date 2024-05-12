// tests/lite.test.ts
import tape from 'tape';
import { readFileSync } from 'fs';
import { invertedGroupMap } from '../scripts/lite';

interface JSONParseResult {
  [key: string]: {
    name: string;
    group: string;
    tone?: boolean;
  }[]; // Try to avoid `any` by specifying a more concrete type
}

const readJsonFile = (path: string): JSONParseResult[] => {
  const data = readFileSync(path, { encoding: 'utf-8' });
  return JSON.parse(data);
};

tape('Validate simplified emoji data', (t) => {
  const simplifiedEmojis = readJsonFile('data-by-emoji-lite.json');
  const simplifiedGroups = readJsonFile('data-by-group-lite.json');
  const groupMap = readJsonFile('data-group-map.json');

  for (const [key, value] of Object.entries(invertedGroupMap)) {
    t.equal(groupMap[key], value, `Correct shortcut for ${key}`);
  }

  t.ok(Object.keys(simplifiedEmojis).length > 0, 'Should have simplified emojis');

  const exampleEmoji = '😀';
  t.equal(simplifiedEmojis[exampleEmoji].name, 'grinning face', 'Correct name for 😀');
  t.equal(simplifiedEmojis[exampleEmoji].group, 'SE', 'Correct group shortcut (map) for 😀');
  t.equal(simplifiedEmojis[exampleEmoji].tone, undefined, 'Correct skin tone support for 😀');

  t.ok(simplifiedGroups.length > 0, 'Should have simplified groups');
  t.equal(simplifiedGroups[0].name, 'SE', 'First group should be "SE"');
  t.ok(simplifiedGroups[0].emojis.length > 0, 'First group should have emojis');

  t.end();
});
