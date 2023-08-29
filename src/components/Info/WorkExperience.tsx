import DateRange from "./DateRange";
import Description from "./Description";
import Details from "./Details";
import BulletedList from "./BulletedList";
import Title from "./Title";

import { Link } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";

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
    title: "Programmer Analyst",
    start: "July 2022",
    end: "July 2023",
    current: false,
    description:
      "Used Java Spring and Angular along with AWS and Oracle DB to build full stack web products!",
    techStack: ["Spring Boot", "AWS", "Angular", "Docker"],
    company: "Cognizant Technology Solutions",
    companyLink: "https://www.cognizant.com/in/en",
  },
  {
    title: "Software Engineer Intern",
    start: "April 2021",
    end: "Feb 2022",
    current: false,
    description:
      "Built e-commerce products for Shopify, loyalty rewards apps for local businesses in Dublin, Ireland.",
    techStack: ["Nextjs", "React", "Express", "GraphQL", "TS"],
    company: "RaftLabs Co.",
    companyLink: "https://www.raftlabs.co",
  },
];

export default function WorkExperience({ className }: WorkExperienceProps) {
  return (
    <div className={`${className}`}>
      <p className="mb-2">Work experience</p>
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
          }) => {
            return (
              <>
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
              </>
            );
          }
        )}
      </div>
    </div>
  );
}
