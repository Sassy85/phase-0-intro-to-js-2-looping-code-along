function writeCards(array, event) {
    const newArray = []
    for (let a =0; a < array.length; a++) {
        newArray.push(`Thank you, ${array[a]}, for the wonderful ${event} gift!`)
    }
    return newArray
  }

function countDown(number) {
    while (number>=0) {
        console.log(number--)
        debugger
    }
}
countDown(10)
