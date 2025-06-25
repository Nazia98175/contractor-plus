import Faq from "@/components/crmbussiness/Faq";
import ComparisonTable from "@/components/pricing/ComparisonTable";
import CompleteFeatureList from "@/components/pricing/CompleteFeatureList";
import Plans from "@/components/pricing/Plans";
import PricingHero from "@/components/pricing/PricingHero";

const PricingPage = () => {
  const faqitems = [
    {
      id: 1,
      question: "Will my team actually use this?",
      answer:
        "Your team won't want to live without it. It will make every single person's job easier to the point you won't be able to imagine running your HVAC business without Contractor+. Use it free and we'll prove it. ",
    },
    {
      id: 2,
      question:
        "How fast can I switch from Jobber, Housecall Pro or ServiceTitan?",
      answer:
        "It links every call, message, email and file to each customer and each job address, so you can review past interactions and documents at a glance.",
    },
    {
      id: 3,
      question: "Can I import my current invoices, customers, and templates?",
      answer:
        "You drag and drop tasks on the schedule, view crew locations in real time and see status updates as work items are checked off or notes are added.",
    },
    {
      id: 4,
      question: "What software/tools does Contractor+ replace?",
      answer:
        "Contractor+ includes built-in calling and texting, dedicated job chat rooms and automatic transcripts so everyone stays in sync without missing details.",
    },
    {
      id: 5,
      question: "Does this work for small teams and large teams?",
      answer:
        "Capture inquiries through customized entry points, move opportunities through visual stages, then generate quotes and contracts clients can sign online—all within the same system.",
    },
  ];
  return (
    <main className="font-myriad overflow-hidden">
      <div className="relative bg-[url('/images/png/why-contractor-hero-bg.png')] bg-cover">
        <PricingHero />
      </div>
      <CompleteFeatureList />
      <div className="bg-white">
        <Plans />
        {/* <OurReviews reviewsList={OurReviewList} reviews={"hello"} /> */}
        <ComparisonTable />
        <Faq
          mainContainerclassName="pt-9 pb-16 z-20 px-2"
          faq={{
            title: "What HVAC contractors want to know",
            sub_title: "Frequently asked questions",
            faq: faqitems,
          }}
          classNameAnswer="pt-1"
          classHeadingMaxWidth="max-w-[88%] xs:max-w-[98%] sm:max-w-full mx-auto"
          variant="muted"
        />
      </div>
    </main>
  );
};

export default PricingPage;
