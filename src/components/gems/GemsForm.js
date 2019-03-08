import React from 'react'
import MapboxAutocomplete from 'react-mapbox-autocomplete'
import ReactFilestack from 'react-filestack'
import RegMap from '../common/RegMap'

const fileStack = process.env.FILESTACK_API_KEY


const GemsForm = ({ data, handleChange, handleSubmit, errors, suggestionSelect }) => {
  return (
    <div className="container">
      <div className="column is-6 is-offset-3 ">
        <h3 className="title has-text-centered">Add Your Gem</h3>
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
                  onSuccess={(res) => {
                    handleChange({
                      target: {
                        name: 'image',
                        value: res.filesUploaded[0].url
                      }})
                  }}
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
                    <option> Bars </option>
                    <option> Cafes </option>
                    <option> Landmarks </option>
                    <option> Viewpoints </option>
                    <option> Religious Sites </option>
                    <option> Galleries </option>
                    <option> Photography </option>
                    <option> Parks </option>
                  </select>
                </div>
                {errors.category && <small className="help is-danger">{errors.category}</small>}
              </div>
            </div>
            <label className="label">Location</label>
            <div className="control">
              <MapboxAutocomplete
                publicKey= {process.env.MAP_BOX_TOKEN}
                inputClass="input"
                onSuggestionSelect={suggestionSelect}
                resetSearch={false}
                onchange={handleChange}
                name="location"
                value={data.address}
              />
              <RegMap
                location={data.location}
                onChange={handleChange}
              />
              {errors.location && <small>{errors.location}</small>}
            </div>
            <div>
              <button className="button is-rounded is-medium is-fullwidth is-primary gem-form">Submit <i className="far fa-gem homepage"></i>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>

  )
}

export default GemsForm
