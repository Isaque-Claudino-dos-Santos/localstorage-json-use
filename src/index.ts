import { LocalStorage } from 'node-localstorage'
import LocalStorageJson from './LocalStorageJson.js'
import Local from './Local.js'

global.localStorage = new LocalStorage('localStorage')

const localStorageJson = new LocalStorageJson()

export { Local }
export default localStorageJson
