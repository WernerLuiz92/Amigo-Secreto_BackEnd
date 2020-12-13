module.exports = (array) => {
    let currentIndex = array.length
    let temporaryValue
    let randomIndex

    // Enquanto existir elementos pra embaralhar ...
    while (currentIndex !== 0) {

        // Pegue um elemento aleatoriamente
        randomIndex = Math.floor(Math.random() * currentIndex)
        currentIndex -= 1

        // E troque de posição com o elemento atual
        temporaryValue = array[currentIndex]
        array[currentIndex] = array[randomIndex]
        array[randomIndex] = temporaryValue
    }

    return array
}