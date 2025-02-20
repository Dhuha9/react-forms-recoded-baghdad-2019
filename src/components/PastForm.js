import React from 'react';

class Form extends React.Component {

  handleSubmit = event => {
    event.preventDefault()
    let formDate = {
      firstName: this.state.firstName,
      lastName: this.state.lastName
    }
    let dataArray = this.state.submittedData.concat(formDate)
    this.setState({
      submittedData: dataArray
    })
  }
  listOfSubmissions = () => {
    return this.state.submittedData.map(data => {
      return <div><span>{data.firstName}</span> <span>{data.lastName}</span></div>
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={event => this.handleSubmit(event)}>
          <input type="text" name="firstName" onChange={event => this.handleFirstNameChange(event)} value={this.state.firstName} />
          <input type="text" name="lastName" onChange={event => this.handleLastNameChange(event)} value={this.state.lastName} />
          <input type="submit" />
        </form>
        {this.listOfSubmissions()}
      </div>
    )
  }
}

export default Form;