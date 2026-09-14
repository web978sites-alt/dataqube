// Single source of truth for the 5 services: cards on the homepage/overview,
// the individual service pages, the comparison table, and Service/ItemList JSON-LD
// all read from this list so content never drifts between surfaces.
module.exports = [
  {
    slug: "data-management",
    name: "Data Management",
    icon: "database",
    serviceType: "Data management consulting",
    shortDescription:
      "Collecting, storing, and governing your data so it's accurate, secure, and ready to use.",
    heroAnswer:
      "Data management is the process of collecting, storing, organizing, and governing an organization's data so it stays accurate, secure, and accessible. DataQube Analytics builds data management systems — integration, warehousing, quality controls, and governance — for organizations across Canada.",
    intro:
      "Most analytics projects fail before they start, because the underlying data is scattered, inconsistent, or untrusted. DataQube Analytics designs the data foundation first: integrating sources, cleaning and validating records, and putting governance controls in place so every team is working from the same accurate picture.",
    features: [
      "Data integration and warehousing across disconnected systems and formats",
      "Data migration with quality checks that catch inconsistencies before they spread",
      "Governance practices, encryption, and access controls for sensitive data",
      "Support for structured and unstructured data from multiple sources",
      "Ongoing quality assurance to keep records accurate over time",
      "Scalable architecture designed to grow with your organization",
    ],
    relatedSlugs: ["business-intelligence", "data-consulting"],
    faqs: [
      {
        q: "What does a data management service actually include?",
        a: "It covers data integration (bringing data from multiple systems into one place), data warehousing, quality assurance to fix inconsistent or duplicate records, and governance controls like encryption and access management — the groundwork that every downstream analytics or reporting project depends on.",
      },
      {
        q: "How much does data management consulting cost?",
        a: "Cost depends on the number of data sources, current data quality, and compliance requirements. DataQube Analytics scopes each engagement individually after a short discovery conversation rather than quoting a flat rate — contact us for an estimate specific to your systems.",
      },
      {
        q: "Do you work with data from multiple systems and formats?",
        a: "Yes. Data management engagements typically start by integrating data from several source systems and formats into a single, consistent warehouse or data layer.",
      },
    ],
  },
  {
    slug: "advanced-analytics",
    name: "Advanced Analytics",
    icon: "trendUp",
    serviceType: "Advanced analytics consulting",
    shortDescription:
      "Statistical modeling, machine learning, and forecasting that turn data into forward-looking insight.",
    heroAnswer:
      "Advanced analytics is the use of statistical models, machine learning, and predictive techniques to turn raw business data into forward-looking insight. DataQube Analytics provides advanced analytics consulting for finance, healthcare, retail, and manufacturing organizations across Canada.",
    intro:
      "Advanced analytics goes beyond descriptive reporting to answer what's likely to happen next and why. DataQube Analytics builds predictive models and analytical pipelines that identify patterns, forecast outcomes, and quantify the impact of decisions before they're made.",
    features: [
      "Pattern and trend identification across historical data",
      "Predictive modeling and forecasting for demand, risk, and churn",
      "Process optimization analysis to reduce operating costs",
      "Customer behavior and preference analysis",
      "Exploratory data analysis to surface opportunities not visible in standard reports",
      "Collaborative model development with your team, not a black box handed over at the end",
    ],
    relatedSlugs: ["data-visualization", "business-intelligence"],
    faqs: [
      {
        q: "What is advanced analytics used for?",
        a: "It's used to forecast future outcomes (demand, risk, churn), identify patterns humans would miss in large datasets, and quantify the likely impact of a business decision before it's made — typically through statistical models or machine learning.",
      },
      {
        q: "Do we need a data science team to use advanced analytics?",
        a: "No. DataQube Analytics's advanced analytics engagements are designed to hand off usable models and clear documentation to teams without an in-house data science function, with training included.",
      },
      {
        q: "How is advanced analytics different from business intelligence?",
        a: "Business intelligence reports on what already happened using dashboards and KPIs; advanced analytics uses statistical and machine learning models to predict what's likely to happen next. Many organizations use both together.",
      },
    ],
  },
  {
    slug: "business-intelligence",
    name: "Business Intelligence",
    icon: "barChart",
    serviceType: "Business intelligence consulting",
    shortDescription:
      "Real-time dashboards and KPI reporting that turn data into day-to-day decision-making.",
    heroAnswer:
      "Business intelligence (BI) is the practice of turning organizational data into dashboards, reports, and KPIs that support day-to-day decision-making. DataQube Analytics designs and implements BI systems that integrate with your existing tools and infrastructure.",
    intro:
      "BI is the layer your teams actually look at every day — dashboards that answer specific operational questions instead of static spreadsheets. DataQube Analytics builds BI systems that connect to your existing data sources and surface the metrics that matter to each team.",
    features: [
      "Real-time dashboards built around the KPIs each team actually tracks",
      "Interactive visualizations for exploring data without writing queries",
      "Integration with existing tools and infrastructure rather than a rip-and-replace",
      "Scalable reporting that grows as new data sources and teams come online",
      "Role-based views so each department sees what's relevant to them",
      "Support for building a data-driven reporting culture across the organization",
    ],
    relatedSlugs: ["data-visualization", "advanced-analytics"],
    faqs: [
      {
        q: "What is business intelligence consulting?",
        a: "It's the work of designing, building, and integrating dashboards and reporting systems that turn an organization's raw data into the KPIs and visualizations teams use to make day-to-day decisions.",
      },
      {
        q: "How much does business intelligence consulting cost?",
        a: "Pricing depends on the number of dashboards, data sources to connect, and whether new infrastructure is needed. DataQube Analytics provides a scoped estimate after understanding your current reporting setup — there's no fixed public price because the work varies significantly by client.",
      },
      {
        q: "Can BI dashboards integrate with the tools we already use?",
        a: "Yes. BI engagements are built to connect to your existing systems and infrastructure wherever possible, rather than requiring you to replace your current tools.",
      },
    ],
  },
  {
    slug: "data-visualization",
    name: "Data Visualization",
    icon: "compass",
    serviceType: "Data visualization consulting",
    shortDescription:
      "Interactive, audience-tailored graphics that make complex data easy to understand at a glance.",
    heroAnswer:
      "Data visualization is the practice of presenting information visually — through charts, dashboards, and interactive graphics — so complex datasets are easy to understand at a glance. DataQube Analytics designs visualizations tailored to the audience and decision each one supports.",
    intro:
      "A correct chart that no one understands is a failed chart. DataQube Analytics designs visualizations around the specific question an audience needs answered, whether that's an executive dashboard, a customer-facing report, or an internal analytics tool.",
    features: [
      "Interactive, explorable graphics rather than static exports",
      "Visualizations tailored to the specific audience — executives, analysts, or customers",
      "Simplification of complex, multi-dimensional datasets into clear visuals",
      "Predictive and trend-based visual elements alongside historical data",
      "Support for cross-functional teams collaborating around a shared view of the data",
      "Both static (reports, print) and dynamic (web, dashboard) output formats",
    ],
    relatedSlugs: ["business-intelligence", "advanced-analytics"],
    faqs: [
      {
        q: "What does a data visualization service include?",
        a: "It includes designing charts, dashboards, and interactive graphics tailored to a specific audience and decision, simplifying complex datasets, and building both static (report/print) and dynamic (web/dashboard) formats.",
      },
      {
        q: "Who is data visualization for?",
        a: "Any team that needs to communicate data clearly — executives reviewing performance, analysts exploring a dataset, or customers viewing a report. DataQube Analytics designs each visualization around who will actually be reading it.",
      },
      {
        q: "Is data visualization different from business intelligence dashboards?",
        a: "They overlap. Data visualization focuses on how information is presented and understood; business intelligence focuses on the reporting infrastructure and KPIs behind it. A BI dashboard is one common output of good data visualization work.",
      },
    ],
  },
  {
    slug: "data-consulting",
    name: "Data Consulting",
    icon: "shield",
    serviceType: "Data strategy consulting",
    shortDescription:
      "Strategic guidance on data governance, roadmaps, and building a data-driven culture.",
    heroAnswer:
      "Data consulting is strategic guidance that helps an organization plan its data governance, infrastructure, and long-term data roadmap. DataQube Analytics provides data consulting to organizations that need an outside perspective before committing to a specific tool or platform.",
    intro:
      "Sometimes the highest-value work is deciding what to build before anyone builds it. DataQube Analytics's data consulting engagements help leadership teams set a data strategy, choose a governance framework, and plan a roadmap that will still make sense in three years — not just the next quarter.",
    features: [
      "Custom data strategy development aligned to business goals",
      "Data governance framework design and implementation",
      "Guidance on data accuracy, privacy, and regulatory compliance",
      "Infrastructure and tooling recommendations based on your existing systems",
      "Future-proofed data roadmaps that account for growth",
      "Team training and knowledge transfer, not just a slide deck",
    ],
    relatedSlugs: ["data-management", "advanced-analytics"],
    faqs: [
      {
        q: "What is data consulting?",
        a: "It's strategic advisory work — helping an organization decide on its data governance framework, infrastructure direction, and long-term roadmap — rather than hands-on implementation of a specific system.",
      },
      {
        q: "When should a company hire a data consultant instead of a data management team?",
        a: "Data consulting fits best before a major decision: choosing a platform, restructuring governance, or setting a multi-year data strategy. Data management is the hands-on implementation once that direction is set — many clients use both in sequence.",
      },
      {
        q: "Do you help with data privacy and compliance planning?",
        a: "Yes. Data consulting engagements typically include guidance on data accuracy, privacy safeguards, and alignment with relevant industry regulations as part of the overall governance framework.",
      },
    ],
  },
];
