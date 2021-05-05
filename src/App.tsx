import React, { useEffect } from "react";
import { BackendProvider } from "@gooddata/sdk-ui";

import AppRouter from "./routes/AppRouter";
import { useAuth } from "./contexts/Auth";
import { loadAppcueScript } from "./appcues";
import { WorkspaceListProvider } from "./contexts/WorkspaceList";

function App() {
    const { backend } = useAuth();

    useEffect(() => {
        loadAppcueScript();
      }, []);

    return (
        <BackendProvider backend={backend}>
            <WorkspaceListProvider>
                <AppRouter />
            </WorkspaceListProvider>
        </BackendProvider>
    );
}

export default App;
