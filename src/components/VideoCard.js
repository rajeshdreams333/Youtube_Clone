import React from 'react'

const Videocard = ({info}) => {
    const {snippet,statistics}=info;
    const {channelTitle,title,thumbnails}=snippet
  return (
    <div className='p-2 m-2 w-64 shadow-lg'>
      <img alt="" src={thumbnails.medium.url} className='rounded-lg'/>
      <ul>
        <li className='font-bold py-2'>{title}</li>
        <li>{channelTitle}</li>
        <li>{statistics.viewCount} views</li>
      </ul>
    </div>
  )
}
export const AdVideoCard=({info})=>{
  return (
    <div className='p-1 m-1 border border-red-600'>
      <Videocard info={info}/>
      <p className='font-semibold pl-2'>ad</p>
    </div>
  )
}
export default Videocard
