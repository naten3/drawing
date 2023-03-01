import { WebSocketService } from "@/service/webSocketService";
import { createContext } from "react";

export const WebsocketServiceContext = createContext<WebSocketService>(
  null as unknown as WebSocketService
);
