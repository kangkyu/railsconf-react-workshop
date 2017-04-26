class App extends React.Component {
  render() {
    return (
      <h2 className="header center">
        Quick Reads for {this.props.name}
      </h2>
    )
  }
}

ReactDOM.render(<App name="Joseph" />, document.getElementById('root'));
