import React, { Component } from 'react'
import { connect } from 'react-redux'
import { incrementCounter, decrementCounter } from './testActions';
import { Button } from 'semantic-ui-react';

class TestComponent extends Component {
  render() {
    const { data, incrementCounter, decrementCounter} = this.props;
    return (
      <div>
        <h1>{data}</h1>
        <Button onClick={incrementCounter} positive content="Increment"></Button>
        <Button onClick={decrementCounter} negative content="Decrement"></Button>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  data: state.test.data
})

const actions = {
  incrementCounter,
  decrementCounter 
}

export default connect(mapStateToProps, actions)(TestComponent)
