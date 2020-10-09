import React, {useState} from 'react'

export default function Sidebar ({changeCategory}) {
    return (
        <div className="sidebar">
            <h3>Categories</h3>
            <ul>
                <li onClick={()=>changeCategory("Christmas Ball")}>Christmas balls</li>
                <li onClick={()=>changeCategory("Christmas Lights")}>Christmas lights</li>
                <li onClick={()=>changeCategory("Christmas Trees")}>Christmas trees</li>
                <li onClick={()=>changeCategory("Gifts")}>Gifts</li>
                <li onClick={()=>changeCategory("Christmas Sleigh")}>Christmas sleighs</li>
            </ul>
        </div>
    )
}
