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
      // console.log(err);
    }
    // Style the new selected button
    document.getElementById(classObject.class_name).className =
      "class selected";
  }

  function closeSlide() {
    changeInfo(null);
    document.getElementById(currentSelectedClass).className = "class";
  }

  function resetClassStyle() {
    let allClasses = document.getElementsByClassName("class");
    for (let index in allClasses) {
      try {
        allClasses[index].style.border = "1px solid #dadada";
        allClasses[index].style.boxShadow = "none";
      } catch (err) {}
    }
  }

  function searchName(e) {
    let input = e.target.value;
    console.log(input);
    if (input === "") {
      resetClassStyle();
    } else {
      for (let className in classDictionary) {
        // console.log(classDictionary[className]);
        if (classDictionary[className].toLowerCase().includes(input)) {
          document.getElementById(className).style.border = "1px solid black";
          document.getElementById(className).style.boxShadow = "0px 1px 3px 0px rgba(0,0,0,0.21)";
        } else {
          document.getElementById(className).style.border = "1px solid #dadada";
          document.getElementById(className).style.boxShadow = "none";
        }
      }
    }
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
  let classDictionary = {};

  // Used for search-indexing
  for (let index in classes) {
    let className = classes[index].class_name;
    let classMembers = classes[index].member;
    let allClassMemberNames = "";
    for (let index in classMembers) {
      allClassMemberNames += classMembers[index].member;
    }
    classDictionary[className] = allClassMemberNames;
  }

  return (
    <section className="classes" id="subsection">
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
      <input className="name-search" onChange={searchName} />
    </section>
  );
};

export default Classes;
