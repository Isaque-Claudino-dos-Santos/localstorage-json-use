import { LocalStorage } from 'node-localstorage'
import LocalStorageJson from './LocalStorageJson'

global.localStorage = new LocalStorage('localStorage')

const localStorageJson = new LocalStorageJson()

export default localStorageJson
