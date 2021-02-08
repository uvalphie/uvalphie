import React from "react";
import PropTypes from "prop-types";
// import ReactMarkdown from 'react-markdown'
import Markdown from "react-markdown";

const NewsPagePreview = ({ entry, widgetFor }) => {
  // const data = entry.getIn(["body"]).toJS();
  const article = widgetFor("body");
  const post = article.props.value;
  console.log(article.props);

  return (
    <div>
      {/* <div
        className="article-content"
        dangerouslySetInnerHTML={{ __html: `<div> ${post} </div>` }}
      ></div> */}
      <Markdown source={post} />
    </div>
  );

  // if (data) {
  //   return <div>{{ data }}</div>;
  // } else {
  //   return <div>Loading...</div>;
  // }
};

// NewsPreview.propTypes = {
//   entry: PropTypes.shape({
//     getIn: PropTypes.func,
//   }),
//   getAsset: PropTypes.func,
// };
NewsPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
};
export default NewsPagePreview;
