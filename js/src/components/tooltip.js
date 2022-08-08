/**
 * Tooltip
 * @requires https://getbootstrap.com
 * @requires https://popper.js.org/
 */
import dynamic from "next/dynamic";

const tooltip = (() => {

    dynamic(
        () => {
            let tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));

            let tooltipList = tooltipTriggerList.map((tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl, { trigger: 'hover' }));
        }, { ssr: false }
    );
})();

export default tooltip;