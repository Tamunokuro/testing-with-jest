const { stringLength, reverseStr } = require('./stringCount');


test('there is no I in Joshua', () => {
    expect('Joshua').not.toMatch(/I/);
});

test('there is shua in Yeshua', () => {
    expect('Joshua').toMatch(/shua/)
})

test('string should be greater than 1', () => {
    const strLength = 'Joshua';
    expect((stringLength(strLength))).toBe(true);
})


test('String is reversed', () => {
    expect(reverseStr('Joshua')).toBe('auhsoJ');
})

test('String should be reversed', () => {
    expect(reverseStr('Bible')).toBe('elbiB');
})

