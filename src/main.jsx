import { ClerkProvider } from "@clerk/clerk-react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "rsuite/dist/rsuite-no-reset.min.css";
import App from "./App"; // Import App
import "./index.css";
import { FormDataProvider } from "./context/PropertyContext";
const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY;

if (!PUBLISHABLE_KEY) {
    throw new Error("Missing Publishable Key");
}

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <FormDataProvider>
        <ClerkProvider publishableKey={PUBLISHABLE_KEY} afterSignOutUrl="/">
            <App />
        </ClerkProvider>
        </FormDataProvider>
        {/* No need to wrap in <BrowserRouter> */}
    </StrictMode>
);
