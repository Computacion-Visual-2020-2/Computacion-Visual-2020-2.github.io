export function createArray(h, w) {
  return Array(h)
    .fill()
    .map(() => Array(w).fill())
}

export const writeToFile = function(text) {
  let data = new Blob([text], { type: 'text/plain' }), textFile

  // If we are replacing a previously generated file we need to
  // manually revoke the object URL to avoid memory leaks.
  if (textFile !== null) {
    window.URL.revokeObjectURL(textFile)
  }

  textFile = window.URL.createObjectURL(data)

  // returns a URL you can use as a href
  return textFile
}
