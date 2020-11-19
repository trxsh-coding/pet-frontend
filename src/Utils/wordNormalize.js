export const normalizeWord = (amount, word) => {
    console.log(amount)
    switch (true) {
        case amount > 1 && amount <= 4    :
            return word + 'а'
        case amount >=4 || amount === 0 :
           return word + 'ов'
        default:
            return word
    }
}