import { ReactElement } from "react";
import BulletedList from "./BulletedList";
import DateRange from "./DateRange";
import Description from "./Description";
import Details from "./Details";
import Title from "./Title";
import SectionHeader from "./SectionHeader";
import { Fragment } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"


interface EducationProps {
  className: string;
}

interface Education {
  institution: string;
  start: string;
  end: string;
  current: boolean;
  degree: string;
  gpa: string;
  coursework: string[];
}

const education: Education[] = [
  {
    institution: "Northeastern University, Boston",
    start: "Sept 2023",
    end: "May 2025",
    current: false,
    degree: "Master of Science, CS + Information Systems (full stack web, and cloud infrastructure)",
    gpa: "3.9",
    coursework: [
      "Algorithms",
      "Web development",
      "Operating Systems",
      "Linux/UNIX",
      "Application Engineering",
      "Building Virtual Environments",
      "Cryptocurrency and Smart Contract Engineering",
      "Design Patterns",
    ],
  },
  {
    institution: "University of Mumbai, Mumbai",
    start: "Aug 2018",
    end: "May 2022",
    current: false,
    degree:
      "Bachelor of Engineering, Electrical and Communications Engineering",
    gpa: "3.6",
    coursework: [
      "Programming in C",
      "Objected Oriented Design",
      "Databases and Big Data with Hadoop",
      "Computer Networks",
      "Image Processing and Machine Learning",
      "Applied Mathematics",
    ],
  },
];

export default function Education({ className }: EducationProps): ReactElement {
  return (
    <section className={`${className}`}>
      <SectionHeader>education</SectionHeader>
      <div className="grid grid-row-2 sm:grid-cols-6 my-4">
        {education?.map(
          ({ institution, start, end, current, degree, coursework, gpa }, i) => {
            return (
              <Fragment key={i}>
                <DateRange
                  start={start}
                  current={current}
                  end={end}
                  className="mb-1"
                />
                <Details>
                  <Title name={institution} />
                  <p className="text-neutral-400 my-1 text-xs">
                    {degree}, {gpa}
                  </p>
                  <Accordion type="single" collapsible className="text-neutral-400">
                    <AccordionItem value="item-1" className="border-none">
                      <AccordionTrigger>Courses</AccordionTrigger>
                      <AccordionContent>
                        <BulletedList
                          className="mb-8"
                          key={institution.toLowerCase()}
                          array={coursework}
                        />
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </Details>
              </Fragment>
            );
          }
        )}
      </div>
    </section>
  );
}
