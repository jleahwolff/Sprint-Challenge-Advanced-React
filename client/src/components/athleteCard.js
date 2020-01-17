import React from 'react';

export default function athleteCard(props) {
return (
        <div className="card-column">
            {props.athlete.map(athlete => {
                return (
                <div className="card"
                    style={{
                        width: "70%",
                        margin: '0 auto',
                        display: "flex",
                        justifyContent: "center",
                        backgroundColor: "pink",
                        alignItems: 'spaceBetween'
                        // margin: '1rem'
                    }}>
                    <div key={athlete.id} className="card-info">
                        <h1>Athlete: {athlete.name}</h1>
                        <h2>Representing: {athlete.country}</h2>
                        <h3>International Search Tally: {athlete.searches}</h3>
                    </div>
                </div>
                )
                })}
        </div>
    )
};