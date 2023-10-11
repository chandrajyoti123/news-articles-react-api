import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './Home.css'
import ArticleCard from '../../components/ArticleCard/ArticleCard'
import { AriticleCardTow } from '../../components/ArticleCard/ArticleCard'
import { ArticleCardthree } from '../../components/ArticleCard/ArticleCard'
import SmallCard from '../../components/SmallCard/SmallCard'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft,faAngleRight } from "@fortawesome/free-solid-svg-icons"
import MainCard from '../../components/MainCard/MainCard'
export default function Home() {
  const [news, setNews] = useState([])
  console.log(news)


  const loadNews = async () => {
    try {
      const response = await axios.get("https://newsapi.org/v2/everything?q=india&from=2023-10-08&to=2023-10-08&sortBy=popularity&apiKey=b79e11c082af4dd6908c08cfb41549f3")
      setNews(response.data.articles)
    } catch (err) {
      console.log(err)
    }


  }

  useEffect(() => {
    loadNews()

  }, [])

  const handleScroll = (event) => {
    const scroll = document.getElementById('flex-scroll');
    scroll.scrollLeft += event.deltaY;
}

  return (


  

    <>
      <div className='main-container' >

        <div className='sectionone'>
          <div className='cardone'>
            <div className='crad1'>
              {
                news.map((ele, i) => {
                  if (i == 0) {
                    return <ArticleCard articleimg={ele?.urlToImage} description={ele?.title} author={ele?.author} date={ele?.publishedAt} channel={ele?.source?.name}  url={ele?.url}/>
                  }

                })

              }
            </div>




          </div>
          <div className='remaincard'>
            <div className='remaincardone'>
              <div className='card2'>
              {
                news.map((ele, i) => {
                  if (i == 1) {
                    
                    return <AriticleCardTow channel={ele?.source?.name} title={ele?.title} articleimg={ele?.urlToImage} url={ele?.url} />
                  }

                })

              }
              </div>
            </div>
            <div className='remaincardanother'>
               {
          news.map((ele,i)=>{

          if(i>1 && i<4){

            return <ArticleCardthree articleimg={ele?.urlToImage} title={ele?.title} channel={ele?.source?.name} url={ele?.url}/>
          }

          })

        }

            </div>
          </div>

        </div>


      </div>

      <div className='sectiontwo'>
        <div className='sectiontwoletf'>
        <FontAwesomeIcon className='angleicon' icon={faAngleLeft} onClick={() => {
                        handleScroll({ deltaY: -500 });

                    }}/>

        </div>
        <div className='sectiontwomain' id='flex-scroll'>
        {
          news.map((ele,i)=>{

         

            if(i>4 && i<15)
            return <SmallCard articleimg={ele?.urlToImage} channel={ele?.source?.name} url={ele?.url}/>
          

          })

        }

        </div>
        <div className='sectiontworight'>
          <FontAwesomeIcon className='angleicon' icon={faAngleRight} onClick={() => {
                        handleScroll({ deltaY: 500 });

                    }}/>

        </div>
      </div>
      {/* -------------section 3-------------- */}

      <div className='sectionthree'>
      {
          news.map((ele,i)=>{

         

        if(i>16){
            return <MainCard articleimg={ele?.urlToImage} title={ele?.title} author={ele?.author} description={(ele?.description)} url={ele?.url}/>
        }

          })
        

        }
       

      </div>
    </>
  )
}
