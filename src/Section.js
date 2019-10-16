import React from 'react';
import './Section.css';

function Section(props) {
  const { color, children } = props;
  const style = {
    backgroundColor: color || '#282c34',
  };

  return (
    <section style={style} className="Section-container">
      {children}
    </section>
  );
}

export default Section;
