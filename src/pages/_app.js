
import React from "react";
import { Provider } from "react-redux";
import store from "@/app/redux/store";
import "../app/globals.css"; 

function MyApp({ Component, pageProps }) {
  return (
    
    <Provider store={store}>
        <Head>
        <script
          src="https://kit.fontawesome.com/7057a291ca.js"
          crossOrigin="anonymous"
          async
        ></script>
      </Head>
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
