module.exports = function reverse (n) {
    let abs = Math.abs(n)
    return Array.from(abs.toString()).reverse().join('');
}
