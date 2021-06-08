/**
 * This builds the form element using a schema
 */

export default function buildForm(schema, elem, options = {}) {
    const frag = document.createDocumentFragment();

    for (const item of schema.items) {
        let child = null;

        if (["text", "number", "color", "date", "email", "datetime", "range", "tel", "url"].indexOf(item.type) !== -1) {
            child = genInput(item);
        } else if (item.type === "textarea") {
            child = genTextArea(item);
        } else if (item.type === "radio") {
            child = genRadio(item);
        } else {
            child = genHiddenInput(item);
        }

        // Handle custom elements
        if (item.type === "custom" && item.component) {
            // @TODO add in the custom component
        }

        frag.appendChild(child);
    }

    if (options.submit) {   
        const hr = document.createElement("hr");
        frag.appendChild(hr);
        frag.appendChild(genSubmitButton());
    }

    elem.appendChild(frag);
}

// Generates a regular input
function genInput(schemaItem) {
    const fieldset = document.createElement("fieldset");
    const label = document.createElement("label");
    // const br = document.createElement("br");
    const input = document.createElement("input");

    fieldset.classList.add("flex-layout");
    fieldset.classList.add("vertical");
    // fieldset.classList.add("required");

    let type = schemaItem.type;

    if (schemaItem.type === "datetime") {
        type = "datetime-local";
    }

    label.innerText = schemaItem.label || schemaItem.id;
    label.for = schemaItem.id;

    input.type = type || "text";
    input.value = schemaItem.default || null;
    input.placeholder = schemaItem.placeholder || "";
    input.name = schemaItem.id;
    input.id = schemaItem.id;

    fieldset.appendChild(label);
    // fieldset.appendChild(br);
    fieldset.appendChild(input);

    return fieldset;
}

function genTextArea(schemaItem) {
    const fieldset = document.createElement("fieldset");
    const label = document.createElement("label");
    // const br = document.createElement("br");
    const textarea = document.createElement("textarea");

    fieldset.classList.add("flex-layout");
    fieldset.classList.add("vertical");
    // fieldset.classList.add("required");

    label.innerText = schemaItem.label || schemaItem.id;
    label.for = schemaItem.id;

    textarea.value = schemaItem.default || null;
    textarea.placeholder = schemaItem.placeholder || "";
    textarea.name = schemaItem.id;
    textarea.id = schemaItem.id;

    fieldset.appendChild(label);
    // fieldset.appendChild(br);
    fieldset.appendChild(textarea);

    return fieldset;
}

function genRadio(schemaItem) {
    const fieldset = document.createElement("fieldset");
    const label = document.createElement("label");
    // const br = document.createElement("br");

    fieldset.classList.add("flex-layout");
    fieldset.classList.add("vertical");
    // fieldset.classList.add("required");
    
    label.innerText = schemaItem.label || schemaItem.id;
    
    fieldset.appendChild(label);
    // fieldset.appendChild(br);

    for (const item of schemaItem.options) {
        const input = document.createElement("input");
        const labelItem = document.createElement("label");
        // const labelTextNode = document.createTextNode()
        let text = "";

        labelItem.classList.add("option");
        
        input.type = "radio";
        input.name = schemaItem.id;
        let id = null;
        if (typeof item === "object") {
            // use key / value
            id = `${schemaItem.id}_${item.key.replace(" ", "").toLowerCase()}`;
            input.value = item.key;
            text = item.value;
        } else {
            id = `${schemaItem.id}_${item.replace(" ", "").toLowerCase()}`;
            input.value = item;
            text = item;
        }
        
        input.id = id;
        labelItem.for = id;
        
        // fieldset.appendChild(input);
        labelItem.appendChild(input);
        labelItem.appendChild(document.createTextNode(text));

        fieldset.appendChild(labelItem);
        // fieldset.appendChild(document.createElement("br"));
    }

    return fieldset;
}

function genHiddenInput(schemaItem) {
    const input = document.createElement("input");
    input.type = "hidden";
    input.name = schemaItem.id;
    input.id = schemaItem.id;
    return input;
}

function genSubmitButton() {
    const button = document.createElement("input");
    button.type = "submit";
    button.value = "Submit";
    return button;
}