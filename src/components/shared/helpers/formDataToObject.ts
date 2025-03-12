export function formDataToObject(formData: FormData): Object {
  const obj = {};

  for (let [key, value] of formData.entries()) {
    if (obj[key] !== undefined) {
      if (!Array.isArray(obj[key])) {
        obj[key] = [obj[key]];
      }
      obj[key].push(value);
    } else {
      obj[key] = value;
    }
  }

  return obj;
}