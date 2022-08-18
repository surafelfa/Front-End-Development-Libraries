class Previewer extends React.Component {
    render() {
        return ( 
            <div className='previewer outter-div'>
              <div className='header-div'>
                <div>(S) <span>Previewer</span></div>
                <div className='btn btn-previewer'><i className="fas fa-expand-arrows-alt"></i></div>
              </div>
              <div id="preview"  contentEditable='true' dangerouslySetInnerHTML={{ __html: marked.parse(this.props.userInput) }}></div>        
            </div>
         );
    }
}

class Editor extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            input: `
# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Here some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.
            
There's also [links](https://www.freecodecamp.org), and
> Block Quotes!
            
And if you want to get really crazy, even tables:
            
Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.
            
- And of course there are lists.
    - Some are bulleted.
        - With different indentation levels.
            - That look like this.
            
            
1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:
            
![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
`,
        }
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event){
        this.setState(
            {input: event.target.value}
        );
    }
    render() {
        return ( 
            <React.Fragment>
              <div className='editor outter-div'>
                <div className='header-div'>
                  <div>(S) <span>Editor</span></div>
                  <div className='btn btn-editor'><i className="fas fa-expand-arrows-alt"></i></div>
                </div>
                <textarea id='editor'
                  autofocus
                  onChange = {this.handleChange}
                  value = {this.state.input}

                />
              </div>
              <Previewer userInput = {this.state.input} />
            </React.Fragment>
         );
    }
}
$(document).ready(()=>{
    $('.btn-editor').on('click', ()=>{
    $('.btn-editor i').toggleClass('fa-expand-arrows-alt');
    $(".btn-editor i").toggleClass('fa-compress-alt');
    $('#editor').toggleClass('large');
    $('.previewer.outter-div').toggleClass('disappear');
   });

    $('.btn-previewer').on('click', ()=>{
    $('.btn-previewer i').toggleClass('fa-expand-arrows-alt');
    $(".btn-previewer i").toggleClass('fa-compress-alt');
    $('#preview').toggleClass('large');
    $('.editor.outter-div').toggleClass('disappear');
   })

})
ReactDOM.render(<Editor />, document.getElementById("root"));