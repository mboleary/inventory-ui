/**
 * Contains all requests that the program needs to make
 */

const ENDPOINT = "localhost:8000";

export async function getAll(params) {
    const resp = await fetch(`http://${ENDPOINT}/asset`);
    if (resp.ok) {
        const dataset = resp.json();
        return dataset;
    } else {
        throw await resp.json();
    }
}

export async function getOne(params) {
    const resp = await fetch(`http://${ENDPOINT}/asset/${params.id}`);
    if (resp.ok) {
        return resp.json();
    } else {
        throw await resp.json();
    }
}

export async function post(payload) {
    const resp = await fetch(`http://${ENDPOINT}/asset`, {
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
    const resp = await fetch(`http://${ENDPOINT}/asset/${payload.id}`, {
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
    const resp = await fetch(`http://${ENDPOINT}/asset/${params.id}`, {
        method: "DELETE",
    });
    if (resp.ok) {
        return resp.json();
    } else {
        throw await resp.json();
    }
}