/**
 * Toast
 * @requires https://getbootstrap.com
 */
import dynamic from "next/dynamic";

const toast = (() => {

    dynamic(
        () => {
            let toastElList = [].slice.call(document.querySelectorAll('.toast'));

            let toastList = toastElList.map((toastEl) => new bootstrap.Toast(toastEl));
        }, { ssr: false }
    );
})();

export default toast;