/**
 * Mouse move parallax effect
 * @requires https://github.com/wagerfield/parallax
 */
import dynamic from "next/dynamic";

const parallax = (() => {

    dynamic(
        () => {
            let element = document.querySelectorAll('.parallax');

            for (let i = 0; i < element.length; i++) {
                let parallaxInstance = new Parallax(element[i]);
            }
        }, { ssr: false }
    );
})();

export default parallax;