import { createContext } from "react";

let userContext = createContext();
let UseProvider = userContext.Provider;
let UseConsumer = userContext.Consumer;

export {UseProvider, UseConsumer}
