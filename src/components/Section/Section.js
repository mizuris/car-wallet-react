import React from "react";

export default function Section(props) {
  return (
    <div className={`bg-${props.background} section-fluid`}>
      <section className="section-container">
          {props.children}
      </section>
    </div>
  );
}
