class App {

    #executionInterval = 1000;
    #totalBibleLimit = 4;
    #bibleList = [];
    #bibleContainerEl = document.createElement("DIV");

    constructor() {
        window.setInterval(function() {
            this._getLatestBibleVerse();
            console.log(this.#bibleList);
        });
    }

    _getLatestBibleVerse() {
        const latestVerse = document.getElementById("pVerse").innerText;
        const latestVersion = document.getElementById("pTranslation").innerText;
        const latestContent = document.getElementById("pContent").innerText;

        // check if latest verse has been changed
        if (this.#bibleList.length > 0 && this.#bibleList.length[0].verse == latestVerse && this.#bibleList.length[0].version == latestVersion) {
            return;
        }
        const latestBible = new Bible(latestVerse, latestVersion, latestContent);
        this._addBibleToList(latestBible);
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