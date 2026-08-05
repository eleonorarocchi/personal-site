declare module '*.jpg';
declare module '*.jpeg';
declare module '*.png';
declare module '*.gif';
declare module '*.svg';
declare module '*.webp';
declare module '*.md';

declare const require: {
    context: (basePath: string, deep: boolean, pattern: RegExp) => (relativePath: string) => string;
};
