declare module 'data-by-emoji-lite.json' {
  const data: Record<
    string,
    {
      name: string;
      group: string;
      tone?: boolean;
    }
  >;
  export default data;
}

declare module 'data-by-group-lite.json' {
  const data: {
    name: string;
    emojis: {
      emoji: string;
      group: string;
      tone?: boolean;
    }[];
  };
  export default data;
}

declare module 'data-emoji-components.json' {
  const data: {
    [key: string]: string;
  };
  export default data;
}

declare module 'data-group-map.json' {
  const data: {
    [key: string]: string;
  };
  export default data;
}

declare module 'data-ordered-emoji.json' {
  const data: string[];
  export default data;
}

export interface EmojiEntry {
  name: string;
  group: string;
  tone?: boolean;
}

export interface DataEmoji {
  [key: string]: EmojiEntry;
}

export interface DataEmojiGroup {
  name: string;
  emojis: (Omit<EmojiEntry, 'group'> & { emoji: string })[];
}

export interface DataEmojiMap {
  [key: string]: string;
}

export type DataEmojiOrdered = string[];
