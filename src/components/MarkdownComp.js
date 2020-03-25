const content = `
# This is H1 Header...
## This is H2 Header... 
Link: [FCC](https://www.freecodecamp.com)

Inline code, \`<div></div>\`....
\`\`\`
// this is block code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == 5 && lastLine == 7) {
    return multiLineCode;
  }
}
\`\`\`

## Lists

Ordered

1. Lorem ipsum dolor sit amet
2. Consectetur adipiscing elit
3. Integer molestie lorem at massa

> Block Quotes!

![React Logo w/ Text](https://goo.gl/Umyytc)

Tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | ------------- 
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

**Bold Text**
`;

let Toolbar = props => {
  return <div id="toolbar">{props.text}</div>;
};

let Editor = props => {
  return (
    <div id="left">
      <Toolbar text="Editor" />
      <textarea
        placeholder="Enter md Text"
        wrap="off"
        id="editor"
        onChange={props.handleChange}
        value={props.text}
      />
    </div>
  );
};

Editor.propTypes = {
  handleChange: PropTypes.func.isRequired
};

let Preview = props => {
  return (
    <div id="right">
      <Toolbar text="Preview" />
      <div id="preview" dangerouslySetInnerHTML={props.output} />
    </div>
  );
};

class MarkdownController extends React.Component {
  constructor(props) {
    super(props);
    this.md = new Remarkable({ breaks: true });
    this.state = { value: content };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  getRawMarkup() {
    return { __html: this.md.render(this.state.value) };
  }

  render() {
    return (
      <div id="markdown">
        <Editor text={this.state.value} handleChange={this.handleChange} />
        <br />
        <Preview output={this.getRawMarkup()} />
      </div>
    );
  }
}
