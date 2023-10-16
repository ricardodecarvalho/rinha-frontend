export const bytesToMB = (bytes: number) => {
  return (bytes / (1024 * 1024)).toFixed(2);
}

export const isArray = <T>(data: T): boolean => {
  return Array.isArray(data)
}

export const isNumeric = (str: string | number) => {
  if (typeof str === "number") return true
  if (typeof str !== "string") return false
  return !isNaN(Number(str)) && !isNaN(parseFloat(str))
}

export const getSquareBrackets = (isOpen: boolean): string => {
  return isOpen ? '{' : '}';
}