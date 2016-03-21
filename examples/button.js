var MyApp = React.createClass({
  getInitialState: function() {
    return {
      buttonClass: 'green'
    };
  },
  toggleClass: function() {
    let newClass = '';
    if (this.state.buttonClass === 'green') {
      newClass = 'red';
    } else {
      newClass = 'green';
    }
    this.setState({
      buttonClass: newClass
    });
  },
  render: function() {
    console.log('state ', this.state)
    console.log('props ', this.props)
    return (
      <div>
        <button id="button" className={this.state.buttonClass} onClick={this.toggleClass}>
          Press me to change my colour!
        </button>
      </div>
    );
  }
});

ReactDOM.render(
  <MyApp />,
  document.getElementById('content')
);
