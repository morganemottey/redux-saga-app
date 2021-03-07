import React from 'react'

const Card = (props) => {
    return (
        <div>
            <div className="card" width="200px">
                <img src="..." className="card-img-top" alt="..." />
                <div className="card-body">
                    <h3>{props.user.name}</h3>
                    <p className="card-text">{props.user.description}</p>
                </div>
            </div>
        </div>
    )
}

export default Card
