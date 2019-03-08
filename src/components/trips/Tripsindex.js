import React from 'react'
import axios from 'axios'
import TripCard from './TripCard'
import TripsSearchForm from './TripsSearchForm'

class TripsIndex extends React.Component {

  constructor() {
    super()
    this.state = {
      filteredTrips: []
    }
    this.handleSearch = this.handleSearch.bind(this)
  }

  componentDidMount() {
    axios.get('/api/trips')
      .then(res => this.setState({ trips: res.data, filteredTrips: res.data }))
  }

  handleSearch(e) {
    if(e.target.value !== '') {
      const getTripCategory = this.state.filteredTrips.filter(trip =>
        e.target.value === trip.category)
      this.setState({ trips: getTripCategory })
    } else {
      this.setState({ trips: this.state.filteredTrips })
    }
  }

  render() {

    if(!this.state.trips) return (
      <section className="section">
        <div className="container">
          <h4 className="title is-4">Loading...</h4>
        </div>
      </section>
    )

    console.log('trips',this.state.trips)

    return (
      <section className="section">
        <div className="container">
          <section className="section">
            <h2 className="title has-text-centered is-title-light is-size-2">The Trips</h2>
          </section>
          <hr />
          <TripsSearchForm handleSearch={this.handleSearch}/>
          <div className="columns is-multiline">
            {this.state.trips.map(trip =>
              <div key={trip._id} className="column is-4">
                <TripCard {...trip} />
              </div>
            )}
          </div>
        </div>
      </section>
    )
  }
}

export default TripsIndex
