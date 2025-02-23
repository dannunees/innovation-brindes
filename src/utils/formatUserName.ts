export const formatUserName = (name: string): string => {
  return name.toLowerCase().replace(/\b\w/g, (char) => char.toUpperCase())
}
