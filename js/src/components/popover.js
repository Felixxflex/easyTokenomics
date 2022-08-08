/**
 * Popover
 * @requires https://getbootstrap.com
 * @requires https://popper.js.org/
 */
import dynamic from "next/dynamic";

const popover = (() => {

    dynamic(
        () => {
            let popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));

            let popoverList = popoverTriggerList.map((popoverTriggerEl) => new bootstrap.Popover(popoverTriggerEl));
        }, { ssr: false }
    );
})();

export default popover;