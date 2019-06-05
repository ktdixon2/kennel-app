import React, { Component } from 'react'
import dog from "./DogIcon.svg"
import "./Animal.css"

export default class AnimalList extends Component {
    render () {
        console.log(this.props.animals)
        return (
            <section className="animals">
            {
                this.props.animals.map(animal =>
                    <div key={animal.id} className="card">
                        <div className="card-body">
                            <img src={dog} className="icon--dog" />
                            <h5 className="card-title">
                                {animal.name}
                                <button
                                    onClick={() => this.props.deleteAnimal(animal.id)}
                                    className="card-link">Delete</button>
                            </h5>
                            {/* <h6 className="owner-title">Parent:</h6>
                                <p className="owner-name">{animal.owner.name} */}
                                    
                        </div>
                    </div>
                )
            }
            </section>
        )
    }
}