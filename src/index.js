"use strict";

function App() {
  return (
    <div>
      <HeaderComp text="FCC: Front End Libraries - Project 2, Markdown Previewer" />

      <MarkdownController />

      <FooterComp />
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
