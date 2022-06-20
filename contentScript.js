let verses = [];
const totalBibleLimit = 4;
let totalBibleOnScreen = 2;

// creating the grid
const gridEl = document.createElement("DIV");
gridEl.classList.add('grid');
gridEl.classList.add('grid-2'); // FORCED
document.body.insertBefore(gridEl, document.body.firstChild);

setInterval(updateVersesList, 1000);

function updateVersesList() {
    const currentVerse = document.getElementById("pVerse").innerText;
    const currentVersion = document.getElementById("pTranslation").innerText;
    const currentContent = document.getElementById("pContent").innerText != null ? document.getElementById("pContent").innerText : "no content";  
    if (verses.length === 0 || verses[0].verse !== currentVerse || verses[0].version !== currentVersion) {
        const bible = {
            verse: currentVerse,
            version: currentVersion,
            content: currentContent
        }
        verses.unshift(bible)
        chrome.storage.sync.set({
            verses: verses,
            selectedVerses: [0, 1, 2, 3]
        });
        renderVerses();
    }
}

function renderVerses() {
    gridEl.textContent = '';    // reset content at grid
    chrome.storage.sync.get(["selectedVerses", "verses"], (res) => {
        for (let i = 0; i < totalBibleOnScreen; i++) {
            const bibleContainerEl = document.createElement('div');
            const verseEl = document.createElement('div');
            const contentEl = document.createElement('div');
            const versionEl = document.createElement('div');

            bibleContainerEl.classList.add('bible-container', 'bible-container-2');
            verseEl.classList.add('verse', 'verse-2');
            contentEl.classList.add('content', 'content-2');
            versionEl.classList.add('version', 'version-2');

            let n = (res.verses.length <= res.selectedVerses[i]) ? 0 : res.selectedVerses[i];

            verseEl.appendChild(document.createTextNode(verses[n].verse));
            versionEl.appendChild(document.createTextNode(verses[n].version));
            contentEl.appendChild(document.createTextNode(verses[n].content));

            bibleContainerEl.appendChild(verseEl);
            bibleContainerEl.appendChild(versionEl);
            bibleContainerEl.appendChild(contentEl);

            gridEl.appendChild(bibleContainerEl); 
        }
    })
}

function increaseTotalBibleOnScreen() {
    if (totalBibleOnScreen >= totalBibleLimit) {
        return;
    }
    totalBibleOnScreen += 1;
    renderVerses();
}

function decreseTotalBibleOnScreen() {
    if (totalBibleOnScreen <= 1) {
        return;
    }
    totalBibleOnScreen -= 1;
    renderVerses();
}