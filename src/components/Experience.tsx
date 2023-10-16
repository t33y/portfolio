import SectionHeading from "./SectionHeading";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "../lib/data";
import React from "react";
import type { Theme } from "../App";

export default function Experience({ theme }: { theme: Theme }) {
  return (
    <div id="experience" className="scroll-mt-28 mb-28 sm:mb-40 max-w-[60rem]">
      <SectionHeading>My Experience</SectionHeading>

      <VerticalTimeline
        lineColor={theme === "Light" ? "#e5e7ee" : "rgba(255,255,255, 0.2)"}
        layout="1-column-right"
      >
        {experiencesData.map((item, idx) => {
          return (
            <React.Fragment key={idx}>
              <VerticalTimelineElement
                contentStyle={{
                  background:
                    theme === "Light" ? "#f3f4f6" : "rgba(0, 0, 0, 0.2)",
                  boxShadow: "none",
                  border: "1px solid rgba(0, 0, 0, 0.05)",
                  textAlign: "left",
                  padding: "1.3rem 2rem",
                  borderTopLeftRadius: "2rem",
                  borderBlockEndColor:
                    theme === "Light" ? "gray" : "whitesmoke",
                  borderInlineEndColor: "red",
                }}
                contentArrowStyle={{
                  borderRight:
                    theme === "Light"
                      ? "0.4rem solid #9ca3af"
                      : "0.4rem solid rgba(255,255,255, 0.5)",
                  borderLeft:
                    theme === "Light"
                      ? "0.4rem solid #9ca3af"
                      : "0.4rem solid rgba(255,255,255, 0.5)",
                }}
                date={item.date}
                icon={item.icon}
                iconStyle={{
                  background:
                    theme === "Light" ? "white" : "rgba(255, 255, 255, 0.15) ",
                  fontSize: "1.5rem",
                }}
              >
                <h3 className="font-semibold capitalize">{item.title}</h3>
                <p className="font-normal !mt-0">{item.company}</p>
                <p className="!mt-1 !font-normal text-gray-700 dark:text-white/60 ">
                  {item.description}
                </p>
              </VerticalTimelineElement>
            </React.Fragment>
          );
        })}
      </VerticalTimeline>
    </div>
  );
}
