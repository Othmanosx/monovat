import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import SEO from "../components/seo";
import { store } from "../redux/store";
if (typeof window !== "undefined") {
  require("bootstrap/dist/js/bootstrap");
}
import '../styles/index.scss';



function MyApp({ Component, pageProps }) {

  return (
    <>
      <SEO font={'https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap'} />
      <Provider store={store}>
        <Component {...pageProps} />
        <ToastContainer />
      </Provider>
    </>
  )
}

export default MyApp
