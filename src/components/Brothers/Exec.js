import React from "react";
import "./css/common.scss";
import { graphql, useStaticQuery } from 'gatsby'

const Exec = () => {
  // const { site } = useStaticQuery(
  //   graphql`
  //   `
  // )
  return (
    <section class="exec-board" id="subsection">
      <h2>Executive Board</h2>
      <div class="image">
        <div class="mini-decorator" id="1"></div>
        <div class="mini-decorator" id="2"></div>
        <div class="mini-decorator" id="3"></div>
        <div class="person">
        </div>
        <div class="background">
        </div>
      </div>
    </section>
  )
}

export default Exec