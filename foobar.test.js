const foobar = require("./foobar.js")

test("it returns Foo when index is only multiple of 3", () => {
    const result = foobar();

    for(let i = 3; i <= 100; i = i*3) {
        expect(result[i - 1]).toBe("Foo")
    }
});

test("it returns Bar when index is only multiple of 5", () => {
    const result = foobar();

    for(let i = 5; i <= 100; i = i*5) {
        expect(result[i - 1]).toBe("Bar")
    }
});

test("it returns FooBar when index is multiple of both 3 and 5", () => {
    const result = foobar();

    for(let i = 1; i <= 100; i++) {
        if(i % 3 == 0 && i % 5 == 0) {
            expect(result[i - 1]).toBe("FooBar")
        }
    }
});

test("it returns the index when index is not multiple of neither 3 or 5", () => {
    const result = foobar();

    for(let i = 1; i <= 100; i++) {
        if(i % 3 != 0 && i % 5 != 0) {
            expect(result[i - 1]).toBe(i)
        }
    }
});