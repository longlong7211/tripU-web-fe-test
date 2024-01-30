import React, { useEffect, useState } from "react";
import axios from 'axios';
import { TArticles } from "ts/types";
import MiniNews from "components/News/MiniNews";
import BigNews from "components/News/BigNews";
import NormalNews from "components/News/NormalNews";
export default function HomePage() {
  const [listArticles, setListArticles] = useState<TArticles[] | null>(null)
  useEffect(() => {
    (async () => {
      try {
        await axios.get(`https://newsapi.org/v2/everything`, {
          params: {
            q: 'apple',
            from: '2024-01-29',
            to: '2024-01-29',
            sortBy: 'popularity',
            apiKey: '6b1b7b6643db4abbafe92da267fcf8fc'
          }
        }).then((data) => {
          console.log(data.data)
          if (data.data.articles) {
            setListArticles(data.data.articles)
          } else {
            setListArticles(null);
          }
        })
      } catch (error) {

      }
    })()
  }, [])
  return <div className="container">
    <div className="top-news ">
      <div className="d-flex justify-content-center">
        <div className="list-top-news">
          {
            listArticles && listArticles.slice(1, 6).map((articles) => {
              return <MiniNews title={articles.title} url={articles.url} img={articles.urlToImage} />
            })
          }
        </div>
        <div className="top-news">
          {listArticles && <BigNews title={listArticles[0].title} content={listArticles[0].content} img={listArticles[0].urlToImage} />}
        </div>
      </div>
    </div>

    <div className="list-all-new-today">
      {listArticles && listArticles.slice(6).map((articles) => {
        return <NormalNews title={articles.title} img={articles.urlToImage} content={articles.content} />
      })}
    </div>
  </div>
}