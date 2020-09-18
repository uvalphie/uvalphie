import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import "./css/classes.scss";

const Classes = () => {
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

  function showClassMembers(members) {
    console.log("MEMBERS ARE: ", members);
  };

  const classes = queryResults.markdownRemark.frontmatter.class;
  console.log(classes);
  return (
    <div>
      <div className="classes">
        {classes.map((classObject, index) => (
          <button className="class" onClick={() => showClassMembers(classObject.member)} key={index}>{classObject.class_name}</button>
        ))}
      </div>
    </div>
  );
};

export default Classes;
