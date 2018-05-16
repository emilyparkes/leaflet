import React from 'react'

class Form extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      address: '',
      submitted: false
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }
  

  handleChange (evt) {
    this.setState({
      [evt.target.name]: evt.target.value
    })
  }

  handleSubmit (evt) {
    evt.preventDefault()
    request
      .post(`${baseUrl}/api/v1/`)
      .send({
        address: this.state.address
      })
      .then(res => {
        this.setState({
          submitted: true
        })
      })
  }

  render () {
    return (
      <div className='page-section'>
        <h3>Add your event!</h3>

        <form className='submit-form' onSubmit={this.handleSubmit}>
          <div className='form-address'>
            The address the event will be at <br />
            <input name='address' onChange={this.handleChange} required />
          </div>
          <div className='submit-flex'>
            <button type="submit" value="Submit">Submit</button>
          </div>
        </form>

      </div>
    )
  }
}

export default Form