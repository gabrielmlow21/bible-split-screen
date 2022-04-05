let verses = [["", "", ""], ["", "", ""]];

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

    if (verses.length === 0 || verses[0][0] !== currentVerse || verses[0][1] !== currentVersion) {

        const content = document.getElementById("pContent").innerText != null ? document.getElementById("pContent").innerText : "no content";  
        const verse = currentVerse;
        const version = currentVersion;

        verses.unshift([verse, version, content]);
        
        const firstVerseText = document.createTextNode(verses[0][0]);
        const firstVersionText = document.createTextNode(verses[0][1]);
        const firstContentText = document.createTextNode(verses[0][2]);
        const secondVerseText = document.createTextNode(verses[1][0]);
        const secondVersionText = document.createTextNode(verses[1][1]);
        const secondContentText = document.createTextNode(verses[1][2]);

        const firstBibleContainerEl = document.createElement('div');
        const firstVerseEl = document.createElement('div');
        const firstContentEl = document.createElement('div');
        const firstVersionEl = document.createElement('div');
        const secondBibleContainerEl = document.createElement('div');
        const secondVerseEl = document.createElement('div');
        const secondContentEl = document.createElement('div');
        const secondVersionEl = document.createElement('div');
    
        firstBibleContainerEl.classList.add('bible-container', 'bible-container-2');
        firstVerseEl.classList.add('verse', 'verse-2');
        firstContentEl.classList.add('content', 'content-2');
        firstVersionEl.classList.add('version', 'version-2');
        secondBibleContainerEl.classList.add('bible-container', 'bible-container-2');
        secondVerseEl.classList.add('verse', 'verse-2');
        secondContentEl.classList.add('content', 'content-2');
        secondVersionEl.classList.add('version', 'version-2');
    
        firstVerseEl.appendChild(firstVerseText);
        firstContentEl.appendChild(firstContentText);
        firstVersionEl.appendChild(firstVersionText);
        secondVerseEl.appendChild(secondVerseText);
        secondContentEl.appendChild(secondContentText);
        secondVersionEl.appendChild(secondVersionText);

        firstBibleContainerEl.appendChild(firstVerseEl);
        firstBibleContainerEl.appendChild(firstVersionEl);
        firstBibleContainerEl.appendChild(firstContentEl);
        secondBibleContainerEl.appendChild(secondVerseEl);
        secondBibleContainerEl.appendChild(secondVersionEl);
        secondBibleContainerEl.appendChild(secondContentEl);

        gridEl.textContent = '';
        gridEl.appendChild(firstBibleContainerEl);  
        gridEl.appendChild(secondBibleContainerEl);  

        // replaceOptions();
    }
    // console.log(verses)
}, 1000);


// function replaceOptions() {
//     const newBible1Select = document.createElement("SELECT");
//     bible1Select.classList.add('bible1-select');
//     bible1Select.setAttribute("name", "bible1");
//     bible1Select.classList.add("bible1Select");
//     console.log(verses)
// }