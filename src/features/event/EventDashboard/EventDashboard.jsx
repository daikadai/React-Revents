import React, { Component } from 'react'
import { Grid, Button } from 'semantic-ui-react'
import EventList from '../EventList/EventList'
import EventForm from '../EventForm/EventForm'
import cuid from 'cuid';
import { connect } from 'react-redux';
import { createEvent, deleteEvent, updateEvent } from '../eventActions';


class EventDashboard extends Component {
  state = {
    isOpen: false,
    selectedEvent: null
  }

  // handleIsOpenToggle = () => {
  //   this.setState(({isOpen}) => ({
  //     isOpen: !isOpen
  //   }))
  // }

  handleUpdateEvent = (updateEvent) => {
    this.props.updateEvent(updateEvent)
    this.setState(({events}) => ({
      isOpen: false,
      selectedEvent: null
    }))
  }

  handleDeleteEvent = id => {
    this.props.deleteEvent(id);
  }

  handleCreateFormOpen = () => {
    this.setState({
      isOpen: true,
      selectedEvent: null
    })
  }

  handleFormCancel = () => {
    this.setState({
      isOpen: false
    })
  }

  handleCreateEvent = (newEvent) => {
    newEvent.id = cuid();
    newEvent.hostPhotoURL = '/assets/user.png';
    this.props.createEvent(newEvent);
    this.setState(({events}) => ({
      isOpen: false
    }))
  }

  handleSelectEvent = (event) => {
    this.setState({
      selectedEvent: event,
      isOpen: true
    })
  }
  render() {
    const { isOpen, selectedEvent } = this.state;
    const { events } = this.props;
    return (
      <Grid>
        <Grid.Column width={10}>
          <EventList events={events} deleteEvent={this.handleDeleteEvent} selectEvent={this.handleSelectEvent}/>
        </Grid.Column>
        <Grid.Column width={6}>
          <Button  onClick={this.handleCreateFormOpen} positive content="Create Event"/>
          {isOpen &&  <EventForm key={selectedEvent ? selectedEvent.id : null} selectedEvent={selectedEvent} updateEvent={this.handleUpdateEvent} cancelFormOpen={this.handleFormCancel} createEvent={this.handleCreateEvent}/>}
        </Grid.Column>
      </Grid>
    )
  }
}

const mapState = state => ({
  events: state.events
})

const actions = {
  createEvent,
  updateEvent,
  deleteEvent
}

export default connect(mapState, actions)(EventDashboard)
