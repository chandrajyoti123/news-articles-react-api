import React from 'react'
import './SmallCard.css'
import img from './../../components/ArticleCard/img1.jpeg'

export default function SmallCard({articleimg,channel,url}) {
  return (
    <a href={url}>
        <div className='smallcard'>
        <img src={articleimg} className='smallcardimg'/>
        <div className='smallcardbody'>
            <div className='smallcardbodytext'>{channel}</div>
        </div>
      
      
    </div>
    </a>
    
  )
}
