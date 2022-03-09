// let verse = "";
// let version = "";
// let verseCount = 0;
// const verseLimit = 2;

// const gridEl = document.createElement("DIV");
// gridEl.classList.add('grid');
// gridEl.classList.add('grid-2');
// document.body.insertBefore(gridEl, document.body.firstChild);

// window.setInterval(function() {

//     const currentVerse = document.getElementById("pVerse").innerText;
//     const currentVersion = document.getElementById("pTranslation").innerText;

//     if (verse !== currentVerse || version !== currentVersion) {

//         const content = document.getElementById("pContent").innerText != null ? document.getElementById("pContent").innerText : "no content";
        
//         verse = currentVerse;
//         version = currentVersion;

//         if (verseCount >= verseLimit) {
//             gridEl.removeChild(gridEl.firstElementChild);
//         } else {
//             verseCount += 1
//         }
        
//         const verseText = document.createTextNode(verse);
//         const contentText = document.createTextNode(content);
//         const versionText = document.createTextNode(version);

//         const bibleContainerEl = document.createElement('div');
//         const verseEl = document.createElement('div');
//         const contentEl = document.createElement('div');
//         const versionEl = document.createElement('div');

//         // const formEl = document.getElementById("form1")
    
//         bibleContainerEl.classList.add('bible-container');
//         verseEl.classList.add('verse');
//         contentEl.classList.add('content');
//         versionEl.classList.add('version');

//         bibleContainerEl.classList.add('bible-container-2');
//         verseEl.classList.add('verse-2');
//         contentEl.classList.add('content-2');
//         versionEl.classList.add('version-2');
    
//         verseEl.appendChild(verseText);
//         contentEl.appendChild(contentText);
//         versionEl.appendChild(versionText);

//         gridEl.appendChild(bibleContainerEl);  
//         bibleContainerEl.appendChild(verseEl);
//         bibleContainerEl.appendChild(versionEl);
//         bibleContainerEl.appendChild(contentEl);
//         // insertAfter(formEl, cardEl);
//         // document.body.appendChild(cardEl);  
//         // cardEl.appendChild(verseEl);
//         // cardEl.appendChild(contentEl)
//     }

// }, 1000);


let verses = [["", "", ""], ["", "", ""]];

const gridEl = document.createElement("DIV");
gridEl.classList.add('grid');
gridEl.classList.add('grid-2'); // FORCED
document.body.insertBefore(gridEl, document.body.firstChild);

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
    }

}, 1000);