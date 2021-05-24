/**
 * Connects the form actions inside of a dialog element
 */

export function connectDialog(elem, onClose = null) {
    const dlgActions = elem.querySelectorAll("[dialog-action]");


    if (dlgActions) {
        for (const e of dlgActions) {
            const action = e.getAttribute("dialog-action");
            console.log("Action:", action);
            if (action === "close") {
                console.log("Adding close dialog event listener");
                e.addEventListener("click", (e) => {
                    // Check that this browser supports dialogs
                    if (typeof elem.close === "function") {
                        elem.close();
                    } else {
                        elem.setAttribute("hidden");
                    }
                    if (onClose) {
                        onClose(e);
                    }
                });
            }
        }
    }
}