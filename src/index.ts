import { LocalStorage } from 'node-localstorage'
import LocalStorageJson from './LocalStorageJson.js'

global.localStorage = new LocalStorage('localStorage')

const localStorageJson = new LocalStorageJson()

export default localStorageJson
