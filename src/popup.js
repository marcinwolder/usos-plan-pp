document.addEventListener("DOMContentLoaded", () => {
    chrome.storage.local.get(["cwl", "cwa", "cwp"], (data) => {
        console.log("LOAD", cwl, cwa, cwp)
        if (data.cwl) document.getElementById("cwl").value = data.cwl;
        if (data.cwa) document.getElementById("cwa").value = data.cwa;
        if (data.cwp) document.getElementById("cwp").value = data.cwp;
    });
});

document.getElementById("searchForm").addEventListener("submit", (event) => {
    event.preventDefault();

    const cwl = document.getElementById("cwl").value.trim();
    const cwa = document.getElementById("cwa").value.trim();
    const cwp = document.getElementById("cwp").value.trim();
    
    if (cwl && cwa && cwp) {
        chrome.storage.local.set({ cwl, cwa, cwp });
        console.log(cwl, cwa, cwp)

        chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
            chrome.scripting.executeScript({
                target: { tabId: tabs[0].id },
                func: deleteDivs,
                args: [cwl, cwa, cwp]
            });
        });
    }
});

function deleteDivs(cwl, cwa, cwp) {
    const divs = document.querySelectorAll("timetable-entry");

    divs.forEach(div => {
        if(div.innerHTML.includes(`CWL`) && !div.innerHTML.includes(`CWL, gr.&nbsp;${cwl}`)) {
            div.remove();
        }
        if(div.innerHTML.includes(`CWP`) && !div.innerHTML.includes(`CWP, gr.&nbsp;${cwp}`)) {
            div.remove();
        }
        if(div.innerHTML.includes(`CWA`) && !div.innerHTML.includes(`CWA, gr.&nbsp;${cwa}`)) {
            div.remove();
        }
    });
}

document.getElementById("clearStorage").addEventListener("click", () => {
    chrome.storage.local.remove(["cwl", "cwa", "cwp"], () => {
        document.getElementById("cwl").value = "";
        document.getElementById("cwa").value = "";
        document.getElementById("cwp").value = "";
        console.log("Pamięć wyczyszczona.");
    });
});