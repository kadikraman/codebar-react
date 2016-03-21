var MyApp = React.createClass({
  getInitialState: function() {
    return {
      counter: this.props.startValue
    };
  },
  increment: function() {
    this.setState({
      counter: this.state.counter+1
    })
  },
  render: function() {
    console.log('state ', this.state)
    console.log('props ', this.props)
    return (
      <div>
        <button onClick={this.increment}>Increment</button>
        <div>{this.state.counter}</div>
      </div>
    );
  }
});

ReactDOM.render(
  <MyApp startValue={5} />,
  document.getElementById('content')
);
