import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import routes from "config/route-path";

function App() {

    return (
        <BrowserRouter>
            <Routes>
                ...
                {routes.map((element) => {
                    const elemPath = element.path;
                    return (
                        <Route
                            path={elemPath}
                            exact
                            element={<element.component />}
                            key={element.path}
                        />
                    );
                })}
            </Routes>
        </BrowserRouter>
    );
}

export default App;
