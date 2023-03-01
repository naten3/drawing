import { WebsocketServiceContext } from "@/context/WebSocketServiceContext";
import { WebSocketService } from "@/service/webSocketService";
import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import HeaderComponent from "../components/header/header";

const websocketService = new WebSocketService();

export default function App({ Component, pageProps }: AppProps) {
  return (
    <div>
      <HeaderComponent />
      <WebsocketServiceContext.Provider value={websocketService}>
        <Component {...pageProps} />;
      </WebsocketServiceContext.Provider>
    </div>
  );
}
