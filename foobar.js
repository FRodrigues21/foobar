const foobar = () => {
    let result = []
    for(let i = 1; i <= 100; i++) {
        if(i % 3 == 0 && i % 5 == 0) {
            result.push("FooBar");
        } else if (i % 3 == 0) {
            result.push("Foo");
        } else if (i % 5 == 0) {
            result.push("Bar")
        } else {
            result.push(i);
        }
    }
    return result;
}

module.exports = foobar;