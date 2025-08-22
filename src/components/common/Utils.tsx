import clock from "../../../public/lotties/Clock-2.json";
import up_arrow_black from "../../../public/lotties/up-arrow-black.json";
import productivity from "../../../public/lotties/productivity.json";
import { ClockIcon, UpArrowIcon } from "./Icons";

export const estimateHeroData = [
  { title: "<9", desc: "Minutes spent on an estimate" },
  { title: "$100k+", desc: "More in annual profit from fewer underbids" },
  { title: "2x", desc: "Higher close rate for estimates sent same-day" },
  { title: "30%", desc: "Reduction in material cost errors" },
];

export const billingBlogPost = {
  id: 1,
  title: "Business Phone & SMS topics in Contractor+ HQ",
  btnText: "Contractor+ HQ",
  btnUrl: "/",
};

export const billingSliderData = {
  title:
    "Turn the full job history into one clean invoice, without manual re-entry.",
  slug: "field-service",
  solutionCards: [
    {
      id: 58,
      title: "Estimate-to-Invoice",
      description:
        "Approved estimates become invoices instantly. No double-entry or manual document creation.",
      image: null,
    },

    {
      id: 60,
      title: "Uninvoiced Items Aggregator",
      description:
        "Contractor+ automatically pulls in unbilled labor, materials, mileage, and expenses. Add to the invoice in one click.",
      image: null,
    },
    {
      id: 61,
      title: "Smart Change Orders",
      description:
        "Positive or negative change orders are captured as they happen and updated on the invoice instantly. ",
      image: null,
    },
    {
      id: 62,
      title: "Recurring Billing",
      description:
        "Set up automatic invoices for repeat jobs and maintenance plans. Store cards and charge them after recurring visits.",
      image: null,
    },
    {
      id: 63,
      title: "Progress Billing",
      description:
        "Invoice in phases or milestones as work is completed during long-term projects.",
      image: null,
    },
    {
      id: 64,
      title: "Online Payments",
      description:
        "Get payment faster by letting clients pay by card or ACH directly from the invoice.",
      image: null,
    },
    {
      id: 65,
      title: "Late Fees & Auto-Reminder",
      description:
        "Set invoice terms and late fees. Contractor+ sends auto-reminders so you don’t have to follow up.",
      image: null,
    },
    {
      id: 66,
      title: "eSign on Change Orders",
      description:
        "Make any change orders legally defensible contract amendments with built-in eSignature. ",
      image: null,
    },
  ],
};
export const invoiceFaqData = {
  title: "What contractors want to know ",
  subTitle: "Frequently asked questions",
  faq: [
    {
      id: 1,
      question: "Can I invoice directly from a job or estimate?",
      answer:
        "Yes. Instantly go from approved estimate to invoice in a click without duplicate entry or rebuilding the whole thing.",
    },
    {
      id: 2,
      question: "What happens when there’s a mid-job change?",
      answer:
        "No sweat. Just create a change order. More materials, added labor, a client request… it’s all built into the system when it happens. Everything stays tracked, approved, and visible.",
    },
    {
      id: 3,
      question: "How does Contractor+ make sure I don’t miss billable items?",
      answer:
        "The system automatically pulls in any unbilled time, mileage, materials, or expenses tied to the job. You’ll see a running list of uninvoiced items. Add them in one click. ",
    },
    {
      id: 4,
      question: "Can I bill in phases or request partial payments?",
      answer:
        "Absolutely. You can invoice by milestone, percentage, or scope completion. It’s perfect for multi-phase jobs or long-term projects that need progress billing.",
    },
    {
      id: 5,
      question: "Do you support recurring billing for repeat clients?",
      answer:
        "Yes. For maintenance plans or recurring jobs, you can set up automated billing with a card on file. Invoices get sent and charged without any manual work.",
    },
  ],
};

export const estimateSoftwareData = {
  title: "Not all AI estimate software makes your life easier",
  subTitle: "Some AI estimators get “close”. Estimatic gets it right.",
  comaprisons: [
    {
      title: "Other Options",
      comparisonList: [
        {
          details:
            "Uses AI that’s not much different than the free version of ChatGPT",
        },
        {
          details: "Standalone tool with inadequate  add-on features",
        },
        {
          details: "Generic line items that don’t match how you bid",
        },
        {
          details: "Limited supply integrations",
        },
        { details: "AI guesses numbers based on who-knows-what" },
        {
          details: "Can only read text input",
        },
        { details: "Limited customizability" },
        {
          details:
            "$120/mo. for 5 people to use a standalone estimating & invoice tool",
        },
      ],
    },
    {
      title: "Your way",
      comparisonList: [
        {
          details: "Built on advanced AI models fine-tuned for estimating	",
        },
        {
          details:
            "Estimates auto sync to contacts, jobs, and scheduling tools in Contractor+",
        },
        {
          details:
            "Labor, materials, assemblies, permits, and info-only lines built to your exact format",
        },
        {
          details:
            "Live pricing from Home Depot, Lowe’s, Menards, Ace, Build.com, ABC Supply",
        },
        {
          details:
            "Estimates are tied to your real labor rates, cost book, and local material prices",
        },
        {
          details:
            "Can read photos, blueprints, and drawings for more context about the job",
        },
        {
          details: "Built-in options for labor and material markup",
        },
        {
          details:
            "$95/mo. for 5 people to use the entire Contractor+ operating system. Only pay for what you use",
        },
      ],
    },
  ],
};
export const billingVsthWayYouCouldData = {
  title: "How you’ve been billing vs. the way you could be",

  comaprisons: [
    {
      title: "The old way",
      comparisonList: [
        { details: "Creating invoices from scratch after every job" },
        { details: "Re-entering hours, materials, and mileage manually" },
        {
          details:
            "Forgetting to bill for small add-ons like extra material or mileage",
        },
        { details: "Chasing approvals for changes after the job is done" },
        {
          details: "Using one system to track time and another to bill",
        },
        { details: "Rebuilding new invoices when the scope changes" },
        {
          details:
            "Separate apps for recurring billing, payments, and invoicing",
        },
        { details: "Clients asking for invoices or payment links" },
      ],
    },
    {
      title: "The Contractor+ way",
      comparisonList: [
        {
          details:
            "Convert estimates, jobs, or work orders into invoices in one click",
        },
        {
          details: "Everything auto-populates from time logs and job data",
        },
        {
          details:
            "Contractor+ captures all uninvoiced items so you can add them to the invoice",
        },
        {
          details: "Clients e-sign change orders before they hit the invoice",
        },
        {
          details:
            "Time, tasks, and charges all feed into one invoice automatically",
        },
        {
          details: "Invoices update automatically with every change order",
        },
        {
          details:
            "Recurring jobs, card-on-file payments, and invoicing in one platform",
        },

        {
          details:
            "Clients access and pay invoices through a self-serve portal",
        },
      ],
    },
  ],
};

export const billingFaqData = {
  title: "What contractors want to know ",
  subTitle: "Frequently asked questions",
  faq: [
    {
      id: 1,
      question: "Can I invoice directly from a job or estimate?",
      answer:
        "Yes. Instantly go from approved estimate to invoice in a click without duplicate entry or rebuilding the whole thing.",
    },
    {
      id: 2,
      question: "What happens when there’s a mid-job change?",
      answer:
        "No sweat. Just create a change order. More materials, added labor, a client request… it’s all built into the system when it happens. Everything stays tracked, approved, and visible.",
    },
    {
      id: 3,
      question: "How does Contractor+ make sure I don’t miss billable items? ",
      answer:
        "The system automatically pulls in any unbilled time, mileage, materials, or expenses tied to the job. You’ll see a running list of uninvoiced items. Add them in one click.  ",
    },
    {
      id: 4,
      question: "Can I bill in phases or request partial payments?",
      answer:
        "Absolutely. You can invoice by milestone, percentage, or scope completion. It’s perfect for multi-phase jobs or long-term projects that need progress billing. ",
    },
    {
      id: 5,
      question: "Do you support recurring billing for repeat clients?",
      answer:
        "Yes. For maintenance plans or recurring jobs, you can set up automated billing with a card on file. Invoices get sent and charged without any manual work.",
    },
  ],
};
export const tooltrackingData = {
  btnText: "Get started FREE",
  btnUrl: null,
  featureHighlightSectionVisible: true,

  mainImgDesktop: {
    url: "/images/webp/tool-tracking.webp",
  },
  mainImgMobile: {
    url: "/images/webp/tool-tracking.webp",
  },
  mobileBtn: "Download FREE App",
  subTitle: null,
  title: "A tool tracking system that syncs with the rest of your operation",
};

export const mileageTrackingData = {
  btnText: "Get started FREE",
  btnUrl: null,
  featureHighlightSectionVisible: true,

  mainImgDesktop: {
    url: "/images/webp/mileage-tracking.webp",
  },
  mainImgMobile: {
    url: "/images/webp/mileage-tracking.webp",
  },
  mobileBtn: "Download FREE App",
  subTitle: null,
  title: null,
};
export const stopToolsData = {
  id: 324,
  title: null,
  subTitle: null,
  btnText: "Get started FREE",

  btnUrl: null, // can be replaced with a link like "/signup" if needed
  mobileBtn: "Download FREE App",
  featureHighlightSectionVisible: true,
  featuresList: [
    {
      id: 408,
      title: "The log that stops tools from “growing legs”",
      conclusion:
        "With Contractor+, every asset has a clear chain of custody—so you keep more of what you buy.",
      content: [
        {
          title: "Time-stamped check-in/out receipts and transfers",
          text: "Time-stamped check-in/out receipts and transfers",
        },
        {
          title: "Truck-level Bluetooth scans before leaving a site",
          text: "Truck-level Bluetooth scans before leaving a site",
        },
        {
          title: "Searchable history by tool, job, person, or truck",
          text: "Searchable history by tool, job, person, or truck",
        },
      ],
      cardImg: {
        src: "/images/webp/tool-tracking-system.webp",
        alt: "Track properties",
      },
    },
  ],
};

export const mileageListData = {
  id: 324,
  title: null,
  subTitle: null,
  btnText: "Get started FREE",

  btnUrl: null, // can be replaced with a link like "/signup" if needed
  mobileBtn: "Download FREE App",
  featureHighlightSectionVisible: true,
  featuresList: [
    {
      id: 408,
      title: null,
      conclusion:
        "With Contractor+, every asset has a clear chain of custody—so you keep more of what you buy.",
      content: [
        {
          title: "0% APR options up to 24 months available",
          text: "0% APR options up to 24 months available",
        },
        {
          title: "No hard credit check to get pre‑approved",
          text: "No hard credit check to get pre‑approved",
        },
        {
          title: "Applies to residential projects from $500–$25,000",
          text: "Applies to residential projects from $500–$25,000",
        },
        {
          title:
            "Financing callout lives on your estimates & quotes to boost conversions ",
          text: "Financing callout lives on your estimates & quotes to boost conversions ",
        },
      ],
      cardImg: {
        src: "/images/webp/mileage-tracking-system.webp",
        alt: "Track properties",
      },
    },
  ],
};
export const toolformData = {
  placeholder: "Your Email",
  subTitle: "Get started with Contractor+ today.",
  title: "What tool inventory software should have been all along",
};
export const toolBlogData = {
  title: "Asset Management topics in Contractor+ HQ",
  btnText: "Contractor+ HQ",
};
export const mileageManagingData = {
  id: 320,
  title: "Mileage shouldn’t be a guessing game",
  sub_title: null,
  cardsDetail: [
    {
      id: 1671,
      text: (
        <> Reconstructing trips from memory or text threads at payroll time.</>
      ),
      img: "/images/svg/green-tick.svg",
      imgWidth: 66,
      imgHeight: 34,
    },
    {
      id: 1672,
      text: (
        <>Paying for OBD dongles or wired GPS that add fees and headaches.</>
      ),
      img: "/images/svg/green-tick.svg",
      imgWidth: 66,
      imgHeight: 34,
    },
    {
      id: 1673,
      text: (
        <>
          Reports that your bookkeeper has to rebuild in spreadsheets—every
          single month.
        </>
      ),
      img: "/images/svg/green-tick.svg",
      imgWidth: 66,
      imgHeight: 34,
    },
  ],
};
export const toolsFaq = {
  title: "What contractors want to know ",
  subTitle: "Frequently asked questions",
  faq: [
    {
      id: 1,
      question: "Can my crew check tools in and out from their phones?",
      answer:
        "Yes. They just scan the QR label or use Bluetooth detection in the Contractor+ mobile app. It’s fast and foolproof.",
    },
    {
      id: 2,
      question: "Do I have to buy special tags from you?",
      answer:
        "No. You can choose from our Bluetooth Tool Tags (multiple options) or use your own compatible tags and QR labels—your call.",
    },
    {
      id: 3,
      question: "How does Truck Scan work? ",
      answer:
        "Before you leave a site—or when you roll out in the morning—run a Truck Scan to detect tagged tools in range. Anything missing gets flagged instantly.",
    },
    {
      id: 4,
      question: "Can I control who is allowed to assign or edit tool records? ",
      answer:
        "Absolutely. Set role-based permissions so only authorized users can add, assign, transfer, or retire assets.",
    },
    {
      id: 5,
      question: "Can I see where a tool is right now?",
      answer:
        "Yes. The central dashboard shows current assignee (person, job, or truck) and the full time-stamped history, so you always know who had what, when.",
    },
    {
      id: 6,
      question: "Can I bill clients for equipment usage?",
      answer:
        "Yep. Track asset value and usage rates (hour, day, or per-job) and add equipment charges to estimates and invoices in a couple clicks.",
    },
  ],
};
export const neverLookBackToolData = {
  title: "Teams using Contractor+ never look back",
  subTitle: "We help you get ahead, not just get by.",
  cards: [
    {
      id: 1,
      title: null,
      subTitle: "Average reduction in missing tools",
      start: 0,
      end: 90,
      suffix: "%",
      prefix: "~",
      value: null,

      lottieJson: up_arrow_black,
      cardImage: {
        url: null,
      },
    },
    {
      id: 2,
      title: null,
      subTitle: "Admin time saved on tracking & audits",
      start: 0,
      end: 8,
      suffix: "hours/mo",
      denominator: null,
      prefix: null,
      value: null,
      lottieJson: productivity,
      cardImage: {
        url: null,
      },
      icons: <ClockIcon />,
    },
    {
      id: 3,
      title: null,
      subTitle: "Typical savings from recovered/avoided loss",
      start: 0,
      end: 1500,
      suffix: "/yr",
      prefix: "$",
      denominator: null,
      value: null,
      lottieJson: clock,
      cardImage: {
        url: null,
      },
      icons: <UpArrowIcon />,
    },
  ],
};
export const neverLookBackMileageData = {
  title:
    "Teams using our mileage tracking software for contractors never look back",
  subTitle: "We help you get ahead, not just get by.",
  cards: [
    {
      id: 1,
      title: null,
      subTitle: "Saved on mileage admin and payroll prep",
      start: 0,
      end: 8,
      suffix: "hours/mo",
      prefix: "~",
      value: null,

      lottieJson: clock,

      cardImage: {
        url: null,
      },
    },
    {
      id: 2,
      title: null,
      subTitle: "No dongles, installs or wiring",
      start: 0,
      end: 0,
      suffix: "hardware",
      denominator: null,
      prefix: "$",
      value: null,
      lottieJson: productivity,
      cardImage: {
        url: null,
      },
      icons: <ClockIcon />,
    },
    {
      id: 3,
      title: null,
      subTitle: "Per driver—train once and roll",
      start: 0,
      end: 1,
      suffix: "-minute setup",
      prefix: null,
      denominator: null,
      value: null,
      lottieJson: up_arrow_black,
      cardImage: {
        url: null,
      },
      icons: <UpArrowIcon />,
    },
  ],
};
export const tool_comparisonData = {
  id: 1,
  title: "What they call a “premium” feature, we call standard",
  subTitle: "The features they hide behind paywalls come standard here.",
  headerLeft: "Feature",
  headerCenter: "Contractor Plus",
  headerRight: "Others",
  showBackground: null,
  features: [
    {
      featureName: "Built-In Check-In/Out & Transfers ",
      ourProduct: "available",
      competitorsNote: null,
    },
    {
      featureName: "Role-Based Permissions",
      ourProduct: "available",
      competitorsNote: "Limited",
    },

    {
      featureName: "Full Assignment History & Audit Log |",
      ourProduct: "available",
      competitorsNote: null,
    },
    {
      featureName: "QR + Bluetooth Scanning",
      ourProduct: "available",
      competitorsNote: null,
    },
    {
      featureName: "Truck Scan Mode (missing-item check) ",
      ourProduct: "available",
      competitorsNote: null,
    },
    {
      featureName: "Central Asset Dashboard & Search",
      ourProduct: "available",
      competitorsNote: null,
    },
    {
      featureName: "Asset Value Tracking & Usage Billing",
      ourProduct: "available",
      competitorsNote: null,
    },
    {
      featureName: "Use Our Tags or Yours",
      ourProduct: "available",
      competitorsNote: null,
    },
  ],
};
export const mileageActuallyWorkdata = {
  id: 1,
  title:
    "A contract system that automatically writes, tracks, and stores agreements",
  cardsDetail: [
    {
      id: 1,
      title: "Agreement Creation",

      content: [
        {
          title: "Estimate-to-Contract Merge",
          desc: "Automatically generate contracts using data from approved estimates, without any copy & paste.",
        },
        {
          title: "Lawyer-Crafted Templates",
          desc: "Pre-built, legally sound templates tailored for construction and service jobs.",
        },
        {
          title: "Custom Clause Library",
          desc: "Add your own clauses once, then reuse them across all agreements.",
        },
        {
          title: "Smart Field Detection",
          desc: "Auto-fills job info like scope, pricing, dates, and location from your project data.",
        },
      ],

      cardImg: "/images/webp/agree-creation.webp",
    },
    {
      id: 2,
      title: "Signature & Approval",
      content: [
        {
          title: "Built-In E-Signatures",
          desc: "Collect signatures in-person or digitally. No third-party software needed.",
        },
        {
          title: "Audit Trail",
          desc: "Each signed doc includes timestamp, IP address, and device info for protection.",
        },
        {
          title: "Client Review Portal",
          desc: "Clients can review, comment, and sign contracts from any device.",
        },
        {
          title: "Approval Reminder",
          desc: "Automated follow-ups ensure no agreement gets stuck waiting.",
        },
      ],

      cardImg: "/images/webp/signature-approved.webp",
    },
    {
      id: 3,
      title: "Change Management",
      content: [
        {
          title: "Instant Change Orders",
          desc: "Modify job scope on the fly and generate a new agreement in seconds.",
        },
        {
          title: "Editable Scope Change Templates",
          desc: "Pre-configured language makes it easy to spell out what’s changing and what it costs.",
        },
      ],

      cardImg: "/images/webp/change-management.webp",
    },
    {
      id: 4,
      title: "Keep your estimates clean, clear, and easy to follow",
      content: [
        {
          title: "",
          desc: "Organize your quotes with groups that separate labor, materials, and optional add-ons. Line items are easy to edit, reuse, and drag into place. Your grandma could build an estimate.",
        },
      ],

      cardImg: "/images/webp/storage-access.webp",
    },
    {
      id: 5,
      title: "Tap “Start Trip,” tap “End Trip.” Done.",
      content: [
        {
          title: "",
          desc: "A stupidly simple interface anyone can use. Start, drive, arrive. The miles are logged—accurately.",
        },
      ],

      cardImg: "/images/webp/requeere-doc.webp",
    },
  ],
};

export const businessBenefits = [
  "Effortlessly Manage Your Business",
  "Team Collaboration",
  "Simple Scheduling",
  "Estimating & Invoicing",
  "Access from PC, Android and iOS!",
];

export const mileage_comparisonData = {
  id: 1,
  title: "What they call a “premium” feature, we call standard",
  subTitle: "The features they hide behind paywalls come standard here.",
  headerLeft: "Feature",
  headerCenter: "Contractor Plus",
  headerRight: "Others",
  showBackground: null,
  features: [
    {
      featureName: "Tap‑to‑Track (Start/End)",
      ourProduct: "available",
      competitorsNote: "Limited",
    },
    {
      featureName: "Manual Trip Entry & Edits",
      ourProduct: "available",
      competitorsNote: "Limited",
    },

    {
      featureName: "No OBD/Wired Hardware",
      ourProduct: "available",
      competitorsNote: null,
    },
    {
      featureName: "Team Mileage Reports (any range)",
      ourProduct: "available",
      competitorsNote: "Limited",
    },
    {
      featureName: "Decimal Miles for IRS Reimbursement",
      ourProduct: "available",
      competitorsNote: "Limited",
    },
    {
      featureName: "CSV & PDF Export",
      ourProduct: "available",
      competitorsNote: "Limited",
    },
    {
      featureName: "Built‑In Mobile Apps",
      ourProduct: "available",
      competitorsNote: "Limited",
    },
    {
      featureName: "Use Our Tags or Yours",
      ourProduct: "available",
      competitorsNote: "Limited",
    },
  ],
};
export const integrations = [
  {
    id: "1",
    name: "Zapier",
    logo: "/images/svg/zapier.svg",
    categories: ["Productivity", "Payments"],
    description:
      "Experience a new level of efficiency through the collaboration of Contractor+ and Zapier.",
    link: "#",
  },
  {
    id: "2",
    name: "Simply Business",
    logo: "/images/svg/simple-business.svg",
    categories: ["other"],
    description:
      "Discover a new era of business protection and growth. Safeguard your journey, simplify your ambitions.",
    link: "#",
  },
  {
    id: "3",
    name: "Venmo",
    logo: "/images/svg/venmo.svg",
    categories: ["Payments"],
    description:
      "Integrating Venmo's versatile payment solution through Contractor+ is as simple as a few clicks, streamlining your experience.",
    link: "#",
  },
  {
    id: "4",
    name: "CashApp",
    logo: "/images/svg/cash-app.svg",
    categories: ["Payments"],
    description:
      "Contractor+ partners with CashApp for seamless financial management. Users can handle payments and invoices within the app.",
    link: "#",
  },
  {
    id: "5",
    name: "Authorize.net",
    logo: "/images/svg/authorize.svg",
    categories: ["Payments"],
    description:
      "Authorize.net seamlessly integrates with Contractor+ to streamline your payments experience.",
    link: "#",
  },
  {
    id: "6",
    name: "Square",
    logo: "/images/svg/square.svg",
    categories: ["Payments"],
    description:
      "Contractor+ and Square's partnership brings together sophisticated solutions and simple payment processing.",
    link: "#",
  },
  {
    id: "7",
    name: "Gmail",
    logo: "/images/svg/gmail.svg",
    categories: ["Productivity"],
    description:
      "In pursuit of enhancing client communication, Contractor+ has chosen to integrate with Gmail, a widely adopted platform.",
    link: "#",
  },
  {
    id: "8",
    name: "Outlook Calendar",
    logo: "/images/svg/outlook.svg",
    categories: ["Calendar"],
    description:
      "Unlock enhanced collaboration and seamless schedule syncing with Contractor+ and Outlook Calendar.",
    link: "#",
  },
  {
    id: "9",
    name: "iCal",
    logo: "/images/svg/calender.svg",
    categories: ["Calendar"],
    description:
      "Contractor+ and iCal bring a smart way to manage your schedules. With quick and easy integration.",
    link: "#",
  },
  {
    id: "10",
    name: "Office 365 Calendar",
    logo: "/images/svg/office-365.svg",
    categories: ["Calendar"],
    description:
      "Unlock the potential of efficient scheduling with Contractor+ and the Office 365 Calendar.",
    link: "#",
  },
  {
    id: "11",
    name: "Google Calendar",
    logo: "/images/svg/google-calender.svg",
    categories: ["Calendar"],
    description:
      "Contractor+ and Google Calendar integration offer tremendous opportunities for contractors helping them synchronize tasks.",
    link: "#",
  },
  {
    id: "12",
    name: "Quickbooks Online",
    logo: "/images/svg/quickbooks.svg",
    categories: ["Accounting"],
    description:
      "Contractor+ integrates with QuickBooks to simplify your accounting tasks, allowing contractors to focus on growth.",
    link: "#",
  },
  {
    id: "13",
    name: "Thumbtack",
    logo: "/images/svg/thumbtach.svg",
    categories: ["Leads"],
    description:
      "This collaboration empowers home service professionals to efficiently connect with potential clients.",
    link: "#",
  },
  {
    id: "14",
    name: "EarthCam",
    logo: "/images/svg/earthcam.svg",
    categories: ["Productivity"],
    description:
      "Embark on a transformative journey in project management as EarthCam and Contractor+ join hands.",
    link: "#",
  },
  {
    id: "15",
    name: "Wisetack",
    logo: "/images/svg/wisetack.svg",
    categories: ["Payments"],
    description:
      "Stress-free. Thanks to Contractor+ and Wisetack, financing dream services for your clients has never been easier.",
    link: "#",
  },
  {
    id: "16",
    name: "CompanyCam",
    logo: "/images/svg/companycom.svg",
    categories: ["Productivity"],
    description:
      "Say goodbye to chaos—Contractor+ and CompanyCam sync your client info for effortless project photo and document management.",
    link: "#",
  },
];
export const leadGenerationData = {
  title:
    "Sure, you could hire an SEO agency or contractor… if you like playing roulette",

  comaprisons: [
    {
      title: "Local SEO Agency",
      comparisonList: [
        { details: "$1000+ per month with sketchy contracts " },
        {
          details:
            "Manually sending photos, reviews, and updates to your SEO agency",
        },
        {
          details: "Wondering what you’re actually getting for that retainer",
        },
        {
          details:
            "Still being told to “get more reviews” with no tools to do it",
        },
        {
          details: "Getting the same generic posts every other contractor uses",
        },
        { details: "Disconnected from the systems you use daily" },
        {
          details: "Hoping someone remembered to flag that fake 1-star review",
        },
        { details: "Instant invoice creation and onsite payment" },
      ],
    },
    {
      title: "Contractor+ Local",
      comparisonList: [
        {
          details: "$249 per month and you can cancel anytime",
        },
        {
          details:
            "Just upload your photos to Contractor+ Local, we’ll handle the rest",
        },
        {
          details:
            "Get heatmaps and real-time ranking reports you can actually understand",
        },
        {
          details:
            "Automate review requests and replies with your voice and tone",
        },
        {
          details: "Turn 5-star reviews into posts without lifting a finger",
        },
        {
          details:
            "Local SEO is built into the system you use to run your business",
        },
        {
          details: "Auto-flag shady reviews with no extra effort",
        },

        {
          details: "Manually sent invoices and delayed payment",
        },
      ],
    },
  ],
};
export const leadHGenerationFaqData = {
  title: "What contractors want to know ",
  subTitle: "Frequently asked questions",
  faq: [
    {
      id: 1,
      question: "s this really only $249/monthly? ",
      answer:
        "Yes! Contractor+ Local literally has the functionality of 10+ platforms and an agency in one solution. It’s the cost of a bad lead or two you might pay for elsewhere. With a 33:1 return for every dollar spent, it’s like an unfair advantage. ",
    },
    {
      id: 2,
      question: "Do I need to manage the posts, photos, and reviews myself? ",
      answer:
        "No sweat. Just create a change order. More materials, added labor, a client request… it’s all built into the system when it happens. Everything stays tracked, approved, and visible.",
    },
    {
      id: 3,
      question: "What makes this better than hiring a local SEO agency? ",
      answer:
        "The system automatically pulls in any unbilled time, mileage, materials, or expenses tied to the job. You’ll see a running list of uninvoiced items. Add them in one click.  ",
    },
    {
      id: 4,
      question: "Will this help me get more reviews?",
      answer:
        "Absolutely. You can invoice by milestone, percentage, or scope completion. It’s perfect for multi-phase jobs or long-term projects that need progress billing. ",
    },
    {
      id: 5,
      question: "Is this the same thing as reputation management?",
      answer:
        "Yes. For maintenance plans or recurring jobs, you can set up automated billing with a card on file. Invoices get sent and charged without any manual work.",
    },
    {
      id: 6,
      question: "Is there a contract involved?",
      answer:
        "Yes. For maintenance plans or recurring jobs, you can set up automated billing with a card on file. Invoices get sent and charged without any manual work.",
    },
    {
      id: 7,
      question: "How do I start?",
      answer:
        "Yes. For maintenance plans or recurring jobs, you can set up automated billing with a card on file. Invoices get sent and charged without any manual work.",
    },
    {
      id: 8,
      question: "Can I subscribe to this service on the free plan?",
      answer:
        "Yes. For maintenance plans or recurring jobs, you can set up automated billing with a card on file. Invoices get sent and charged without any manual work.",
    },
  ],
};
export const toolEquipmentTracking = {
  title:
    "Turn the full job history into one clean invoice, without manual re-entry.",
  slug: "field-service",
  solutionCards: [
    {
      id: 2,
      title: "Library-Style Checkouts",
      description:
        "Assign tools like library books—check out, transfer, and return with a tap. Self-assign or assign to others (with permission).",
    },

    {
      id: 4,
      title: "Fast Scan Workflows",
      description:
        "Check in/out by scanning a QR label or via Bluetooth presence. No typing. No guesswork.",
    },
    {
      id: 5,
      title: "Role-Based Controls",
      description:
        "Decide exactly who can view, add, edit, assign, transfer, or retire assets.",
    },
    {
      id: 6,
      title: "Full Chain of Custody",
      description:
        "Every assignment, transfer, and return is time and date stamped. You’ll know who had what, when, and where.",
    },
    {
      id: 7,
      title: "Bluetooth Tool Tags",
      description:
        "Use Contractor+ tags (multiple options) or bring your own. Hop in the truck, run a Truck Scan, and instantly see what’s on board—and what’s missing.",
    },
    {
      id: 8,
      title: "Central Dashboard",
      description:
        "See every tool and piece of equipment in real time—by job, person, crew, or truck. Find what you need in a couple clicks.",
    },
    {
      id: 9,
      title: "Job & People Linking",
      description:
        "Tie each asset to a job or team member for instant context.",
    },
    {
      id: 1,
      title: "Asset Value & Billing",
      description:
        "Track purchase price and current value. Add equipment usage to invoices (hourly, daily, or per job) without hunting for numbers.",
    },
    {
      id: 3,
      title: "Bulk Actions",
      description:
        "Bulk-assign, bulk-return, and bulk-retire tools after a shift or phase wrap.",
    },
  ],
};
