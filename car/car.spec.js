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
    let prius
    beforeEach(() => {
        prius = new Car('toyota', 'prius')
    })
    test('it is defined', () => {
        expect(Car).toBeDefined()
        expect(Car).toBeInstanceOf(Function) /* *** */
    })
    test('has model and make', () => {
        expect(prius).toHaveProperty('make')
        expect(prius).toHaveProperty('model')
        expect(prius.make).toBeDefined()
        expect(prius.model).toBeDefined()
        expect(prius.make).toBe('toyota')
        expect(prius.model).toBe('prius')
        expect(prius).toMatchObject({ make: 'toyota', model: 'prius' })
    })
    test('new cars start with odameter at zero', () => {
        expect(prius).toHaveProperty('odometer', 0)
    })
    test('cars have a drive method', () => {
        expect(prius.drive).toBeDefined()
        expect(prius.drive).toBe(Car.prototype.drive)
    })
    test('drive method takes distance and increases odometer by that distance', () => {
        prius.drive(10)
        expect(prius.odometer).toBe(10)
        prius.drive(5)
        expect(prius.odometer).toBe(15)
    })
    test('driveAsync method resolves the updated odometer', async () => {
        let updatedOdometer = await prius.driveAsync(7)
        expect(updatedOdometer).toBe(7)
        updatedOdometer = await prius.driveAsync(5)
        expect(updatedOdometer).toBe(12)
    })
})
//all of the expect cases have a value of 5 so for that, the test is passing. If even ONE of them had the wrong value in the toBe area, it would fail.
//after adding @types/jest to the project as a dev dependency, you can press ctrl and spacebar to see suggestions of the different things you can use when writing jest tests!
//If i were to say expect(o).toBe(oo) this would fail because I've though they LOOK the same, they are pointing to 2 different objects in memory!!
//BUT expect(oo).toBe(ooo) is TRUE! because ooo is pointing to oo in memory(SEE FIRST COMMENT!)
//on SECOND COMMENT toEqual passes this test becuase these objects EQUAL the same thing, but toBe would fail because are in two different points of memory, therefore NOT THE SAME THING
//on THIRD COMMENT, this passing because car is a class/constructor and ALL constructors are FUnctions at the end of the day!
//under the make and model test, most of the are doing the exact same thing! The only TRULY NECCESSARY LINES ARE: the setup(const prius = new Car('toyota', prius)), and the first 2 test after where we are checking that the make and model properties actually exist!(expect(prius).toHaveProperty('make', 'toyota') AND expect(prius).toHaveProperty('model', 'prius'))
// Had this test inside make and model test at first: expect(prius).toEqual({ make: 'toyota', model: 'prius' }). After adding the odometer part, this test broke because it was no longer EQUAL to that! the odometer property was not present in the object! changed it to expect(prius).toMatchObject({ make: 'toyota, model: 'prius })
//to make a todo: test.todo('drive method return the updated odometer')! It makes it as a reminded that we intend to make this test, BUT doesn't make it a false positive or a fail
//can mark a test by test.only to make it where you ONLY focus on passing that one test and skip the rest!!
//can skip a certain test by using test.skip on the test
