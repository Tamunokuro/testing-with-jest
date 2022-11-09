const Calculator =  require("./calculator");

describe('my calculator', () => {
    test('add numbers', () => {
        expect(Calculator.add(3,6)).toEqual(9);
    })

    test('subtract numbers', () => {
        expect(Calculator.subtract(7,3)).toEqual(4);
    })

    test('multiply numbers', () => {
        expect(Calculator.multiply(3,6)).toEqual(18);
    })

    test('divide numbers', () => {
        expect(Calculator.divide(18,6)).toEqual(3);
    })
})

