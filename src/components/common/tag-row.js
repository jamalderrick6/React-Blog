import React from 'react'
import { categoryColors } from './styles'

export default function TagRow ({categories}){
    return(
        <div className="tags-container">
        {categories.map((category, index) => {
            return (
                <span key={index} className="tag" style={{ backgroundColor: categoryColors[category] }}>
                    {category.toUpperCase()}
                </span>
            )
        })}
    </div>
    )
}