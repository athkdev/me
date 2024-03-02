import { ReactElement } from "react";
import BulletedList from "./BulletedList";
import DateRange from "./DateRange";
import Description from "./Description";
import Details from "./Details";
import Title from "./Title";

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
    institution: "Northeastern University",
    start: "September 2023",
    end: "",
    current: true,
    degree: "Master of Science in Information Systems",
    gpa: "3.9",
    coursework: [
      "Application Engineering and Development",
      "Web design and UX Engineering",
      "Building Virtual Environments",
      "Cryptocurrency and Smart Contract Engineering"
    ],
  },
  {
    institution: "University of Mumbai",
    start: "Aug 2018",
    end: "May 2022",
    current: false,
    degree: "Bachelor of Engineering, Electronics and Telecommunications",
    gpa: "3.6",
    coursework: ["OOP", "DBMS", "Computer Networks", "Image Processing"],
  },
];

export default function Education({ className }: EducationProps): ReactElement {
  return (
    <div className={`${className}`}>
      <p className="mb-2">Education</p>
      <div className="grid grid-row-2 sm:grid-cols-6 my-4">
        {education?.map(
          ({ institution, start, end, current, degree, coursework, gpa }) => {
            return (
              <>
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
              </>
            );
          }
        )}
      </div>
    </div>
  );
}
