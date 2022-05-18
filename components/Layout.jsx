import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import FloatingActionButton from "./FloatingActionButton";


const Layout = ({ Component, pageProps }) => {
  return ( 
    <main className="container">
      <Component {...pageProps} />
    </main>
   );
}
 
export default Layout;