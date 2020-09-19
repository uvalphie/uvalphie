import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import SlideUp from "../SlideUp.js";
import "./css/classes.scss";
import "./css/common.scss";

const Classes = () => {
  const [classInfo, changeInfo] = React.useState(null);
  const [currentSelectedClass, changeCurrentClass] = React.useState(null);
  const myRef = React.createRef();

  function showClass(classObject) {
    let markup = "<h4>" + classObject.class_name + "</h4>";
    markup += "<ul>";
    for (let index in classObject.member) {
      markup += "<li>" + classObject.member[index].member + "</li>";
    }
    markup += "</ul>";
    changeInfo(markup);
    changeCurrentClass(classObject.class_name);

    // Revert previous selected class stylings
    try {
      document.getElementById(currentSelectedClass).className = "class";
    } catch (err) {
      console.log(err);
    }
    // Style the new selected button
    document.getElementById(classObject.class_name).className =
      "class selected";
  }

  function closeSlide() {
    changeInfo(null);
    document.getElementById(currentSelectedClass).className = "class";
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
        <SlideUp slideDown={closeSlide} information={classInfo}>
          {classInfo}{" "}
        </SlideUp>
      ) : (
        <div></div>
      )}
      <h2>Classes</h2>
      <div className="classes-list">
        {classes.map((classObject, index) => (
          <button
            className="class"
            id={classObject.class_name}
            ref={myRef}
            onClick={() => showClass(classObject)}
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
