import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import AutomationTab from './PricingTabs/AutomationTab';
import MarketingTab from './PricingTabs/MarketingTab';
import SslTab from './PricingTabs/SslTab';
import CustomTab from './PricingTabs/CustomTab';
const PricingPage = () => {

  return (
    <div className="min-h-screen md:pt-32 pt-10 ">
      <h1 className="text-[rgb(0,0,0)]  font-bold text-center md:text-5xl text-xl">Select an option Below to check Pricing & Details</h1>
      <Tabs>
        <div className="flex justify-center gap-4 items-center mx-10
            md:mt-14 mt-10">
          <TabList className={"flex justify-center items-center gap-10 outline-none"}>
            <Tab className='border-0'>
              <button className="btn btn-ghost btn-sm text-[12px] py-2 px-2  bg-[rgb(0,0,0)] text-white uppercase rounded-full hover:bg-[rgb(103,84,233)]">Social Media Automation / SEO / SEM</button>

            </Tab>
            <Tab className='border-0'>
              <button className="btn btn-ghost btn-sm text-[12px] py-2 px-2  bg-[rgb(0,0,0)] text-white uppercase rounded-full hover:bg-[rgb(103,84,233)]">Add On: SEM / SMM / SEO / Email Marketing</button>

            </Tab>
            <Tab className='border-0'>
              <button className="btn btn-ghost btn-sm text-[12px] py-2 px-2  bg-[rgb(0,0,0)] text-white uppercase rounded-full hover:bg-[rgb(103,84,233)]">CRM / Hosting / Web Pages / Email Packages / SSL</button>

            </Tab>
            <Tab className='border-0'>
              <button className="btn btn-ghost btn-sm text-[12px] py-2 px-2  bg-[rgb(0,0,0)] text-white uppercase rounded-full hover:bg-[rgb(103,84,233)]">Custom Plans/Tailored Services </button>

            </Tab>

          </TabList>

        </div>
        <TabPanel>
          <AutomationTab />
        </TabPanel>
        <TabPanel>
          <MarketingTab />
        </TabPanel>
        <TabPanel>
          <SslTab />
        </TabPanel>
        <TabPanel>
          <CustomTab />
        </TabPanel>
      </Tabs>


    </div>
  );
};

export default PricingPage;