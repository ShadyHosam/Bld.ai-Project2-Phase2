import { React, useState } from "react";
import "../../Styles/Accordion/Accordion.css";
import AccordionItem from "./AccordionItem.js";
function Accordion({ obj_data }) {
  const [showMore, setShowMore] = useState(false);
  const numberOfItems = showMore
    ? obj_data.curriculum_context.data.sections.length
    : Math.min(5, obj_data.curriculum_context.data.sections.length);
  const onShowMore = () => {
    setShowMore(!showMore);
    console.log("clicked");
  };
  return (
    <>
      <div className="accord-container">
        <div class="accordion accordion-flush" id="accordionFlushExample">
          {obj_data.curriculum_context.data.sections
            .slice(0, numberOfItems)
            .map((section, index) => {
              return <AccordionItem key={index} section={section} id={index} />;
            })}
        </div>
      </div>
      <button className="showMore" onClick={onShowMore}>
        Show {showMore ? "less" : "more"}
      </button>
    </>
  );
}

export default Accordion;
