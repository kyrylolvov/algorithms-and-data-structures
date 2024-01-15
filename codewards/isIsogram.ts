export function isIsogram(str: string): boolean {
  const occuredLetters: string[] = [];
  let result: boolean = true;

  for (let i = 0; i < str.length; i++) {
    if (occuredLetters.includes(str[i].toLowerCase())) {
      result = false;
      break;
    }

    occuredLetters.push(str[i].toLowerCase());
  }

  return result;
}

console.log(isIsogram('moOse'));
