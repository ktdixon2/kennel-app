import React, { Component } from 'react'

class AnimalList extends Component {
    render() {
        return (
            <section className="animals">
            {
                this.props.animals.map(animal =>
                    <div key={animal.id}>
                        <h4>{animal.name}</h4>
                        <p>{animal.breed}</p>
                    </div>
                )
            }
            </section>
        )
    }
}

export default AnimalList