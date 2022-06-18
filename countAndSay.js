var say = function (digitString) {
  let count = 0
  let resultString = ''

  for (let n = 0; n <= digitString.length - 1; n++) {
    if (n == 0 || digitString.charAt(n) == digitString.charAt(n - 1)) {
      count++
    } else {
      resultString += count + digitString.charAt(n - 1)
      count = 1
    }
  }
  resultString += count + digitString.charAt(digitString.length - 1)

  return resultString
}

var countAndSay = function (n) {
  if (n == 1) {
    return '1'
  } else {
    let result = '1'

    for (let i = 0; i < n - 1; i++) {
      result = say(result)
    }

    return result
  }
}
