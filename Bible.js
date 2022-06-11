class Bible {

    #verse;
    #version;
    #content;

    constructor(verse, version, content) {
        this.#verse = verse;
        this.#version = version;
        this.#content = content;
    }

    get verse() {
        return this.#verse;
    }

    get version() {
        return this.#version;
    }

    get content() {
        return this.#content;
    }

    set setVerse(verse) {
        this.#verse = verse;
    }

    set setVersion(version) {
        this.#version = version;
    }

    set setContent(content) {
        this.#content = content;
    }
}