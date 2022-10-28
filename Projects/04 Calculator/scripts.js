class Calculator extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.reset = this.reset.bind(this);
    this.displayNumber = this.displayNumber.bind(this);
    this.operatorClicked = this.operatorClicked.bind(this);
    this.calculate = this.calculate.bind(this);
    this.state = {
      userInput: "0",
      output: "0",
    };
  }
  reset() {
    //resetting the calculator
    this.setState({
      userInput: "0",
      output: "0",
    });
  }
  displayNumber(value) {
    // checking whether a user input is a valid number
    if (
      /(^[1-9]|^0\.|^[1-9][0-9]*\.)[0-9]*$/.test(this.state.userInput + value)
    ) {
      this.setState((state) => ({
        userInput: state.userInput + value,
        output: state.output + value,
      }));
    }
    // accepting the first single digit number
    else if (this.state.userInput == "0") {
      this.setState({
        userInput: value,
        output: value,
      });
    }
    // if there is an operator at last index, change the value 'userInput' with the new one
    else if ("/*-+".includes(this.state.userInput) && value == ".") {
      this.setState((state) => ({
        userInput: "0.",
        output: state.output + "0.",
      }));
    } else if (
      "/*-+".includes(this.state.userInput) &&
      "0123456789".includes(value)
    ) {
      this.setState((state) => ({
        userInput: value,
        output: state.output + value,
      }));
    }
  }
  operatorClicked(value) {
    if (/[\d\.][\/\*\-\+]$/.test(this.state.output + value)) {
      this.setState((state) => ({
        userInput: value,
        output: state.output + value,
      }));
    } else if (/[\/\*\+]\-$/.test(this.state.output + value)) {
      this.setState((state) => ({
        userInput: value,
        output: state.output + value,
      }));
    } else if (/[\/\*\+]\-[\/\*\+]$/.test(this.state.output + value)) {
      this.setState((state) => ({
        userInput: value,
        output: state.output.replace(/[\/\*\+]-$/, value),
      }));
    } else {
      this.setState((state) => ({
        userInput: value,
        output: state.output.replace(/[\/\*\-\+]$/, value),
      }));
    }
  }
  calculate() {
    this.setState((state) => ({
      output: state.output.replace(/[\/\*\-\+\.]$/, ""),
    }));
    this.setState((state) => ({
      userInput: eval(state.output),
      output: eval(state.output),
    }));
  }
  handleClick(event) {
    let value = event.target.value;
    if (event.target.id === "clear") {
      this.reset();
    } else if (".0123456789".includes(value)) {
      if (this.state.userInput.length != 20) this.displayNumber(value);
    } else if ("/*-+".includes(value)) {
      this.operatorClicked(value);
    } else if (event.target.id === "equals") {
      this.calculate();
    }
  }
  render() {
    return (
      <div className="calculator-wrapper">
        <div className="output label">{this.state.output}</div>
        <div id="display" className="user-input label">
          {this.state.userInput}
        </div>
        <input type="button" value="AC" id="clear" onClick={this.handleClick} />
        <input
          type="button"
          value="/"
          id="divide"
          onClick={this.handleClick}
          className="operator"
        />
        <input
          type="button"
          value="*"
          id="multiply"
          onClick={this.handleClick}
          className="operator"
        />
        <input type="button" value="7" id="seven" onClick={this.handleClick} />
        <input type="button" value="8" id="eight" onClick={this.handleClick} />
        <input type="button" value="9" id="nine" onClick={this.handleClick} />
        <input
          type="button"
          value="-"
          id="subtract"
          onClick={this.handleClick}
          className="operator"
        />
        <input type="button" value="4" id="four" onClick={this.handleClick} />
        <input type="button" value="5" id="five" onClick={this.handleClick} />
        <input type="button" value="6" id="six" onClick={this.handleClick} />
        <input
          type="button"
          value="+"
          id="add"
          onClick={this.handleClick}
          className="operator"
        />
        <input type="button" value="1" id="one" onClick={this.handleClick} />
        <input type="button" value="2" id="two" onClick={this.handleClick} />
        <input type="button" value="3" id="three" onClick={this.handleClick} />
        <input type="button" value="0" id="zero" onClick={this.handleClick} />
        <input
          type="button"
          value="."
          id="decimal"
          onClick={this.handleClick}
        />
        <input type="button" value="=" id="equals" onClick={this.handleClick} />
      </div>
    );
  }
}

ReactDOM.render(<Calculator />, document.getElementById("root"));
