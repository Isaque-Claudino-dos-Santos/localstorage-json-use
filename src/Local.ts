export default class Local<LocalObject> {
    public jsonData: string
    public localName: string
    public localNameFix: string = 'LocalStorage'

    constructor(public localNamePreFix: string, object: LocalObject) {
        this.localName = `${localNamePreFix}${this.localNameFix}`
        this.jsonData = JSON.stringify(object)
        this.exists().then((exists) => {
            if (!exists) localStorage.setItem(this.localName, this.jsonData)
        })
    }

    async exists(): Promise<boolean> {
        const data = localStorage.getItem(this.localName)
        return !(typeof data === 'undefined' || data === null)
    }

    async accessData(): Promise<LocalObject> {
        return JSON.parse(this.jsonData)
    }

    async save<LocalObject>(object: LocalObject) {
        this.jsonData = JSON.stringify(object)
        localStorage.setItem(this.localName, this.jsonData)
    }

    async clear() {
        localStorage.clear()
    }
}
