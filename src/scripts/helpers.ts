let counter = 0;

export const uniqueId = (prefix = '') => {
  counter += 1;

  return `${prefix}${counter}`;
}
