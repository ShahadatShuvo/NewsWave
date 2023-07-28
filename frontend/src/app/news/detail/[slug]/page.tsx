import React from "react";

function SingleNews(props: any) {
  return (
    <div>
      <h1>Single News</h1>
      <p>Slug: {props.slug}</p>
    </div>
  );
}

export default SingleNews;
