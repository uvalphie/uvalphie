import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import SlideUp from "../SlideUp.js";
import "./css/classes.scss";
import "./css/common.scss";

const Classes = () => {
  const [classInfo, changeInfo] = React.useState(null);

  function showClassMembers(members) {
    changeInfo("test");
    console.log("MEMBERS ARE: ", classInfo);
  }

  function closeSlide() {
    changeInfo(null);
  }

  const queryResults = useStaticQuery(
    graphql`
      query {
        markdownRemark(fileAbsolutePath: { regex: "/brothers/classes.md/" }) {
          frontmatter {
            class {
              class_name
              member {
                member
              }
            }
          }
        }
      }
    `
  );

  const classes = queryResults.markdownRemark.frontmatter.class;
  console.log(classes);
  return (
    <section class="classes" id="subsection">
      {classInfo ? (
        <SlideUp slideDown={closeSlide} information={classInfo}>{classInfo} </SlideUp>
      ) : (
        <div></div>
      )}
      <h2>Classes</h2>
      <div className="classes-list">
        {classes.map((classObject, index) => (
          <button
            className="class"
            onClick={() => showClassMembers(classObject.member)}
            key={index}
          >
            {classObject.class_name}
          </button>
        ))}
      </div>
    </section>
  );
};

export default Classes;
