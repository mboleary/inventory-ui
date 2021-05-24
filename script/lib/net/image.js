/**
 * Contains all requests that the program needs to make
 */

import {datetime_iso2form, datetime_form2iso} from "/script/util/format/date.js";

const ENDPOINT = "localhost:8000";

export async function getAll(params) {
    const resp = await fetch(`http://${ENDPOINT}/image`);
    if (resp.ok) {
        const dataset = resp.json();
        return dataset;
    } else {
        throw await resp.json();
    }
}

export async function getOne(params) {
    const resp = await fetch(`http://${ENDPOINT}/image/${params.id}`);
    if (resp.ok) {
        let data = await resp.json();
        data.date_acquired = datetime_iso2form(data.date_acquired);
        console.log("Returning:", data);
        return data;
    } else {
        throw await resp.json();
    }
}

export async function post(payload) {
    payload.date_acquired = datetime_form2iso(payload.date_acquired);
    if (!payload.images) {
        payload.images = [];
    }
    if (!payload.relations) {
        payload.relations = [];
    }
    if (!payload.tags) {
        payload.tags = [];
    }
    const resp = await fetch(`http://${ENDPOINT}/image`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    });
    if (resp.ok) {
        return resp.json();
    } else {
        throw await resp.json();
    }
}

export async function put(payload) {
    payload.date_acquired = datetime_form2iso(payload.date_acquired);
    const resp = await fetch(`http://${ENDPOINT}/image/${payload.id}`, {
        method: "PUT",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    });
    if (resp.ok) {
        return resp.json();
    } else {
        throw await resp.json();
    }
}

export async function deleteItem(params) {
    const resp = await fetch(`http://${ENDPOINT}/image/${params.id}`, {
        method: "DELETE",
    });
    if (resp.ok) {
        return resp.json();
    } else {
        throw await resp.json();
    }
}