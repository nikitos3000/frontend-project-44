function getRandomNum(min, max) {
    let random = Math.floor(Math.random() * (max - min + 1) + min);
    return random  
}

export { getRandomNum }