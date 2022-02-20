function chunk(array, size) {
    let result = [];
    let index = 0;

    while (index < array.length) {
        let chunk = array.slice(index, index + size);
        result.push(chunk);
        index += 2;

    }

    return result;
}