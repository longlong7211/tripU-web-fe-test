import React from "react"
type TMiniNewsPtops = {
  img: string;
  title: string;
  url: string;
}
export default function MiniNews({ img, title, url }: TMiniNewsPtops) {
  return <div className="mini-new-container d-flex">
    <div className="news-img">
      <img src={img} alt={title} />
    </div>
    <div className="news-title ms-2">
      {title}
    </div>
  </div>
}