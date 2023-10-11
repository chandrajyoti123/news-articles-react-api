import React from 'react'
import img1 from './img1.jpeg'
import img2 from './img2.jpg'
import img3 from './img3.avif'
import './ArticleCard.css'
 
// { articleimg,articlename,aritcledate,articleauthor,articletitle}

export default function ArticleCard({articleimg,description,author,date,channel,url}) {
  return (
   <a href={url}> <div className='articlecardone'>
   <img src={articleimg} className='articlecardoneimg'/>
   <div className='articlecardonebody'>
     <div className='articleonecontent'>
       <div className='articleonechannel'>{channel}</div>
       <div className='articleoneheading'> 
       {description}
       </div>
     <div><span className='authorname'>{author}-</span><span className='date'>{date}</span></div>
     </div>
   </div>
   
 </div></a>
  )
}

export function AriticleCardTow({title,channel,articleimg,url}){
  return(
   <a href={url}>
     <div className='articlecardtwo'>
      <img src={articleimg} className='articlecardoneimg'/>
      <div className='articlecardonebody'>
        <div className='articleonecontent'>
          <div className='articleonechannel'>{channel}</div>
          <div className='articleoneheading articletwoheading'>  {title}
          </div>
          
        </div>
      </div>

    </div>
   </a>
  )
}


export function ArticleCardthree({articleimg,title,channel,url}){
  return(
  <a href={url}>
      <div className='articlecardthree'>
 <img src={articleimg} className='articlecardoneimg'/>
      <div className='articlecardonebody'>
        <div className='articleonecontent'>
          <div className='articleonechannel'>{channel}</div>
          <div className='articleoneheading articlethreeheading'> {title}
          </div>
          
        </div>
      </div>
    </div>
  </a>
  )
}