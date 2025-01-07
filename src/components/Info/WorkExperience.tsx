import DateRange from "./DateRange";
import Description from "./Description";
import Details from "./Details";
import BulletedList from "./BulletedList";
import Title from "./Title";
import { Fragment } from "react";

import { Link } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import localFont from 'next/font/local';
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
}

const jobs: Job[] = [
  {
    title: "Graduate Teaching Assistant",
    start: "August 2022",
    end: "May 2023",
    current: true,
    description:
      "Currently working as a Graduate Teaching Assistant for CSYE 7270 (Building Virtual Environments) at College of Engineering, Northeastern University.",
    techStack: ["C++", "C#", "Voiceflow AI"],
    company: "Northeastern University",
    companyLink: "https://www.northeastern.edu/",
  },
  {
    title: "Software Engineer 1",
    start: "August 2022",
    end: "May 2023",
    current: false,
    description:
      "Worked extensively with Java Spring and ReactJS along with AWS and PostgreSQL to build impactful full stack web products!",
    techStack: ["Spring Boot", "AWS", "ReactJS", "Docker", "ElasticSearch", "PostgreSQL"],
    company: "Cognizant Technology Solutions",
    companyLink: "https://www.cognizant.com/in/en",
  },
  {
    title: "Junior Software Engineer",
    start: "April 2021",
    end: "Feb 2022",
    current: false,
    description:
      "Built e-commerce products for Shopify, loyalty rewards apps for local businesses in Dublin, Ireland.",
    techStack: ["NextJS", "ReactJS", "Express", "GraphQL", "TS", "Redis"],
    company: "RaftLabs Co.",
    companyLink: "https://www.raftlabs.co",
  },
];

export default function WorkExperience({ className }: WorkExperienceProps) {
  return (
    <section className={`${className}`}>
      <SectionHeader>work experience</SectionHeader>

      <div className="grid grid-row-2 sm:grid-cols-6 my-4">
        {jobs.map(
          ({
            start,
            end,
            title,
            current,
            description,
            techStack,
            company,
            companyLink,
          }, i) => {
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
                    <Title name={title} />
                    <Link className="text-xs" href={companyLink} isExternal>
                      {company} <ExternalLinkIcon mx="2px" />
                    </Link>
                  </span>
                  <Description>
                    <p className="text-neutral-400 mt-2">{description}</p>
                    <BulletedList
                      className="mt-2"
                      key={title.toLowerCase()}
                      array={techStack}
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
