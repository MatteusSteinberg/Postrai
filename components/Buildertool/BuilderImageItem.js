import React from 'react'

export default function BuilderImageItem({ imageName = "None", handleShowActive, active = false }) {
    return (
        <li onClick={handleShowActive} style={{ backgroundColor: `${active ? '#F2F4F6' : 'inherit'}`, color: `${active ? 'blue' : 'inherit'}` }} className="image">
            <div className="image-container">
                <p className="image-name my-0">{imageName}</p>
            </div>
        </li>
    )
}
