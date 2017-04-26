function AuthorsList (props) {
  return (
    <ul className="authors-list">
      {
        props.authors.map((author, index) =>
          <li key={author.id} className="authors-item">
            <div className="author-id">{index + 1}</div>
            <ul>
              <li>{author.first_name} {author.last_name}</li>
            </ul>
          </li>)
      }
    </ul>
  )
}

class App extends React.Component {
  constructor(props) {
    super();
    this.state = {
      authors: null
    }
  }

  componentDidMount() {
    $.getJSON('/authors.json', (response) => {
      this.setState({
        authors: response
      })
    })
  }

  render() {
    return (
      <div className="container">
        <h2 className="header center">
          Quick Reads for {this.props.name}
        </h2>
        <Directory />
        {!this.state.authors
        ? <p>LOADING</p>
        : <AuthorsList authors={this.state.authors} />}
      </div>
    )
  }
}

ReactDOM.render(<App name="Joseph" />, document.getElementById('root'));
