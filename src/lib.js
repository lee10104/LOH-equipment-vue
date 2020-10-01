export function isEqual(e1, e2) {
  if (loadType(e1) !== loadType(e2))
    return false;

  switch(loadType(e1)) {
    case ('Object'): {
      const keys1 = Object.keys(e1).sort();
      const keys2 = Object.keys(e2).sort();
      if (!isEqual(keys1, keys2))
        return false;

      for (let i = 0; i < keys1.length; i++) {
        if (!isEqual(e1[keys1[i]], e2[keys2[i]]))
          return false;
      }

      return true;
    }
    case ('Array'): {
      if (e1.length !== e2.length)
        return false;

      for (let i = 0; i < e1.length; i++) {
        if (!isEqual(e1[i], e2[i]))
          return false;
      }
      return true;
    }
    default:
      return e1 === e2;
  }
}

function loadType(e) {
  return Object.prototype.toString.call(e).split(' ')[1].replace(']', '');
}
