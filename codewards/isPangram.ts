export const isPangram = (phrase: string): boolean => new Set(phrase.toUpperCase().match(/[A-Z]/g)).size === 26;
