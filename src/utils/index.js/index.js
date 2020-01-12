export const Utils = {
  fetch: async (url, options = {}) => {
    const response = await fetch(url, options);
    const parseText = await response.text();
    return JSON.parse(parseText);
  }
};
