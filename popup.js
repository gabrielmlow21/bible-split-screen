function updateDropdownOptions() {
    chrome.storage.sync.get(["verses"], (res) => {
        console.log(res);
    })
}

setInterval(updateDropdownOptions, 1000);