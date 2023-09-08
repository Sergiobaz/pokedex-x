const firstLetterToUpperCase = (str) => {
    const firstLetter = str[0]
    const firstLetterUpper = firstLetter.toUpperCase()
    const strWithOutFirstLetter = str.slice(1)
    return firstLetterUpper + strWithOutFirstLetter
  }

  export { firstLetterToUpperCase }