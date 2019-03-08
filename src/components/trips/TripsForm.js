import React from 'react'
import Select from 'react-select'
import ReactFilestack from 'react-filestack'

const fileStack = process.env.FILESTACK_API_KEY

const TripsForm = ({ options, data, handleChange, handleSubmit, handleMultiChange, errors }) => {

  return (
    <div className="container">
      <div className="column is-6 is-offset-3 ">
        <h3 className="title has-text-centered">Create Your Trip</h3>
        <div className="box">
          <form onSubmit={handleSubmit}>
            <div className="field">
              <label className="label">Name</label>
              <div className="control">
                <input
                  className="input"
                  placeholder="Name"
                  name="name"
                  onChange={handleChange}
                  value={data.name || ''}
                />
                {errors.name && <small className="help is-danger">{errors.name}</small>}
              </div>
            </div>
            <div className="field">
              <label className="label">Image</label>
              <div className="control">
                <input
                  className="input"
                  placeholder="Image"
                  name="image"
                  onChange={handleChange}
                  value={data.image || ''}
                />
                {/*<ReactFilestack
                  apikey={`${fileStack}`}
                  mode={'pick'}
                  onSuccess={(res) => handleChange({
                    target: {
                      name: 'image',
                      value: res.filesUploaded[0].url
                    }})}
                  onError={(err) => console.log(err)}
                  buttonText={'Upload Image'}
                  buttonClass={'button is-dark is-rounded'}
                />*/}
                {data.image &&<small> Imaged Uploaded</small>}
                <br/>
                {errors.image && <small className="help is-danger">{errors.image}</small>}
              </div>
            </div>
            <div className="field">
              <label className="label">Category</label>
              <div className="control">
                <div className="select is-fullwidth">
                  <select
                    name="category"
                    defaultValue="Please Choose..."
                    onChange={handleChange}
                    value={data.category}
                  >
                    <option disabled>Please Choose...</option>
                    <option value="" > Search All </option>
                    <option> Pubs </option>
                    <option> Museums </option>
                    <option> Restaurants </option>
                    <option> Caravan Trips </option>
                    <option> Road Trips </option>
                    <option> Weekend Trips </option>
                    <option> Sunday Trips </option>
                    <option> Photography Trips </option>
                    <option> Mid-week Trips </option>
                    <option> Business Trips </option>
                    <option> Family Trips </option>
                  </select>
                </div>
                {errors.category && <small className="help is-danger">{errors.category}</small>}
              </div>
            </div>
            <div className="field">
              <label className="label">Description</label>
              <div className="control">
                <input
                  className="input"
                  placeholder="Description"
                  name="description"
                  onChange={handleChange}
                  value={data.description || ''}
                />
                {errors.description && <small className="help is-danger">{errors.description}</small>}
              </div>
            </div>
            <div className="field">
              <label className="label">Gems</label>
              <div className="control">
                <Select
                  className="multi"
                  isMulti
                  options={options}
                  // value={data.gems}
                  name="gems"
                  onChange={handleMultiChange}
                />
                {errors.gems && <small className="help is-danger">{errors.gems}</small>}
              </div>
            </div>
            <button className="button is-rounded is-medium is-fullwidth is-primary">Create Trip <i className="fas fa-map-signs homepage"></i>
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default TripsForm
