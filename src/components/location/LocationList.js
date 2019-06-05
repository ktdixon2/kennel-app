import React, { Component } from 'react'
import loc from "./locationIcon.png"
import "./location.css"

export default class LocationList extends Component {
    render() {
        return (
            <section className="locations">
            {
                this.props.locations.map(location =>
                    <div key={location.id} className="card">
                        <div className="card-body">
                            {/* <img src={loc} className="icon-loc" /> */}
                            <h3 className="card-title">{location.name}</h3>
                            <p className="card-details">{location.address}</p>
                        </div>
                    </div>
                )
            }
            </section>
        )
    }
}