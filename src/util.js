function convertCF(temp) {
    return (temp * (9/5) + 32);
}

function convertFC(temp) {
    return (5/9 * (temp-32));
}


export { convertCF, convertFC }