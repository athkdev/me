import DateRange from "./DateRange";
import Description from "./Description";
import JobDetails from "./JobDetails";
import TechStack from "./TechStack";
import Title from "./Title";

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
}

const jobs: Job[] = [
  {
    title: "Programmer Analyst",
    start: "July 2022",
    end: "",
    current: true,
    description: "Building web e2e products!",
    techStack: ["Spring Boot", "AWS", "Angular"],
  },
  {
    title: "Software Engineer Intern",
    start: "April 2021",
    end: "Feb 2022",
    current: false,
    description:
      "Built e-commerce products for Shopify, loyalty rewards apps for local businesses in Dublin, Ireland.",
    techStack: ["Nextjs", "React", "Express", "GraphQL", "TS"],
  },
];

export default function WorkExperience({ className }: WorkExperienceProps) {
  return (
    <div className={`${className}`}>
      <p className="mb-2">Work experience</p>
      <div className="grid grid-row-2 sm:grid-cols-6 my-4">
        {jobs.map(({ start, end, title, current, description, techStack }) => {
          return (
            <>
              <DateRange
                start={start}
                current={current}
                end={end}
                className="mb-1"
              />
              <JobDetails>
                <Title name={title} className="mb-1" />
                <Description>
                  <p className="text-neutral-400">{description}</p>
                  <TechStack array={techStack} />
                </Description>
              </JobDetails>
            </>
          );
        })}
      </div>
    </div>
  );
}
