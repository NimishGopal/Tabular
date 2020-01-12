const Utils = {
  fetch: async (url, options = {}) => {
    const response = await fetch(url, options);
    const parseText = await response.text();
    return JSON.parse(parseText);
  },

  isEmptyObject: obj =>
    Object.entries(obj).length === 0 && obj.constructor === Object,

  generateValuesTillNumber: number => {
    let valArr = [];
    for (let i = 0; i < number; i++) {
      valArr = [...valArr, i + 1];
    }
    return valArr;
  }
};

export default Utils;
