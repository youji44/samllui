
// const obj = { a: "1", b: "2" };
// const newKeys = { a: "A", c: "C" };
// const renamedObj = renameKeys(obj, newKeys);
// console.log(renamedObj);
// {A:"1", b:"2"}
export const renameKeys=(obj, newKeys)=> {
    const keyValues = Object.keys(obj).map(key => {
      const newKey = newKeys[key] || key;
      return { [newKey]: obj[key] };
    });
    return Object.assign({}, ...keyValues);
  }