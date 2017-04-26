class Directory extends React.Component {
  constructor(props) {
    super();
    this.state = {
      selectedOption: 'Authors'
    };
    this.updateSelection = this.updateSelection.bind(this)
  }

  updateSelection(value) {
    this.setState(() => {
      return { selectedOption: value }
    })
  }

  render() {
    var items = ['All', 'Authors', 'Posts'];
    return (
      <div>
        <ul className="items">
          { items.map((opt) =>
            <li style={opt === this.state.selectedOption ? { color: '#d0021b'} : null}
              onClick={this.updateSelection.bind(null, opt)}
              key={opt}>{opt}
            </li>)
          }
        </ul>
      </div>
    )
  }
}
