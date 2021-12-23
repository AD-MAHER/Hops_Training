import React from 'react'
import LeftSide from './Left/LeftSide'
import ArticlePart from './Article/ArticlePart'

export default function CenterPart() {
  
    return (
      
        <div className="row centerClass" >
           <aside className="col-12 col-sm-12 col-md-2 mt-md-3 p-xl-3 ">
           <LeftSide />
           </aside>
           <article className="col-12 col-sm-12 col-md-10 content_class mt-3" >
           <ArticlePart  />
           </article>
           
        </div>
        
    )
}
