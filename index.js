class Formatter {
  //add static methods here
  static capitalize(string){
    const newString = `${string[0].toUpperCase()}${string.slice(1)}`
    return newString
  }

  static sanitize(string){
    return string.replace(/[^A-Za-z0-9-' ]+/g, "")
  }

  static titleize(string){
    const exceptions = ["the", "a", "an", "but", "of", "and", "for", "at", "by", "from"];
    const array = string.split(" ")

    return array.map(word => {
      if (exceptions.includes(word.toLowerCase()) && (array.indexOf(word) !== 0)) {
        return word.toLowerCase();
      } else {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
      }
    }).join(" ");
  }
}