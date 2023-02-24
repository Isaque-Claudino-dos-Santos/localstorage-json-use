import Local from './Local.js'

export default class LocalStorageJSON {
    create<LocalObject>(
        localName: string,
        object: LocalObject
    ): Local<LocalObject> {
        return new Local<LocalObject>(localName, object as LocalObject)
    }
}
