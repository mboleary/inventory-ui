/**
 * Date formatting functions
 */

export function datetime_iso2form(dateStr) {
    if (!dateStr) return "";
    let d = new Date(dateStr);
    // YYYY-MM-DDTHH:mm
    return `${String(d.getFullYear()).padStart(4, "0")}-${String(d.getMonth()).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}T${String(d.getHours()).padStart(2, "0")}:${String(d.getMinutes()).padStart(2, "0")}`;
}

export function datetime_form2iso(dateStr) {
    if (!dateStr) return "";
    let d = new Date();
    // YYYY-MM-DDTHH:mm
    let s1 = dateStr.split("T");
    let date = s1[0].split("-");
    let time = s1[1].split(":");
    d.setFullYear(date[0]);
    d.setMonth(date[1]);
    d.setDate(date[2]);
    d.setHours(time[0]);
    d.setMinutes(time[1]);
    return d.toISOString();
}

export function datetime_iso2pretty(dateStr) {
    if (!dateStr) return "";
    let d = new Date(dateStr);
    return d.toDateString();
}