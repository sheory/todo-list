const compare = function (obj, array) {
  for(let i = 0; i < array.length; i++) {
    if(obj.toLowerCase() === array[i].toLowerCase()) {
      return true;
    }
  }
}

exports.compare = compare;