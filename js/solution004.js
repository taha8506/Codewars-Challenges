// Removing elements

removeEveryOther = (arr) => {
    for (let i = 0; i < arr.length; i++) {
        arr.splice(i + 1, 1)
    }
    return arr
}