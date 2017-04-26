class App extends React.Component {
  render() {
    return (
      <div>
        <h2 className="header center">
          Quick Reads for {this.props.name}
        </h2>
        <Directory />
      </div>
    )
  }
}

ReactDOM.render(<App name="Joseph" />, document.getElementById('root'));
