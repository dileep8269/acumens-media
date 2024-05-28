import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "../layout/Mainlayout";
import HomePage from "../pages/HomePage";
import ContactPage from "../pages/ContactPage";
import AuditPage from "../pages/AuditPage";
import BlogPage from "../pages/BlogPage";
import Privacy from "../pages/Privacy";
import TermsCondition from "../pages/TermsCondition";
import PricingPage from "../pages/PricingPage/PricingPage";
import AppDevelopmentPage from "../pages/AppDevelopmentPage";
import WebDesignAndHosting from "../pages/WebDesignAndHosting";
import EcommerceSolutionPage from "../pages/EcommerceSolutionPage";
import EmailMarketingPage from "../pages/EmailMarketingPage";
import SocialMediaPage from "../pages/SocialMediaPage";
import SearchEnginePage from "../pages/SearchEnginePage";
import GoogleBusinessPage from "../pages/GoogleBusinessPage";



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
          path: "/Social-media-automation.htm",
          element: <SocialMediaPage />,
      },
      {
          path: "/Seo.htm",
          element: <SearchEnginePage/>,
      },
      {
          path: "/Google-suite.htm",
          element: <GoogleBusinessPage/>,
      },
      {
          path: "/Email-Marketing.htm",
          element: <EmailMarketingPage />,
      },
      {
          path: "/E-commerce.htm",
          element: <EcommerceSolutionPage />,
      },
      {
          path: "/Web-Design-Hosting.htm",
          element: <WebDesignAndHosting/>,
      },
      {
          path: "/app-development.htm",
          element: <AppDevelopmentPage />,
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