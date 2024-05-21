import { Suspense } from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import routes from "./routes";
import Register from "./Outlet/Register";

function App() {
  return (
    <Suspense>
      <Routes>
        <Route element={<Register/>} >
          {
            routes.map((item, index) =>
            (
              <Route
                path={item.path}
                key={index}
                exact={`${item.exact}`}
                strict={item.strict}
                name={item.name}
                element={item.component}
              />
            )
            )
          }
        </Route>


      </Routes>
    </Suspense>

  );
}

export default App;
