import SingleNews from "@/componants/single-news";
import React from "react";

function NewsDetail({ params }: { params: { slug: string } }) {
  return (
    <div>
      <SingleNews />
    </div>
  );
}

export default NewsDetail;
