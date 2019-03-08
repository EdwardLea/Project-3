import React from 'react'
import axios from 'axios'
import ReactFilestack from 'react-filestack'

const fileStack = process.env.FILESTACK_API_KEY

class Register extends React.Component {
  constructor() {
    super()

    this.state = {
      data: {},
      errors: {}
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange({target: { name, value }}) {
    const data = {...this.state.data, [name]: value }
    const errors = { ...this.state.errors, [name]: '' }
    this.setState({ data, errors })
  }

  handleSubmit(e) {
    e.preventDefault()
    axios
      .post('/api/register', this.state.data)
      .then(() => this.props.history.push('/login'))
      .catch((err) => this.setState({errors: err.response.data}))
  }

  render() {
    return (
      <section className="section">
        <div className="container">
          <div className="column is-4 is-offset-4">
            <h3 className="title has-text-centered">Register</h3>
            <div className="box">
              <form onSubmit={this.handleSubmit}>
                <div className="field">
                  <label className="label">Username</label>
                  <div className="control has-icons-left has-icons-right">
                    <input
                      className="input"
                      name="username"
                      placeholder="Username"
                      onChange={this.handleChange}
                      value={this.state.data.username || ''}
                    />
                    <span className="icon is-small is-left">
                      <i className="fas fa-user"></i>
                    </span>
                    {this.state.errors.username && <small className="help is-danger">{this.state.errors.username}</small>}
                  </div>
                </div>
                <div className="field">
                  <label className="label">Email</label>
                  <div className="control has-icons-left">
                    <input
                      type="email"
                      className="input"
                      name="email"
                      placeholder="Email"
                      onChange={this.handleChange}
                      value={this.state.data.email || ''}
                    />
                    <span className="icon is-small is-left">
                      <i className="fas fa-envelope"></i>
                    </span>
                    {this.state.errors.email && (
                      <small
                        className="help is-danger">
                        {this.state.errors.email}
                      </small>
                    )}
                  </div>
                </div>
                <div className="field">
                  <label className="label">Image</label>
                  <div className="control">
                    <input
                      className="input"
                      placeholder="Image"
                      name="image"
                      onChange={this.handleChange}
                      value={this.state.data.image || ''}
                    />
                    {/*<ReactFilestack
                      apikey={`${fileStack}`}
                      mode={'pick'}
                      onSuccess={(res) => this.handleChange({
                        target: {
                          name: 'image',
                          value: res.filesUploaded[0].url
                        }})}
                      onError={(err) => console.log(err)}
                      buttonText={'Add Image'}
                      buttonClass={'button is-dark is-rounded'}
                    />*/}
                    {this.state.data.image && <small> Imaged Uploaded</small>}
                    <br/>
                    {this.state.errors.image && (
                      <small
                        className="help is-danger">
                        {this.state.errors.image}
                      </small>
                    )}
                  </div>
                </div>
                <div className="field">
                  <label className="label">Password</label>
                  <div className="control">
                    <input
                      className="input"
                      name="password"
                      type="password"
                      placeholder="Password"
                      onChange={this.handleChange}
                      value={this.state.data.password || ''}
                    />
                    {this.state.errors.password && <small className="help is-danger">{this.state.errors.password}</small>}
                  </div>
                </div>
                <div className="field">
                  <label className="label">Confirm Password</label>
                  <div className="control">
                    <input
                      className="input"
                      name="passwordConfirmation"
                      type="password"
                      placeholder="Confirm Password"
                      onChange={this.handleChange}
                      value={this.state.data.passwordConfirmation || ''}
                    />
                    {this.state.errors.password && <small className="help is-danger">{this.state.errors.password}</small>}

                  </div>
                </div>
                <button className="button is-primary is-medium is-fullwidth is-rounded">Sign Up</button>
              </form>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Register
