import Faq from "@/components/crmbussiness/Faq";
import ComparisonTable from "@/components/pricing/ComparisonTable";
import CompleteFeatureList from "@/components/pricing/CompleteFeatureList";
import Plans from "@/components/pricing/Plans";
import PricingHero from "@/components/pricing/PricingHero";

const PricingPage = () => {
  const faqitems = [
    {
      id: 1,
      question: "What are the differences between FREE, PRO and PRO TEAM?",
      answer:
        "The FREE plan allows you to manage your clients, prepare and send estimates, invoices, even collect payments via credit card and eCheck. You can do pretty much everything you need for a smaller proprietorship or single-member business. PRO will allow you to add your employees, coworkers, admin assistants, and subcontractors to collaborate on projects. It also gives you a lot more control over individual settings and configurations throughout the app. ULTIMATE is maximum performance – everything to the max. All the features of PRO + enterprise level customizations, third party API integrations, more payment options, it’s Contractor+ – without limits.  For a one man operation, the free version should work just fine. For small teams, PRO should be enough to get the job done. And for the medium to larger companies who expect the best and want it all – ULTIMATE is the plan that was designed for you.",
    },
    {
      id: 2,
      question:
        "What if I buy an annual subscription of PRO but want to upgrade to ULTIMATE later?",
      answer:
        "We will prorate the difference between the two costs and apply any unused/remaining balance from your currently active PRO subscriptions to the cost of your Ultimate upgrade. There’s never a problem upgrading or downgrading at any time!",
    },
    {
      id: 3,
      question: "Do you have tutorials or offer assistance with account setup?",
      answer:
        "We offer both. We have video overviews and tutorials of every main feature and setting screen throughout our app. We also have coachmarks in the mobile apps that walk you through and explain each feature. We also have an amazing Customer Success team available 5 days a week offering 1-on-1 Zoom setup sessions, and demos. We’re here for you in every way possible to make sure you get up and running quickly and know how to properly utilize the app.",
    },
    {
      id: 4,
      question: "What is your cancellation & refund policy?",
      answer:
        "You can cancel at any time. It’s self-service, so you can upgrade, downgrade and cancel your account on your own in the click of a button. We offer a free for life version of our software and 14 day trials of most premium features (such as the job schedule and the team chat). During this period you should determine for yourself if upgrading to PRO or ULTIMATE is the best option for your business. You should not upgrade until you’ve properly evaluated the software, learned how to use everything and know that it’s the best choice for you. As such, Contractor+  is a digital, intangible good, and all sales are final. We will not honor any refunds for any reason, under any circumstances. We have thousands of users using our software successfully.  If you need help setting anything up or have questions, our Customer Success team is very accessible.",
    },
  ];
  return (
    <main className="font-myriad overflow-hidden">
      <div className="relative bg-[url('/images/png/why-contractor-hero-bg.png')] bg-contain bg-no-repeat sm:bg-cover">
        <PricingHero />
      </div>

      <div className="bg-white">
        <Plans />
        <CompleteFeatureList />
        <ComparisonTable />
        <Faq
          mainContainerclassName="pb-16 z-20 px-2"
          faq={{
            title: "What contractors want to know ",
            sub_title: "Frequently asked questions",
            faq: faqitems,
          }}
          classNameAnswer="pt-1"
          TittleClassName="w-fit mx-auto gradient-text-2"
          variant="muted"
        />
      </div>
    </main>
  );
};

export default PricingPage;
