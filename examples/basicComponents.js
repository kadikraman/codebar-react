var Text = React.createClass({
  render: function() {
    return (
      <div>{this.props.text}</div>
    );
  }
})

var MyApp = React.createClass({
  render: function() {
    return (
      <div>
        <Text text="Hello"/>
        <Text text="Kadi!"/>
      </div>
    );
  }
});

ReactDOM.render(
  <MyApp />,
  document.getElementById('content')
);
