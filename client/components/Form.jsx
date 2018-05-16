import React from 'react'

class Form extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      address: '',
      submitted: false
    }
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