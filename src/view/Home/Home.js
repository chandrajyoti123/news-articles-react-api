import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './Home.css'
import ArticleCard from '../../components/ArticleCard/ArticleCard'
import { AriticleCardTow } from '../../components/ArticleCard/ArticleCard'
import { ArticleCardthree } from '../../components/ArticleCard/ArticleCard'
import SmallCard from '../../components/SmallCard/SmallCard'

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons"
import MainCard from '../../components/MainCard/MainCard'
export default function Home() {
  const [news, setNews] = useState([])

  const [searchvalue, setSearchvalue] = useState("")

  const [topicname, setTopicname] = useState("pune")
  console.log(topicname)


  const funcToTopic = (topic) => {
    setTopicname(topic)

  }

  const [key, setKey] = useState("")
  useEffect(() => {
    if (key === "Enter") {
      setTopicname(searchvalue)
    }

  }, [key])




  const loadNews = async () => {
    try {
      const response = await axios.get(`https://newsapi.org/v2/everything?q=${topicname}&from=2023-10-11&to=2023-10-11&sortBy=popularity&apiKey=b79e11c082af4dd6908c08cfb41549f3`)
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
      <div className='navbar'>
        <div className='navbarlogo'>
          <div className='logo'>News<span className='logono'>18</span></div>
        </div>
        <div className='navlinks'>
          <ul>
            <li className={topicname == "india" ? "setactive" : ""} onClick={() => {
              funcToTopic("india")
            }}>Home</li>
            <li className={topicname == "education" ? "setactive" : ""} onClick={() => {
              funcToTopic("education")
            }}>education</li>
            <li className={topicname == "sports" ? "setactive" : ""} onClick={() => {
              funcToTopic("sports")
            }}>sports</li>
            <li className={topicname == "bollywood" ? "setactive" : ""} onClick={() => {
              funcToTopic("bollywood")
            }}>bollywood</li>
            <li className={topicname == "technology" ? "setactive" : ""} onClick={() => {
              funcToTopic("technology")
            }}>Technology</li>
          </ul>
        </div>
        <div className='search-bar'>
          <input type='text' placeholder='search your topic' value={searchvalue} onChange={(e) => {
            setSearchvalue(e.target.value)
          }}
            className='inpute-field'
            onKeyDown={(e) => {
              setKey(e.key)
            }} />
        </div>

      </div>

      <div className='headingcontainer'>
        <div className='heading'>{topicname=="india"?"":topicname}</div>
      </div>
      <div className='main-container' >
        <div className='sectionone'>
          <div className='cardone'>
            <div className='crad1'>
              {
                news.map((ele, i) => {
                  if (i == 0) {
                    return <ArticleCard articleimg={ele?.urlToImage} description={ele?.title} author={ele?.author} date={ele?.publishedAt} channel={ele?.source?.name} url={ele?.url} />
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
                news.map((ele, i) => {
                  // i > 1 && i < 4
                  if (i==3) {

                    return <ArticleCardthree articleimg={ele?.urlToImage} title={ele?.title} channel={ele?.source?.name} url={ele?.url} />
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

          }} />

        </div>
        <div className='sectiontwomain' id='flex-scroll'>
          {
            news.map((ele, i) => {
              if (i > 4 && i < 15)
                return <SmallCard articleimg={ele?.urlToImage} channel={ele?.source?.name} url={ele?.url} />

            })
          }

        </div>
        <div className='sectiontworight'>
          <FontAwesomeIcon className='angleicon' icon={faAngleRight} onClick={() => {
            handleScroll({ deltaY: 500 });

          }} />

        </div>
      </div>
      {/* -------------section 3-------------- */}

      <div className='sectionthree'>
        {
          news.map((ele, i) => {
            if (i > 15) {
              return <MainCard articleimg={ele?.urlToImage} title={ele?.title} author={ele?.author} description={(ele?.description)} url={ele?.url} />
            }
          })
        }
      </div>
      {/* ------------footer------------ */}
      <div className='footer'>
        made with love by Chandrajyoti
      </div>
    </>
  )
}
