import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import SlideUp from "../common/SlideUp.js";
import "./css/classes.scss";

const Classes = () => {
  const [classInfo, changeInfo] = React.useState(null);
  const [currentSelectedClass, changeCurrentClass] = React.useState(null);
  const myRef = React.createRef();

  function createMarkup(markup) {
    return { __html: markup };
  }

  function showClass(classObject) {
    let markup = "<img src='/img/mini-rotunda.png' />";
    markup += "<h4><span>" + classObject.class_name + "</span></h4>";
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
    } catch (err) {}
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
    if (input === "") {
      resetClassStyle();
    } else {
      for (let className in classDictionary) {
        if (
          classDictionary[className].toLowerCase().includes(input.toLowerCase())
        ) {
          document.getElementById(className).style.border = "1px solid #26649d";
          document.getElementById(className).style.boxShadow =
            "0px 1px 3px 0px rgba(0,0,0,0.15)";
        } else {
          document.getElementById(className).style.border = "1px solid #dadada";
          document.getElementById(className).style.boxShadow = "none";
        }
      }
    }
  }

  function clearInput() {
    document.getElementById("search-input").value = "";
    resetClassStyle();
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
    <div className="classes-page">
      <h2 className="header">
        <span>Classes</span>
      </h2>
      <div class="container">
        <section className="classes" id="subsection">
          {classInfo ? (
            <SlideUp
              slideDown={closeSlide}
              content={classInfo}
              contentType="class"
            >
              {classInfo}{" "}
            </SlideUp>
          ) : (
            <div></div>
          )}

          <div className="name-search">
            <input
              id="search-input"
              onChange={searchName}
              placeholder="Find a brother"
            />
            <button onClick={clearInput}>&times;</button>
          </div>

          <div className="classes-list" id="mobile">
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

        <div className="classes-displayer" id="desktop">
          <div
            className="member-names"
            dangerouslySetInnerHTML
            dangerouslySetInnerHTML={createMarkup(classInfo)}
          />
        </div>
      </div>
    </div>
  );
};

export default Classes;
