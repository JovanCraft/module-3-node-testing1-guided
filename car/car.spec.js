const Car = require('./car')

function foo () {
    return 'the FOO'
}
// Test away!
describe('our first tests', () => {
    test('sanity', () => {
        expect(5).toBe(5)
        expect(5).toBe(3 + 2)
        expect(5).toBe(5 * 1)
        expect(5).toBeDefined()
        expect(5).toBeGreaterThan(4)
    })
    test('objects', () => {
        const o = { a: 1 }
        const oo = { a: 1 }
        const ooo = oo
        expect(o).toBe(o)
        expect(oo).toBe(ooo) /* * */
    })
    test('objects again', () => {
        expect({ a: 1 }).toEqual({ a: 1 }) /* ** */
    })
})
describe('foo function', () => {
    test('foo returns the FOO', () => {
        expect(foo()).toBe('the FOO')
        expect(foo()).toHaveLength(7)
    })
})
describe('Car class', () => {
    test('it is defined', () => {
        expect(Car).toBeDefined()
        expect(Car).toBeInstanceOf(Function) /* *** */
    })
    test('has model and make', () => {
        const prius = new Car('toyota', 'prius')
        expect(prius).toHaveProperty('make')
        expect(prius).toHaveProperty('model')
    })
})
//all of the expect cases have a value of 5 so for that, the test is passing. If even ONE of them had the wrong value in the toBe area, it would fail.
//after adding @types/jest to the project as a dev dependency, you can press ctrl and spacebar to see suggestions of the different things you can use when writing jest tests!
//If i were to say expect(o).toBe(oo) this would fail because I've though they LOOK the same, they are pointing to 2 different objects in memory!!
//BUT expect(oo).toBe(ooo) is TRUE! because ooo is pointing to oo in memory(SEE FIRST COMMENT!)
//on SECOND COMMENT toEqual passes this test becuase these objects EQUAL the same thing, but toBe would fail because are in two different points of memory, therefore NOT THE SAME THING
//on THIRD COMMENT, this passing because car is a class/constructor and ALL constructors are FUnctions at the end of the day!
