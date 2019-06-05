import React, { Component } from 'react'
import ownerIcon from "./owner.png"
import "./Owners.css"

export default class OwnerList extends Component {
    render() {
        return (
            <section className="owners">
            {
                this.props.owners.map(owner =>
                    <div key={owner.id} className="card">
                        <div className="card-body">
                            <img src={ownerIcon} className="icon--own" />
                            <h3 className="card-title">
                                {owner.name}
                            </h3>
                            <p>{owner.phoneNumber}</p>
                            <button onClick={() => this.props.deletOwner(owner.id)}
                                className="card-link">Delete</button> 
                        </div> 
                    </div>
                )
            }
            </section>
        )
    }
}