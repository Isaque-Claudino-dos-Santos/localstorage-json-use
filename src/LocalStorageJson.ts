import { LocalStorage } from 'node-localstorage'
import Local from './Local.js'

export default class LocalStorageJSON {
    constructor(public localStorageName: string) {
        this.newLocalStorage(localStorageName)
    }
    create<LocalObject>(
        localName: string,
        object: LocalObject
    ): Local<LocalObject> {
        return new Local<LocalObject>(localName, object as LocalObject)
    }

    newLocalStorage(name: string) {
        global.localStorage = new LocalStorage(name)
        this.localStorageName = name
    }
}
