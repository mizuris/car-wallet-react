import React from "react";

export default function Section(props) {
  return (
    <div className={`container-fluid bg-${props.background}`}>
      <section className="section-container">
          {props.children}
      </section>
    </div>
  );
}
