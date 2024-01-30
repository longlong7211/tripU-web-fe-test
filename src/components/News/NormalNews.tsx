type TNormalnewsProps = {
  img: string;
  title: string;
  content: string;
}
export default function NormalNews({ img, content, title }: TNormalnewsProps) {
  return <div className="normal-news-container d-flex mt-4">
    <div className="news-img">
      <img src={img} alt="" />
    </div>
    <div className="news-body ms-2">
      <div className="news-title">{title}</div>
      <div className="news-content">{content}</div>
    </div>
  </div>
}