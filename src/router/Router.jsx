import { createBrowserRouter } from "react-router-dom";
import Mainlayout from "../layout/Mainlayout";
import HomePage from "../pages/HomePage";
import ContactPage from "../pages/ContactPage";
import AuditPage from "../pages/AuditPage";
import SocialMediaPage from "../pages/SocialMediaPage";
import SearchEnginePage from "../pages/SearchEnginePage";
import GoogleBusinessPage from "../pages/GoogleBusinessPage";
import EmailMarketingPage from "../pages/EmailMarketingPage";
import EcommerceSolutionPage from "../pages/EcommerceSolutionPage";
import WebDesignAndHosting from "../pages/WebDesignAndHosting";
import AppDevelopmentPage from "../pages/AppDevelopmentPage";



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
            element: <SearchEnginePage />,
        },
        {
            path: "/Google-suite.htm",
            element: <GoogleBusinessPage />,
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
            element: <WebDesignAndHosting />,
        },
        {
            path: "/app-development.htm",
            element: <AppDevelopmentPage />,
        },
      ]
    },
  ]);
  

  export default router