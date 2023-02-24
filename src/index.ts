import { LocalStorage } from 'node-localstorage'
import LocalStorageJson from './LocalStorageJson.js'

global.localStorage = new LocalStorage('localStorage')

export const localStorageJson = new LocalStorageJson()
