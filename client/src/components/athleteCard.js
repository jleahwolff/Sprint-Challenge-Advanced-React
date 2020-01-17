import React from 'react';

export default function athleteCard(props) {
return (
    <div className="athlete-card">
        <div className="card-column">
            {props.athlete.map(athlete => (

            <div className="card">
                style={{
                    width: "70%",
                    margin: '0 auto',
                    display: "flex",
                    justifyContent: "center",
                    backgroundColor: "pink"
                }}>
                <div className="card-info">
                    <h1>{athlete.name}</h1>
                    <h2>{athlete.country}</h2>
                    <h3>{athlete.search_results}</h3>
                </div>
            </div>

            ))}
        </div>
    </div>
    )
}