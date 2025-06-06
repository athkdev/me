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
} from "@/components/ui/accordion";
import Link from "next/link";

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
  city: string;
}

const education: Education[] = [
  {
    institution: "northeastern university",
    start: "sept '23",
    end: "may '25",
    current: false,
    degree:
      "master of science, cs + information systems (full stack web, and cloud infrastructure)",
    gpa: "3.9",
    city: "boston",
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
    institution: "university of mumbai",
    start: "aug '18",
    end: "may '22",
    current: false,
    degree:
      "bachelor of engineering, electrical and communications engineering",
    gpa: "3.6",
    city: "mumbai",
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
          (
            { institution, start, end, current, degree, coursework, gpa, city },
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
                          {institution}
                          <span className="text-neutral-400">, {city}</span>
                        </span>
                      }
                    />
                  </span>
                  <p className="text-neutral-400 my-1 text-xs">
                    {degree}, {gpa}
                  </p>
                  <Accordion
                    type="single"
                    collapsible
                    className="text-neutral-400"
                  >
                    <AccordionItem value="item-1" className="border-none">
                      <AccordionTrigger className="text-xs">
                        Courses
                      </AccordionTrigger>
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
