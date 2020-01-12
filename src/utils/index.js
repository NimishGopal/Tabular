const Utils = {
  fetch: async (url, options = {}) => {
    try {
      const response = await fetch(url, options);
      const parseText = await response.text();
      return JSON.parse(parseText);
    } catch (err) {
      console.log(err);
    }
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
