class App {

    #executionInterval = 1000;
    #totalBible = 1;
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
        }
    }

    _addBible(verse, version, content) {
        const verseText = document.createTextNode(verse);
        const versionText = document.createTextNode(version);
        const contentText = document.createTextNode(content);

       

        if (this.#totalBible < this.#totalBibleLimit) {
            this.#totalBible += 1;
        }


        gridEl.classList.add('grid');
        document.body.insertBefore(this.#bibleContainerEl, document.body.firstChild);
    }

    _renderBible(verse, version, content) {
        // creating a bible container that holds the verse, version and content
        const bibleContainerEl = document.createElement('div');

        const verseTextNode = document.createTextNode(verse);
        const versionTextNode = document.createTextNode(version);
        const contentTextNode = document.createTextNode(content);

        const verseContainerEl = document.createElement('div');
        const versionContainerEl = document.createElement('div');
        const contentContainerEl = document.createElement('div');

        // add classes
        bibleContainerEl.classList.add('bible-container');
        verseContainerEl.classList.add('verse');
        versionContainerEl.classList.add('version');
        contentContainerEl.classList.add('content');

        verseContainerEl.appendChild(verseTextNode);
        versionContainerEl.appendChild(versionTextNode);
        contentContainerEl.appendChild(contentTextNode);

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