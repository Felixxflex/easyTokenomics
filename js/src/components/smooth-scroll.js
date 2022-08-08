/**
 * Anchor smooth scrolling
 * @requires https://github.com/cferdinandi/smooth-scroll/
 */
import dynamic from "next/dynamic";

const smoothScroll = (() => {

    dynamic(
        () => {
            let selector = '[data-scroll]',
                fixedHeader = '[data-scroll-header]',
                scroll = new SmoothScroll(selector, {
                    speed: 800,
                    speedAsDuration: true,
                    offset: (anchor, toggle) => {
                        return toggle.dataset.scrollOffset || 40;
                    },
                    header: fixedHeader,
                    updateURL: false
                });
        }, { ssr: false }
    );

})();

export default smoothScroll;