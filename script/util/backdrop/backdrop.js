/**
 * Has functions to maintain and manipulate the backdrop
 */

export default function setBackdrop(open = true, elem, freezeBody = true) {

    if (open) {
        elem.setAttribute("open", "");
        
        if (freezeBody) {
            // window.scrollTo(0, 0);
            document.body.style.overflow = "hidden";
        }
    } else {
        elem.removeAttribute("open");

        if (freezeBody) {
            // window.scrollTo(0, 0);
            document.body.style.overflow = null;
        }
    }
}