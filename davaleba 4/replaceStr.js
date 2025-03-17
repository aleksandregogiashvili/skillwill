let replaceTheString = (string, valueToReplace, valueToReplaceWith) => {
  let index = string.indexOf(valueToReplace)
  let modifiedString = string.substr(0, index) + valueToReplaceWith + string.substr(index + valueToReplace.length)
  return modifiedString
}


