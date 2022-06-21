chrome.storage.sync.set({
    verses: [],
    totalBibleLimit: 4,
    totalBibleOnScreen: 2,
    selectedVerses: [0, 1, 2, 3]
});

// creating the grid
const gridEl = document.createElement("DIV");
gridEl.classList.add('grid');
gridEl.classList.add('grid-2'); // FORCED
document.body.insertBefore(gridEl, document.body.firstChild);

setInterval(updateVersesList, 1000);

function updateVersesList() {
    const bible = {
        verse: document.getElementById("pVerse").innerText,
        version: document.getElementById("pTranslation").innerText,
        content: document.getElementById("pContent").innerText != null ? document.getElementById("pContent").innerText : "no content"
    }
    chrome.storage.sync.get(["verses"], (res) => {
        let currentVerses = res.verses;
        if (isBibleNew(bible, currentVerses)) {
            currentVerses.unshift(bible)
            chrome.storage.sync.set({
                verses: currentVerses
            });
            renderVerses();
        }
    });
}

function isBibleNew(bible, verses) {
    return verses.length === 0 || verses[0].verse !== bible.verse || verses[0].version !== bible.version;
}

function renderVerses() {
    gridEl.textContent = '';    // reset content at grid
    chrome.storage.sync.get(["selectedVerses", "verses", "totalBibleOnScreen"], (res) => {
        for (let i = 0; i < res.totalBibleOnScreen; i++) {
            const bibleContainerEl = document.createElement('div');
            const verseEl = document.createElement('div');
            const contentEl = document.createElement('div');
            const versionEl = document.createElement('div');

            bibleContainerEl.classList.add('bible-container', 'bible-container-2');
            verseEl.classList.add('verse', 'verse-2');
            contentEl.classList.add('content', 'content-2');
            versionEl.classList.add('version', 'version-2');

            let n = (res.verses.length <= res.selectedVerses[i]) ? 0 : res.selectedVerses[i];

            verseEl.appendChild(document.createTextNode(res.verses[n].verse));
            versionEl.appendChild(document.createTextNode(res.verses[n].version));
            contentEl.appendChild(document.createTextNode(res.verses[n].content));

            bibleContainerEl.appendChild(verseEl);
            bibleContainerEl.appendChild(versionEl);
            bibleContainerEl.appendChild(contentEl);

            gridEl.appendChild(bibleContainerEl); 
        }
    })
}

function increaseTotalBibleOnScreen() {
    chrome.storage.sync.get(["totalBibleLimit", "totalBibleOnScreen"], (res) => {
        if (totalBibleOnScreen >= totalBibleLimit) {
            return;
        }
        totalBibleOnScreen += 1;
        renderVerses();
    });
}

function decreseTotalBibleOnScreen() {
    chrome.storage.sync.get(["totalBibleLimit", "totalBibleOnScreen"], (res) => {
        if (totalBibleOnScreen <= 1) {
            return;
        }
        totalBibleOnScreen -= 1;
        renderVerses();
    });
}