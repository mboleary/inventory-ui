/**
 * Generates the table of data
 */

export default function genTable(data, schema, elem, onRowClick = null) {
    if (elem.constructor.name !== "HTMLTableElement") {
        console.error("Not a Table Element:", elem);
        return;
    }

    const frag = document.createDocumentFragment();

    frag.appendChild(genHeader(schema));

    const tbody = document.createElement("tbody");

    for (const item of data) {
        tbody.appendChild(genRow(item, schema, onRowClick));
    }

    frag.appendChild(tbody);

    const caption = document.createElement("caption");

    caption.textContent = `${data.length} rows rendered`;

    frag.appendChild(caption);

    elem.appendChild(frag);
}

function genHeader(schema) {
    const thead = document.createElement("thead");
    const tr = document.createElement("tr");

    for (const item of schema) {
        const th = document.createElement("th");
        th.textContent = item.label;
        tr.appendChild(th);
    }

    thead.appendChild(tr);
    return thead;
}

function genRow(row, schema, onRowClick) {
    const tr = document.createElement("tr");

    for (const item of schema) {
        const td = document.createElement("td");
        // @TODO format the value here
        td.textContent = row[item.field];
        tr.appendChild(td);
    }

    if (onRowClick) {
        tr.addEventListener("click", (event) => onRowClick(row, event));
    }

    return tr;
}