import React from 'react'
import img from './img1.jpeg'
import './MainCard.css'

export default function MainCard({articleimg,title,description,author,url}) {
     const breakString = (str, chunkSize) => {
        const result = [];
        for (let i = 0; i < chunkSize; i++) {
            result.push(str[i])
        }
        return result.join("")
    }
  return (
    <a href={url} className='maincardanchor'>
     <div className='MainCard'>
        <img src={articleimg} className='maincardimg'/>
        <div className='maincardbody'>
            <div className="maincardcontent">
                <div className='title'>
                {/* {title} */}
                {breakString(title, 50 )}{'...'}

                </div>
                <div className='description'>
                {/* {description} */}
                {breakString(description, 170 )}{'...'}

                </div>

            </div>
            <div className='maincardauthor'>
                <div className='maincardauthor'>Author</div>
                <div className='maincardauthorname'>{author}</div>

            </div>

        </div>
      
    </div>
   </a>
  )
}
