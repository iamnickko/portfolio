import EmployerCard from "./UI/EmployerCard";
import SectionWrapper from "../UI/SectionWrapper";
import SectionTitle from "../UI/SectionH2";

export default function Experience() {
  return (
    <SectionWrapper className color="bg-blue">
      <SectionTitle className="text-green">Previous Employment</SectionTitle>
      <EmployerCard
        start="August 2022"
        end="Present"
        role="Technical Upskilling"
        company=""
        companySummary="Committed time to transform my skillset"
        summary="Transformed my skillset through self-study in preparation for a new role in software development with a focus on JavaScript. Initial programming concepts were learnt in Python before focussing on React.js for front-end development and Node.js for back-end development. Other technologies used include Next.js, Express.js, MongoDB, and Tailwind CSS."
      />
      <EmployerCard
        start="June 2021"
        end="August 2022"
        role="Thru-Hike & Travel"
        company=""
        companySummary="A career break to explore the wilderness."
        summary="Undertook an adventurous journey across New Zealand's length, hiking 2,000km of Te Araroa 
        trail followed by travel in a campervan prior to returning to the U.K."
      />
      <EmployerCard
        start="September 2020"
        end="June 2021"
        role="E-Commerce Manager"
        company="Gladstone Vineyard (The Flying Winemaker Group)"
        companySummary="A boutique winery producing award winning wines."
        summary="Secondment to meet the team and oversee a digital transformation. Implemented a new e-commerce platform and CRM to sync with winery operations, inventory, and logistics."
      />
      <EmployerCard
        start="January 2017"
        end="September 2020"
        role="Group E-Commerce & Digital Marketing Manager"
        company="The Flying Winemaker Group"
        companySummary="An educational wine brand specialising in online retail and events."
        summary="Developed and executed a digital strategy leveraging HubSpot tools to increase revenue by 159% in Hong Kong (2019) and 340% in Australia (H1 2020)"
        role2="E-Commerce Manager"
        summary2="Launched the new company website and online shop alongside the Business Development Manager. Grew the online offerings to 800 wines by onboarding local suppliers onto the program."
      />
      <EmployerCard
        start="June 2014"
        end="January 2017"
        company="The Flying Winemaker Group"
        companySummary="An educational wine brand specialising in online retail and events."
        role="Operations Manager"
        role2="Operations Executive"
      />
    </SectionWrapper>
  );
}
