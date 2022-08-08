/**
 * Input fields formatter
 * @requires https://github.com/nosir/cleave.js
 */
import dynamic from "next/dynamic";

const inputFormatter = (() => {

    dynamic(
        () => {
            let input = document.querySelectorAll('[data-format]');
            if (input.length === 0) return;

            for (let i = 0; i < input.length; i++) {

                let targetInput = input[i],
                    cardIcon = targetInput.parentNode.querySelector('.credit-card-icon'),
                    options,
                    formatter;
                if (targetInput.dataset.format != undefined) options = JSON.parse(targetInput.dataset.format);

                if (cardIcon) {
                    formatter = new Cleave(targetInput, {...options,
                        onCreditCardTypeChanged: (type) => {
                            cardIcon.className = 'credit-card-icon ' + type;
                        }
                    });
                } else {
                    formatter = new Cleave(targetInput, options);
                }
            }
        }, { ssr: false }
    );
})();

export default inputFormatter;