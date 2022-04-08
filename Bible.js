class Bible {
    constructor(verse, version, content) {
        this.verse = verse;
        this.version = version;
        this.content = content;
    }

    static createBible() {
        
    }

    get getVerse() {
        return this.verse;
    }

    get getVersion() {
        return this.version;
    }

    get getContent() {
        return this.content;
    }

    set setVerse(verse) {
        this.verse = verse;
    }

    set setVersion(version) {
        this.version = version;
    }

    set setContent(content) {
        this.content = content;
    }
}