/**
 * Element parallax effect
 * @requires https://github.com/dixonandmoe/rellax
 */
import dynamic from "next/dynamic";

const elementParallax = (() => {

    dynamic(
        () => {
            const el = document.querySelector('.rellax');

            if (el === null) return;

            const rellax = new Rellax('.rellax', {
                horizontal: true
            });
        }, { ssr: false }
    );
})();

export default elementParallax;