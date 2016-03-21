var Shape = React.createClass({
  render: function() {
    return <div className={this.props.type + ' ' + this.props.color}/>
  }
})

var MyApp = React.createClass({
  render: function() {
    let shapes = this.props.shapes.map((shape, index) => {
      return <Shape type={shape.type} color={shape.color} key={index} />;
    })
    return (
      <div>
        {shapes}
      </div>
    );
  }
});

const shapes = [
  {
    "type": "circle",
    "color": "green"
  },
  {
    "type": "pacman",
    "color": "white"
  },
  {
    "type": "square",
    "color": "red"
  }
]

ReactDOM.render(
  <MyApp shapes={shapes}/>,
  document.getElementById('content')
);
