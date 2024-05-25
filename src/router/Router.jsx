import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "../layout/Mainlayout";
import HomePage from "../pages/HomePage";
import ContactPage from "../pages/ContactPage";
import AuditPage from "../pages/AuditPage";



const router = createBrowserRouter([
    {
      path: "/",
      element: <Mainlayout />,
      children: [
        {
            path: "/",
            element: <HomePage />,

        },

        {
            path: "/Contact",
            element: <ContactPage />,
        },
        
        {
            path: "/Audit",
            element: <AuditPage />,
        },
      ]
    },
  ]);
  

  export default router