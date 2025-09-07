export function capitalizeName(name: string): string {
  return name
    .replace(/[-_]/g, ' ')
    .split(' ')
    .map(word =>
      word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    )
    .join(' ');
}

