module.exports = {

  isValidEmail (email) {
    if (!email) return false;
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());

  },

  isAcceptedText(text) {
    return (text) ? true : false;
  },

  isAcceptedLength(text, length) {
    if (!text) return false;
    return text && text.length >= length;
  },

  checkMissingKeys(body, keyNames) {
    let keyPresent = [false]*keyNames.length;
    for (let key in body) {

    }
  }

}
