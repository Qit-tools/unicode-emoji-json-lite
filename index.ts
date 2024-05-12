import dataEmojiJson from './data-by-emoji-lite.json';
import dataEmojiGroupJson from './data-by-group-lite.json';
import dataEmojiComponentsJson from './data-emoji-components.json';
import dataEmojiGroupMapJson from './data-group-map.json';
import dataEmojiOrderedJson from './data-ordered-emoji.json';
import type { DataEmoji, DataEmojiGroup, DataEmojiMap, DataEmojiOrdered } from './index.d';

export const dataEmoji: DataEmoji = dataEmojiJson;
export const dataEmojiByGroup: DataEmojiGroup[] = dataEmojiGroupJson;
export const dataEmojiComponents: DataEmojiMap = dataEmojiComponentsJson;
export const dataEmojiGroupMap: DataEmojiMap = dataEmojiGroupMapJson;
export const dataEmojiOrdered: DataEmojiOrdered = dataEmojiOrderedJson;
