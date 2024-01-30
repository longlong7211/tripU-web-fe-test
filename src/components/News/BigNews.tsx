type TBigNewsProps = {
  img: string;
  title: string;
  content: string;
}
export default function BigNews({ img, content, title }: TBigNewsProps) {
  return <div className="bignews-container">
    <div className="bignews-img">
      <img src={img} alt="" />
    </div>
    <div className="bignews-title">{title}</div>
    <div className="bignews-content">{content}</div>
  </div>
}