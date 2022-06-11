class App {

    #executionInterval = 1000;
    #totalBibleLimit = 4;
    #bibleList = [];
    #bibleContainerEl = document.createElement("DIV");

    constructor() {
        // create container that holds all the Bible
        window.setInterval(function() {
            this._getBibleVerse();
        });
    }

    _getBibleVerse() {
        const latestVerse = document.getElementById("pVerse").innerText;
        const latestVersion = document.getElementById("pTranslation").innerText;
        const latestContent = document.getElementById("pContent").innerText;

        // if there are no verses yet
        if (this.#bibleList.length === 0) {
            this._addBible(latestVerse, latestVersion, latestContent);
        } else if (this.#bibleList.length === this.#totalBibleLimit) {
            // delete last element
            // add new verse at front
        }
    }

    // adds a bible to the biblelist
    _addBibleToList(bible) {
        if (this.#bibleList.length >= this.#totalBibleLimit) {
            this.#bibleList.pop();
        }
        this.#bibleList.unshift(bible);
    }

    _renderBible(bible) {
        // creating a bible container that holds the verse, version and content
        const bibleContainerEl = document.createElement('div');
        const verseContainerEl = document.createElement('div');
        const versionContainerEl = document.createElement('div');
        const contentContainerEl = document.createElement('div');

        // add classes
        bibleContainerEl.classList.add('bible-container');
        verseContainerEl.classList.add('verse');
        versionContainerEl.classList.add('version');
        contentContainerEl.classList.add('content');

        verseContainerEl.appendChild(document.createTextNode(bible.verse));
        versionContainerEl.appendChild(document.createTextNode(bible.version));
        contentContainerEl.appendChild(document.createTextNode(bible.content));

        bibleContainerEl.appendChild(verseContainerEl);
        bibleContainerEl.appendChild(versionContainerEl);
        bibleContainerEl.appendChild(contentContainerEl);

        return bibleContainerEl;
    }

    _renderBibleList() {
        for (let i = 0; i < this.#bibleList.length; i++) {
            this._renderBible()
        }
    }
}

const app = new App();