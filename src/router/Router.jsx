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
import ConsultingPage from "../pages/ConsultingPage";
import ContentWritingPage from "../pages/ContentWritingPage";
import AiChatbotPage from "../pages/AiChatbotPage";
import BlogPage from "../pages/BlogPage";
import PricingPage from "../pages/PricingPage/PricingPage";
import TermsCondition from "../pages/TermsCondition";
import Privacy from "../pages/Privacy";
import AiSolutionsPage from "../pages/AiSolutionsPage";



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
            path: "/index.htm",
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
            path: "/terms-condition.htm",
            element: <TermsCondition/>,
        },
        {
            path: "/privacy-policy.htm",
            element: <Privacy/>,
        },
        {
            path: "/pricing.htm",
            element: <PricingPage/>,
        },
        {
            path: "/blog.htm",
            element: <BlogPage/>,
        },
        {
            path: "/Ai-Solutions.htm",
            element: <AiSolutionsPage/>,
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
        {
            path: "/Erp-Crm-It-Chatbots.htm",
            element: <AiChatbotPage />,
        },
        {
            path: "/Content-writing.htm",
            element: <ContentWritingPage />,
        },
        {
            path: "/CCaaS-Outsourcing-Consulting.htm",
            element: <ConsultingPage />,
        },
        {
            path: "/Erp-crm-it-chatbot",
            element: <AiChatbotPage/>,
        },
      ]
    },
  ]);
  

  export default router