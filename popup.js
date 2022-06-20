setInterval(updateDropdownOptions, 1000);

function updateDropdownOptions() {
    chrome.storage.sync.get(["verses"], (res) => {
        str = "<option value=" + "default" + ">Default</option>";
        for (let i = 0; i < res.verses.length; i++) {
            str += "<option value=" + i + ">" + res.verses[i].verse + " (" + res.verses[i].version + ") </option>";
        }
        document.getElementById("bible-1").innerHTML = str;
        document.getElementById("bible-2").innerHTML = str;
    })
}


function updateselectedVerses(value) {
    
}