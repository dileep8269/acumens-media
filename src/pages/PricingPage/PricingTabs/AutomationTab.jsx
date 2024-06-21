import { useState } from 'react';
import PricingTableComparison from '../../../components/pricingPageComponents/PricingTableComparison';
import SocialMediaPricePlan from '../../../components/pricingPageComponents/SocialMediaPricePlan';
import PricingTabs from '../../../components/pricingPageComponents/PricingTabs';
import { socialMediaBasicPlan, socialMediaGrowthPlan, socialMediaDynamicPlan, socialMediaUltimatePlan } from '../../../constants/pricingPageConstant';

const AutomationTab = () => {
    const [plan, setPlan] = useState('monthly'); // Default plan

    // Pricing based on the selected plan
    const pricing = {
        monthly: {
            UltimatePro: 379.99,
            pro: 349.99,
            business: 329.99,
            special: 299.99
        },
        sixMonths: {
            UltimatePro: 265.99,
            pro: 244.99,
            business: 230.99,
            special: 209.99
        },
        twelveMonths: {
            UltimatePro: 220.39,
            pro: 202.99,
            business: 191.93,
            special: 173.99
        }
    };

    return (
        <>
            <div className="mt-10">
                <section className="text-gray-600 body-font overflow-hidden">
                    <div className="container px-5 mx-auto">
                        <div className="flex flex-col text-center w-full mb-10">
                            <h1 className="md:text-4xl text-xl font-semibold title-font mb-2 text-gray-900">Social Media Automation/SEO/SEM Packages</h1>
                            <PricingTabs plan={plan} setPlan={setPlan} />
                        </div>
                        <div className="flex md:justify-between md:items-start gap-10 overflow-x-auto 3xl:overflow-hidden py-10 3xl:px-4 bg-yellow-500">

                            <SocialMediaPricePlan price={pricing[plan]?.UltimatePro} plan={socialMediaBasicPlan} />
                            <SocialMediaPricePlan price={pricing[plan]?.pro} plan={socialMediaGrowthPlan} />
                            <SocialMediaPricePlan price={pricing[plan]?.business} plan={socialMediaDynamicPlan} />
                            <SocialMediaPricePlan price={pricing[plan]?.special} plan={socialMediaUltimatePlan} />

                        </div>
                    </div>
                </section>
            </div>

            <PricingTableComparison />

        </>
    );
};

export default AutomationTab;
