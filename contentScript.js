let verses = [];
const totalBibleLimit = 4;
let totalBibleOnScreen = 1;

// creating the grid
const gridEl = document.createElement("DIV");
gridEl.classList.add('grid');
gridEl.classList.add('grid-2'); // FORCED
document.body.insertBefore(gridEl, document.body.firstChild);

window.setInterval(function() {
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
        renderVerses();
    }
}, 1000);


function renderVerses() {
    gridEl.textContent = '';    // reset content at grid
    for (let i = 0; i < bibleCount; i++) {
        // stop rendering if it reaches the verses length
        if (i == verses.length) {
            return;
        }
        const bibleContainerEl = document.createElement('div');
        const verseEl = document.createElement('div');
        const contentEl = document.createElement('div');
        const versionEl = document.createElement('div');

        bibleContainerEl.classList.add('bible-container', 'bible-container-2');
        verseEl.classList.add('verse', 'verse-2');
        contentEl.classList.add('content', 'content-2');
        versionEl.classList.add('version', 'version-2');

        verseEl.appendChild(document.createTextNode(verses[i].verse));
        versionEl.appendChild(document.createTextNode(verses[i].version));
        contentEl.appendChild(document.createTextNode(verses[i].content));

        bibleContainerEl.appendChild(verseEl);
        bibleContainerEl.appendChild(versionEl);
        bibleContainerEl.appendChild(contentEl);

        gridEl.appendChild(bibleContainerEl);  
    }
}

function increaseTotalBibleOnScreen() {
    if (totalBibleOnScreen >= totalBibleLimit) {
        return;
    }
    bibleCount += 1;
    renderVerses();
}

function decreseTotalBibleOnScreen() {
    if (totalBibleOnScreen <= 1) {
        return;
    }
    bibleCount -= 1;
    renderVerses();
}