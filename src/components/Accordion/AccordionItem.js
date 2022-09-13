import React from "react";
function AccordionItem({ section, id }) {
  return (
    <div class="accordion-item">
      <h2 class="accordion-header" id={`${id}`}>
        <button
          class="accordion-button collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target={`#flush-collapse${id}`}
          aria-expanded="false"
          aria-controls={`flush-collapse${id}`}
        >
          <div className="try">
            <p className="try1">{section.title}</p>
            <p className="try2">
              {section.lecture_count} Lectures &#8226;{" "}
              {Math.ceil(section.content_length / 60)}min
            </p>
          </div>
        </button>
      </h2>
      <div
        id={`flush-collapse${id}`}
        class="accordion-collapse collapse"
        aria-labelledby={`${id}`}
        data-bs-parent="#accordionFlushExample"
      >
        <div class="accordion-body">
          <ul className="fa-ul">
            {section.items.map((item, index) => (
              <li key={index}>
                <i class="fa-li fa fa-check"></i>
                {item.title}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default AccordionItem;
