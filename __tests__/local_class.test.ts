import { LocalStorage } from 'node-localstorage'
import Local from '../src/Local'

global.localStorage = new LocalStorage('localStorageTest')

const localNamePreFix = 'randomName'
const objectTest = {
    name: 'random',
    age: 321,
}
const local = new Local(localNamePreFix, objectTest)

describe('Test All Method From Class Local', () => {
    test('Test it must checked if is correct localName', () => {
        expect(`${localNamePreFix}${local.localNameFix}`).toBe(local.localName)
    })
    test('Test it must checked if object it`s in the localStorage file', () => {
        expect(local.jsonData).toEqual(localStorage.getItem(local.localName))
    })
    test('Test it must return true when exist data', async () => {
        await local.save({ msg: 'Hello Word' })
        expect(await local.exists()).toEqual(true)
    })
    test('Test it must remove file localstorage and return false when not exist data', async () => {
        await local.clear()
        expect(await local.exists()).toEqual(false)
    })
    test('Test it must return object with use method accessData', async () => {
        await local.save(objectTest)
        expect(await local.accessData()).toStrictEqual(objectTest)
    })
})
