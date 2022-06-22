setInterval(updateDropdownOptions, 1000);

function updateDropdownOptions() {
    chrome.storage.sync.get(["verses", "selectedVerses", "totalBibleOnScreen"], (res) => {
        for (let bibleId = 0; bibleId < res.totalBibleOnScreen; bibleId++) {
            let str = (bibleId == res.selectedVerses[bibleId]) ? "<option value=" + "default" + " selected>Default</option>" : "<option value=" + "default" + ">Default</option>";
            for (let i = 0; i < res.verses.length; i++) {
                str += (i == res.selectedVerses[bibleId]) ? `<option value="${i}" selected>${res.verses[i].verse} (${res.verses[i].version})</option>` : `<option value="${i}">${res.verses[i].verse} (${res.verses[i].version})</option>`; 
            }
            document.getElementById(`bible-${bibleId+1}`).innerHTML = str;
        }
    })
}