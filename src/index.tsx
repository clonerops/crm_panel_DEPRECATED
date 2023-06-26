import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
// load index.css
import "./_cloner/assets/css/index.css";
import { BrowserRouter } from "react-router-dom";
import { QueryClientProvider, QueryClient } from '@tanstack/react-query'
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);

const queryClient = new QueryClient()

root.render(
    <React.StrictMode>
        <QueryClientProvider client={queryClient}>
            <BrowserRouter>
                <App />
                <ReactQueryDevtools />
            </BrowserRouter>
        </QueryClientProvider>
    </React.StrictMode>
);
