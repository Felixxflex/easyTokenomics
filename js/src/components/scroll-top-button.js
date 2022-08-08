/**
 * Animate scroll to top button in/off view
 */
import dynamic from "next/dynamic";

const scrollTopButton = (() => {

    dynamic(
        () => {
            let element = document.querySelector('.btn-scroll-top'),
                scrollOffset = 600;

            if (element == null) return;

            let offsetFromTop = parseInt(scrollOffset, 10);

            window.addEventListener('scroll', (e) => {
                if (e.currentTarget.pageYOffset > offsetFromTop) {
                    element.classList.add('show');
                } else {
                    element.classList.remove('show');
                }
            });
        }, { ssr: false }
    );

})();

export default scrollTopButton;