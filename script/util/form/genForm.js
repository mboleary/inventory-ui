/**
 * Contains functions to manipulate forms to store and retrieve data
 */

const FORM_NAME_PREFIX = "$";

export default function genForm(data = {}, elem, onChange = null, onSubmit = null) {
    if (elem.constructor.name !== "HTMLFormElement") {
        console.error("Not a Form Element:", elem);
        return;
    }

    const frag = document.createDocumentFragment();

    // We're going to use the name field to designate which inputs contain which data (we'll use `as` to designate the format)

    const elems = elem.elements;

    const fieldsFound = {};

    for (const e of elems) {
        if (e.name) {
            fieldsFound[e.name] = true;
            const type = getType(data[e.name]);
            e.as = type;
            if (type === "array") {
                e.value = JSON.stringify(data[e.name] || []);
            } else if (type === "object") {
                e.value = JSON.stringify(data[e.name] || {});
            } else {
                e.value = data[e.name] || "";
            }
        }
    }

    // Adds the missing inputs as hidden inputs

    const keys = Object.keys(data);

    for (const key of keys) {
        if (!fieldsFound[key]) {
            const input = document.createElement("input");
            const type = getType(data[key]);
            input.type = "hidden";
            input.name = key;
            input.as = type;
            if (type === "array") {
                input.value = JSON.stringify(data[key] || []);
            } else if (type === "object") {
                input.value = JSON.stringify(data[key] || {});
            } else {
                input.value = data[key] || "";
            }
            frag.append(input);
        }
    }

    elem.addEventListener("change", (e) => {
        console.log("Form Change:", e);
        e.stopPropagation();
    });

    // We'll probably just ignore this event
    elem.addEventListener("formdata", (e) => {
        console.log("Form Data:", e);
        e.stopPropagation();

    });

    elem.addEventListener("submit", (e) => {
        console.log("Submit", e);
        e.preventDefault();
        e.stopPropagation();

        // @TODO serialize the data properly
        let data = getData(e.target.elements);

        console.log("Form Data:", data);
    });

    elem.appendChild(frag);
}

function getType(data) {
    if (data === null) {
        return "null";
    }
    if (Array.isArray(data)) {
        return "array";
    }
    return typeof data;
}

function getData(elems) {
    const toRet = {};
    for (const elem of elems) {
        if (elem.value && elem.name) {
            const fieldName = elem.name;
            const elemType = elem.type;

            // Figure out the element value
            let value = elem.value;
            
            if (elemType === "checkbox") {
                value = elem.checked;
            } else if (elemType === "radio") {
                if (!elem.checked) {
                    // We only want the radio button whose checked value is true
                    continue;
                } else {
                    value = elem.value;
                }
            }
            
            if (elem.as) {
                const type = elem.as;

                if (type === "array" || type === "object") {
                    value = JSON.parse(value);
                }
                
                if (type === "boolean") {
                    value = !!value;
                }

                if (type === "number") {
                    if (typeof value === "boolean") {
                        value = value ? 1 : 0;
                    } else {
                        value = Number(value);
                    }
                }

                if (type === "string") {
                    value = String(value);
                }
            }

            toRet[fieldName] = value;
        }
    }
    return toRet;
}