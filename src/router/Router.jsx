import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "../layout/Mainlayout";
import HomePage from "../pages/HomePage";
import ContactPage from "../pages/ContactPage";
import AuditPage from "../pages/AuditPage";
import PricingPage from "../pages/PricingPage/PricingPage";
import TermsCondition from "../pages/TermsCondition";
import BlogPage from "../pages/BlogPage";
import Privacy from "../pages/Privacy";


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
          path: "/contact.htm",
          element: <ContactPage />,
      },
      
      {
          path: "/audit.htm",
          element: <AuditPage />,
      },
      {
          path: "/pricing.htm",
          element:<PricingPage/>
      },
      {
          path: "/terms-condition.htm",
          element:<TermsCondition/>
      },
      {
          path: "/blog.htm",
          element:<BlogPage/>
      },
      {
          path: "/privacy-policy.htm",
          element:<Privacy/>
      },
    ]
  }, 
]);
  

  export default router