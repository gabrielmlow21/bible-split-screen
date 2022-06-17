let verses = [];
let totalVerseLimit = 2;
const gridEl = document.createElement("DIV");
gridEl.classList.add('grid');
gridEl.classList.add('grid-2'); // FORCED
document.body.insertBefore(gridEl, document.body.firstChild);

// const footer = document.getElementsByClassName("footer");

// const bible1El = document.createElement("DIV");
// bible1El.classList.add("bible1");

// const bible1Label = document.createElement("Label");
// bible1Label.setAttribute("for", "bible1");
// bible1Label.appendChild(document.createTextNode("Select Bible 1 Verse:"))

// let bible1Select = document.createElement("SELECT");
// bible1Select.classList.add('bible1-select');
// bible1Select.setAttribute("name", "bible1");
// bible1Select.classList.add("bible1Select");

// bible1El.appendChild(bible1Label);
// bible1El.appendChild(bible1Select);


// bible1El.innerHTML += '<label for="bible1">Select verse for Bible 1:<br></label><select name="bible1" class="bible1-select"><option>Default</option></select>';
// const bible2El = document.createElement("DIV");
// bible2El.innerHTML += '<label for="bible2">Select verse for Bible 2:<br></label><select name="bible2"><option>Default</option></select>';
// footer[0].appendChild(bible1El);
// footer[0].appendChild(bible2El);

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
        console.log(verses);
        renderVerses();
    }
}, 1000);


function renderVerses() {
    gridEl.textContent = '';    // reset content at grid
    for (let i = 0; i < totalVerseLimit; i++) {
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