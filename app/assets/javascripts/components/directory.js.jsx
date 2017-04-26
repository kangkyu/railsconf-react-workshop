class Directory extends React.Component {
  constructor(props) {
    super();
    this.state = {
      selectedOption: 'Authors'
    };
  }
  render() {
    var items = ['All', 'Authors', 'Posts'];
    return (
      <div>
        <ul className="items">
          { items.map((opt) =>
            <li style={opt === this.state.selectedOption ? { color: '#d0021b'} : null}
              key={opt}>{opt}
            </li>)
          }
        </ul>
      </div>
    )
  }
}
