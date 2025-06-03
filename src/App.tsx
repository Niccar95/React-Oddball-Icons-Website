import { RouterProvider } from "react-router-dom";

import IconList from "./components/IconList";
import { router } from "./Router";

function App() {
  return (
    <>
      <h1>React oddball icons</h1>
      <IconList />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
