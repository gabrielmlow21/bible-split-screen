verses = []

setInterval(getLatestVerses, 1000);

function getLatestVerses() {
    chrome.storage.sync.get(["verses"], (res) => {
        if (res.verses.length != verses.length) {
            verses = res.verses;
            updateDropdownOptions();
        }
    })
}

function updateDropdownOptions() {
    str = "<option>Default</option>";
    for (let verse of verses) {
        str += "<option>" + verse.verse + "</option>";
    }
    document.getElementById("bible-1").innerHTML = str;
}