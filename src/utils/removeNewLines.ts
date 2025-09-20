export const removeNewLines = (text: string, joinWith: string = ' '): string => {
  if (!text) return '';

  const cleanedText = text.replace(/\\n/g, joinWith).replace(/\n/g, joinWith).trim();

  return cleanedText;
};