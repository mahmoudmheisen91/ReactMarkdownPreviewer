const content = "";

let Editor = props => {
  return <div id="aa">test</div>;
};

Editor.propTypes = {
  handleChange: PropTypes.func.isRequired
};

let Preview = props => {
  return <div id="aa">test</div>;
};

class MarkdownController extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange() {}

  render() {
    return (
      <div>
        <Editor />
      </div>
    );
  }
}
