import React, { Component } from "react";
import { Segment, Form, Button, Grid, Header } from "semantic-ui-react";
import { connect } from "react-redux";
import { createEvent, updateEvent } from "../eventActions";
import cuid from "cuid";
import { reduxForm, Field } from "redux-form";
import TextInput from "../../../app/common/form/TextInput";

const mapState = (state, ownProps) => {
  const eventId = ownProps.match.params.id;

  let event = {
    title: "",
    date: "",
    city: "",
    venue: "",
    hostedBy: "",
  };

  if (eventId && state.events.length > 0) {
    event = state.events.filter((event) => event.id === eventId)[0];
  }

  return {
    event,
  };
};

class EventForm extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.id) {
      this.props.updateEvent(this.state);
      this.props.history.push(`/events/${this.state.id}`);
    } else {
      const newEvent = {
        ...this.state,
        id: cuid(),
        hostPhotoUrl: "/assets/user.png",
      };
      this.props.createEvent(newEvent);
      this.props.history.push(`/events`);
    }
  };


  render() {
    return (
      <Grid>
        <Grid.Column width={10}>
          <Segment>
            <Header sub color="teal" content="Event Details" />
            <Form onSubmit={this.handleSubmit} autoComplete="off">
            <Field name="title" component={TextInput} placeholder="Give your event a name" />
            <Field name="category" component={TextInput} placeholder="What is your event about ?" />
            <Field name="description" component={TextInput} placeholder="Tell us about your event" />
            <Header sub color="teal" content="Event Location Details" />
            <Field name="city" component={TextInput} placeholder="Event City" />
            <Field name="venue" component={TextInput} placeholder="Event Venue" />
            <Field name="date" component={TextInput} placeholder="Event Date" />
            <Button positive type="submit">
              Submit
            </Button>
            <Button onClick={this.props.history.goBack} type="button">
              Cancel
            </Button>
          </Form>
        </Segment>
        </Grid.Column>
      </Grid>
    );
  }
}

export default connect(mapState, { createEvent, updateEvent })(
  reduxForm({ form: "eventForm" })(EventForm)
);
