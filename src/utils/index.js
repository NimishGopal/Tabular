const Utils = {
  fetch: async (url, options = {}) => {
    try {
      const response = await fetch(url, options);
      if(response.status === 200){
        const parseText = await response.text();
      return JSON.parse(parseText);
      }
      else throw new Error(`Unexpected error happened. Couldn't fetch`);
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
