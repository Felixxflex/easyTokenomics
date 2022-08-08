import '../styles/globals.scss'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css'
// import '../css/theme.css'
import '../css/theme.min.css'
// import '../scss/_variables.scss'
import '../js/src/theme.js'
import '../js/theme.min.js'
import "@fortawesome/fontawesome-svg-core/styles.css"; // import Font Awesome CSS
import { config } from "@fortawesome/fontawesome-svg-core";
config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above


function MyApp({ Component, pageProps }) {
    return <Component {...pageProps }
    />
}

export default MyApp