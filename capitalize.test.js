/* Start by writing a test for a capitalize(string) function. Your test should make sure that this function takes 
a string as an argument and returns that string with the first character capitalized.
Run your test - it should fail because you don’t have the capitalize(string) function implemented yet.
Now make your tests green by implementing the capitalize(string) function. 
Think about what the minimum amount of code is necessary to pass this test and write it.
Congratulations! In task 4, you have just used the TDD approach for development by writing tests 
before writing the actual functions. Note the difference in the steps you followed here, compared with 
those you used in the previous 3 tasks. Don't worry if this last strategy looks counterintuitive or 
strange at the moment, we will do several more TDD examples in the next module. */

const capitalize = require('./capitalize');

describe('Capitalize String', () => {
    const str = 'james';
    if(typeof str === 'string'){
        test('Capitalize james', () => {
            expect(capitalize(str)).toBe('James');
        })

} else {
    throw('Input must be a string')
}

})

