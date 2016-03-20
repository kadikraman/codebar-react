var MyApp = React.createClass({
  render: function() {
    return (
      <div>Hello, React!</div>
    );
  }
});

ReactDOM.render(
  <MyApp />,
  document.getElementById('content')
);
