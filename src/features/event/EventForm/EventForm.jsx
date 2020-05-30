import React, { Component } from 'react'
import { Segment, Form, Button } from 'semantic-ui-react'

class EventForm extends Component {
  state = {
    title: '',
    date: '',
    city: '',
    venue: '',
    hostedBy: ''
  }

  handleSubmit = e => {
    e.preventDefault();
    console.log(this.state);
    
  }

  handleInputChange = ({target: {name, value}}) => {
    this.setState({
      [name]: value
    })
  }
  render() {
    const { cancelFormOpen } = this.props;
    const { title, date, city, venue, hostedBy } = this.state;
    return (
      <Segment>
        <Form onSubmit={this.handleSubmit} autoComplete='off'>
          <Form.Field>
            <label>Event Title</label>
            <input onChange={this.handleInputChange} value={title} name="title" placeholder="First Name" />
          </Form.Field>
          <Form.Field>
            <label>Event Date</label>
            <input onChange={this.handleInputChange} value={date} name="date" type="date" placeholder="Event Date" />
          </Form.Field>
          <Form.Field>
            <label>City</label>
            <input onChange={this.handleInputChange} value={city} name="city" placeholder="City event is taking place" />
          </Form.Field>
          <Form.Field>
            <label>Venue</label>
            <input onChange={this.handleInputChange} value={venue} name="venue" placeholder="Enter the Venue of the event" />
          </Form.Field>
          <Form.Field>
            <label>Hosted By</label>
            <input onChange={this.handleInputChange} value={hostedBy} name="hostedBy" placeholder="Enter the name of person hosting" />
          </Form.Field>
          <Button positive type="submit">
            Submit
          </Button>
          <Button onClick={cancelFormOpen} type="button">Cancel</Button>
        </Form>
      </Segment>
    )
  }
}

export default EventForm
