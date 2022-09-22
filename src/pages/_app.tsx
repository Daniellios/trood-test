import "../styles/globals.css";
import type { AppType } from "next/dist/shared/lib/utils";
import { store } from "../redux/store";
import { Provider } from "react-redux";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  );
};

export default MyApp;
