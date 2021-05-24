/**
 * Generates cards using HTML Templates
 */

export default function genCards(data, template, elem, onClick = null, onDelete = null, cardCreateCallback = null) {
    if (template.constructor.name !== "HTMLTemplateElement") {
        console.error("Not a Template Element:", elem);
        return;
    }

    const frag = document.createDocumentFragment();

    const parentDiv = document.createElement("div");
    parentDiv.isCardContainer = true;

    for (const item of data) {
        genOneCard(item, template, parentDiv, onClick, onDelete, cardCreateCallback);
    }

    frag.appendChild(parentDiv);

    elem.appendChild(frag);
}

// @TODO add function to add or remove cards

export function genOneCard(item, template, elem, onClick, onDelete, cardCallback) {
    const content = template.content.cloneNode(true);

    const namedElems = content.querySelectorAll('[name]');
    const caElems = content.querySelectorAll("[card-action]");

    console.log("Named Elements:", namedElems, item);
    
    // Set the content
    for (const elem of namedElems) {
        const name = elem.getAttribute("name");
        console.log("Element name:", name);
        if (item[name]) {
            elem.textContent = item[name];
        }
    }

    // Add the card action handlers
    for (const elem of caElems) {
        const cardAction = elem.getAttribute("card-action");
        if (cardAction === "click" && onClick) {
            elem.dataset.id = item.id;
            elem.addEventListener("click", (e) => {
                e.stopPropagation();
                onClick(item, e);
            });
        } else if (cardAction === "delete") {
            if (onDelete) {
                elem.addEventListener("click", (e) => {
                    e.stopPropagation();
                    onDelete(item, e);
                });
            } else {
                elem.hidden = true;
            }
        }
    }

    if (cardCallback) {
        cardCallback(item, content);
    }

    elem.appendChild(content);
}