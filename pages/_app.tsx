import { useState, useEffect } from "react";
import "../styles/globals.css";
import type { AppProps } from "next/app";

import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import { GoogleOAuthProvider } from "@react-oauth/google";


const App = ({ Component, pageProps }: AppProps)=> {
  const [ isSSR, setIsSSR ] = useState( true );

    useEffect(()=> {
        setIsSSR( false );
    }, []);

    if ( isSSR ) {
        return null;
    }

  return (
      <GoogleOAuthProvider clientId={`${process.env.NEXT_PUBLIC_GOOGLE_API_TOKEN}`}>
          <Navbar />
          <div className="flex gap-6 md:gap-20">
              <div className="h-[91vh] overflow-hidden xl:hover:overflow-auto">
                  <Sidebar />
              </div>
              <div className="mt-4 flex flex-col gap-10 overflow-auto h-[88vh] flex-1">
                  <Component {...pageProps} />
              </div>
          </div>
      </GoogleOAuthProvider>
    );
}

export default App;