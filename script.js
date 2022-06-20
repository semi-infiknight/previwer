class MarkdownPreviewer extends React.Component {
  render() {
    return /*#__PURE__*/(
      React.createElement("div", { className: "markdown-previewer" }, /*#__PURE__*/
      React.createElement("h4", null, "\u2705 Markdown previewer"), /*#__PURE__*/
      React.createElement("div", { dangerouslySetInnerHTML: this.props.markup })));


  }}


class MarkdownEditor extends React.Component {
  render() {
    return /*#__PURE__*/(
      React.createElement("div", { className: "markdown-editor" }, /*#__PURE__*/
      React.createElement("h4", null, "\u270E Markdown editor"), /*#__PURE__*/
      React.createElement("textarea", { onChange: this.props.onChange, value: this.props.value })));


  }}


class MarkdownContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: "# pikachu\n## pika pi\n### pika pika pika ###\n---\npi~~pika~~ **chu** `pi` pi *pikachu*:\n* pikaaaaachuu\n* pikaaapiiii\n* pikapikachuchu\n* pika [pikachu](https://in.portal-pokemon.com/play/pokedex/025)\n\npikaaaa:\n1. pika\n2. ~~pika~~\n\npikachuuuuuuuuuuuuuuuuuu! &#9786;" };
    this.handleChange = this.handleChange.bind(this);
  }
  createMarkup() {
    var options = { sanitize: true };
    return { __html: marked(this.state.text, options) };
  }

  handleChange(e) {
    this.setState({
      text: e.target.value });

  }

  render() {
    return /*#__PURE__*/(
      React.createElement("div", null, /*#__PURE__*/
      React.createElement(MarkdownEditor, { onChange: this.handleChange, value: this.state.text }), /*#__PURE__*/
      React.createElement(MarkdownPreviewer, { markup: this.createMarkup() })));


  }}


class App extends React.Component {
  render() {
    return /*#__PURE__*/(
      React.createElement(MarkdownContainer, null));

  }}


ReactDOM.render( /*#__PURE__*/
React.createElement(App, null),
document.getElementById('app'));