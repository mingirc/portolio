import { createRoot } from "react-dom/client";
import App from "./App";
import { MobileProvider } from "./context/MobileContext";
import ErrorBoundary from "./ErrorBoundry";
import "../src/styles/style.scss";

const root = createRoot(document.getElementById("root")!)
root.render(
    <ErrorBoundary>
        <MobileProvider>
            <App />
        </MobileProvider>
    </ErrorBoundary>
)


