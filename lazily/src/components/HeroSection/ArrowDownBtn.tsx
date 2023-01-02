import React from 'react'
import { Link } from 'react-router-dom'
import '../UI/arrowDownBtn.css'

export const ArrowDownBtn = () => {
  return (
    <div>
        <Link to="/home">
            <div className="arrow-down">
                <div className="arrow-down-line"></div>
                <div className="arrow-down-line"></div>
                <div className="arrow-down-line"></div>
            </div>
        </Link>
    </div>
  )
}
