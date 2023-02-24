export default class Local<LocalObject> {
    private jsonData: string
    private localName: string

    constructor(localName: string, object: LocalObject) {
        this.localName = `${localName}LocalStorage`
        this.jsonData = JSON.stringify(object)
        localStorage.setItem(this.localName, this.jsonData)
    }

    access(): LocalObject {
        return JSON.parse(this.jsonData)
    }

    async save<LocalObject>(object: LocalObject) {
        this.jsonData = JSON.stringify(object)
        localStorage.setItem(this.localName, this.jsonData)
    }
}
