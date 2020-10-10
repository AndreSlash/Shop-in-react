import React, {useState} from 'react'

export default function Sidebar ({changeCategory}) {
    return (
        <div className="sidebar">
            <h3>Categories</h3>
            <ul>
                <li className="categoryItem" onClick={()=>changeCategory("Christmas Ball")}>Christmas balls</li>
                <li className="categoryItem" onClick={()=>changeCategory("Christmas Lights")}>Christmas lights</li>
                <li className="categoryItem" onClick={()=>changeCategory("Christmas Trees")}>Christmas trees</li>
                <li className="categoryItem"  onClick={()=>changeCategory("Gifts")}>Gifts</li>
                <li className="categoryItem" onClick={()=>changeCategory("Christmas Sleigh")}>Christmas sleighs</li>
            </ul>
        </div>
    )
}
