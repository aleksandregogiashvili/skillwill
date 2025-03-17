let upperCaseLetters = (string) => {
  const words = string.split(' ');
  const CapitalizeWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));

  return CapitalizeWords.join(' ')
}

