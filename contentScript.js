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


let verses = {};

const gridEl = document.createElement("DIV");
gridEl.classList.add('grid');
gridEl.classList.add('grid-2'); // FORCED
document.body.insertBefore(gridEl, document.body.firstChild);

window.setInterval(function() {

    const currentVerse = document.getElementById("pVerse").innerText;
    const currentVersion = document.getElementById("pTranslation").innerText;

    if (Object.keys(verses).length === 0 || Object.keys(verses)[0] !== currentVerse || verses[Object.keys(verses)[0]].version !== currentVersion) {

        const content = document.getElementById("pContent").innerText != null ? document.getElementById("pContent").innerText : "no content";  
        const verse = currentVerse;
        const version = currentVersion;

        const versionObj = {
            version: version
        };

        const contentObj = {
            content: content
        };

        verses[verse] = {
            ...versionObj,
            ...contentObj
        }
        
        console.log("hi");
        
        // const verseText = document.createTextNode(verse);
        // const contentText = document.createTextNode(content);
        // const versionText = document.createTextNode(version);

        // const bibleContainerEl = document.createElement('div');
        // const verseEl = document.createElement('div');
        // const contentEl = document.createElement('div');
        // const versionEl = document.createElement('div');

        // const formEl = document.getElementById("form1")
    
        // bibleContainerEl.classList.add('bible-container');
        // verseEl.classList.add('verse');
        // contentEl.classList.add('content');
        // versionEl.classList.add('version');

        // bibleContainerEl.classList.add('bible-container-2');
        // verseEl.classList.add('verse-2');
        // contentEl.classList.add('content-2');
        // versionEl.classList.add('version-2');
    
        // verseEl.appendChild(verseText);
        // contentEl.appendChild(contentText);
        // versionEl.appendChild(versionText);

        // gridEl.appendChild(bibleContainerEl);  
        // bibleContainerEl.appendChild(verseEl);
        // bibleContainerEl.appendChild(versionEl);
        // bibleContainerEl.appendChild(contentEl);
    }

}, 1000);