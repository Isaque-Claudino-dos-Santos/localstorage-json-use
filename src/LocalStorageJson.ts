import Local from './Local'

export default class LocalStorageJSON {
    create<LocalObject>(
        localName: string,
        object: LocalObject
    ): Local<LocalObject> {
        return new Local<LocalObject>(localName, object as LocalObject)
    }
}
