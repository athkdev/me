import DateRange from "./DateRange";
import Description from "./Description";
import Details from "./Details";
import BulletedList from "./BulletedList";
import Title from "./Title";
import { Fragment } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import Link from "next/link";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import localFont from "next/font/local";
import SectionHeader from "./SectionHeader";

interface WorkExperienceProps {
  className: string;
}

interface Job {
  title: string;
  start: string;
  end: string;
  current: boolean;
  description: string;
  techStack: string[];
  company: string;
  companyLink: string;
  responsibilities: string[];
}

const jobs: Job[] = [
  {
    title: "graduate ta",
    start: "sept '24",
    end: "may '25",
    current: false,
    description:
      "Currently working as a Graduate Teaching Assistant for CSYE 7270 (Building Virtual Environments) at College of Engineering, Northeastern University.",
    techStack: ["C++", "C#", "Typescript", "React", "n8n", "OpenAI"],
    company: "northeastern university",
    companyLink: "https://www.northeastern.edu/",
    responsibilities: [
      "Conduct code reviews and grade student submissions for C++, C#, WebGL, Linux and graphics video projects, ensuring code quality and alignment with course objectives",
      "Hold weekly office hours to address questions on course fundamentals, supporting student learning and problem-solving skills",
      "Created YouTube tutorials to simplify graphics concepts, programming, and AI concepts, extending learning resources to a wider audience",
      "Design and administer exams via Canvas, streamlining assessments with automated grading and detailed feedback",
    ],
  },
  {
    title: "software engineer 1",
    start: "aug '22",
    end: "may '23",
    current: false,
    description:
      "Worked extensively with Java Spring and ReactJS along with AWS and PostgreSQL to build impactful full stack web products!",
    techStack: [
      "Spring Boot",
      "AWS",
      "ReactJS",
      "Docker",
      "ElasticSearch",
      "PostgreSQL",
    ],
    company: "cognizant",
    companyLink: "https://www.cognizant.com/in/en",
    responsibilities: [
      "Built and maintained an in-house React component library with 28+ reusable and themeable UI elements",
      "Engineered a payments app for internal stakeholders by integrating Stripe using React, Python (Django), Apache and AWS",
      "Developed pixel perfect UI as per wireframes from the UX design team for OneCognizant (company-wide appstore)",
      "Write integration tests with Playwright and React Testing Library to validate end-to-end user workflows",
      "Developed a well documented Python module that simplified application deployment workflow that automates containerization with Docker and Terraform",
      "Refactored a monolithic app into modular Python microservices, enabling service-specific deployments and minimizing downtime during updates",
    ],
  },
  {
    title: "junior software engineer",
    start: "apr '21",
    end: "feb '22",
    current: false,
    description:
      "Built e-commerce products for Shopify, loyalty rewards apps for local businesses in Dublin, Ireland.",
    techStack: ["NextJS", "ReactJS", "Express", "GraphQL", "TS", "Redis"],
    company: "raftlabs",
    companyLink: "https://www.raftlabs.co",
    responsibilities: [
      "Built and maintained an in-house React component library with 28+ reusable and themeable UI elements",
      "Engineered a payments app for internal stakeholders by integrating Stripe using React, Python (Django), Apache and AWS",
      "Developed pixel perfect UI as per wireframes from the UX design team for OneCognizant (company-wide appstore)",
      "Write integration tests with Playwright and React Testing Library to validate end-to-end user workflows",
      "Developed a well documented Python module that simplified application deployment workflow that automates containerization with Docker and Terraform",
      "Refactored a monolithic app into modular Python microservices, enabling service-specific deployments and minimizing downtime during updates",
    ],
  },
];

export default function WorkExperience({ className }: WorkExperienceProps) {
  return (
    <section className={`${className}`}>
      <SectionHeader>work experience</SectionHeader>

      <div className="grid grid-row-2 sm:grid-cols-6 my-4">
        {jobs.map(
          (
            {
              start,
              end,
              title,
              current,
              description,
              techStack,
              company,
              companyLink,
              responsibilities,
            },
            i
          ) => {
            return (
              <Fragment key={i}>
                <DateRange
                  start={start}
                  current={current}
                  end={end}
                  className="mb-1"
                />
                <Details>
                  <span>
                    <Title
                      name={
                        <span>
                          {title}
                          <span className="text-neutral-400">
                            {" "}
                            @{" "}
                            <Link
                              href={companyLink}
                              className="underline underline-offset-4"
                              target="_blank"
                            >
                              {company}
                            </Link>
                          </span>
                        </span>
                      }
                    />
                  </span>
                  <Description>
                    <Technologies title={title} techStack={techStack} />
                    <Responsibilites
                      title={title}
                      responsibilities={responsibilities}
                    />
                  </Description>
                </Details>
              </Fragment>
            );
          }
        )}
      </div>
    </section>
  );
}

interface TechnologiesProps {
  title: string;
  techStack: string[];
  className?: string;
}

function Technologies({ title, techStack, className }: TechnologiesProps) {
  return (
    <Accordion type="single" collapsible className="text-neutral-400">
      <AccordionItem value="item-1" className="border-none">
        <AccordionTrigger className="text-xs">
          Technologies I worked with
        </AccordionTrigger>
        <AccordionContent>
          <BulletedList
            className="mt-2"
            key={title.toLowerCase()}
            array={techStack}
          />
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}

interface ResponsibilitesProps {
  title: string;
  responsibilities: string[];
  className?: string;
}

function Responsibilites({
  title,
  responsibilities,
  className,
}: ResponsibilitesProps) {
  return (
    <Accordion type="single" collapsible className="text-neutral-400">
      <AccordionItem value="item-1" className="border-none">
        <AccordionTrigger className="text-xs">
          Responsibilities
        </AccordionTrigger>
        <AccordionContent>
          <BulletedList
            className="mt-2"
            key={title.toLowerCase()}
            array={responsibilities}
          />
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
