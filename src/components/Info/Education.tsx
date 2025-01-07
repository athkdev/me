import { ReactElement } from "react";
import BulletedList from "./BulletedList";
import DateRange from "./DateRange";
import Description from "./Description";
import Details from "./Details";
import Title from "./Title";
import SectionHeader from "./SectionHeader";
import { Fragment } from "react";


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
    start: "September 2023",
    end: "",
    current: true,
    degree: "Master of Science, Computer Software Engineering",
    gpa: "3.9",
    coursework: [
      "Application Engineering and Development",
      "Web design and UX Engineering",
      "Building Virtual Environments",
      "Cryptocurrency and Smart Contract Engineering",
      "Algorithms",
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
                  <Title name={institution} className="" />
                  <p className="text-neutral-400 my-1 text-xs">
                    {degree}, {gpa}
                  </p>
                  <BulletedList
                    className="mb-8"
                    key={institution.toLowerCase()}
                    array={coursework}
                  />
                </Details>
              </Fragment>
            );
          }
        )}
      </div>
    </section>
  );
}
