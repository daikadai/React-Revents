import React, { Component } from 'react'
import { Grid } from 'semantic-ui-react'
import EventList from '../EventList/EventList'
import { connect } from 'react-redux';
import { createEvent, deleteEvent, updateEvent } from '../eventActions';


class EventDashboard extends Component {
  handleDeleteEvent = id => {
    this.props.deleteEvent(id);
  }


  handleFormCancel = () => {
    this.setState({
      isOpen: false
    })
  }

  render() {
    const { events } = this.props;
    return (
      <Grid>
        <Grid.Column width={10}>
          <EventList events={events} deleteEvent={this.handleDeleteEvent}/>
        </Grid.Column>
        <Grid.Column width={6}>
          <h2>Activity Feed</h2>
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
