


class Calculator extends React.Component{
    constructor(props){
        super(props);
    }

    render(){

        return (
            <div className="calculator-wrapper">
                <div className="output label">&nbsp;</div>
                <div id="display" className="input label">0</div>
                <input type="button" value="AC" id="clear" />
                <input type="button" value="/" id="divide" className="operator"/>
                <input type="button" value="x" id="multiply"className="operator" />
                <input type="button" value="7" id="seven" />
                <input type="button" value="8" id="eight" />
                <input type="button" value="9" id="nine" />
                <input type="button" value="-" id="subtract" className="operator"/>
                <input type="button" value="4" id="four" />
                <input type="button" value="5" id="five" />
                <input type="button" value="6" id="six" />
                <input type="button" value="+" id="add" className="operator"/>
                <input type="button" value="1" id="one" />
                <input type="button" value="2" id="two" />
                <input type="button" value="3" id="three" />
                <input type="button" value="0" id="zero" />
                <input type="button" value="." id="decimal" />
                <input type="button" value="=" id="equals" />
            </div>
        );
    }
}

ReactDOM.render(<Calculator />, document.getElementById('root'))