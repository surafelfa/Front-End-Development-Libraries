

class Clock extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            breakLenght: 5,
            sessionLength: 25,
        }
    }
    render(){

        return(
            <div className="main-wrapper">
                <h1>25 + 5 Clock</h1>
                <div className="break-session-wrapper">
                    <span className="break-wrapper">
                        <div id="break-label">
                            Break Length
                        </div>
                        <i id="break-decrement" className="fas fa-arrow-down"></i>
                        <span id="break-length"> {this.state.breakLenght} </span>
                        <i id="break-increment" className="fas fa-arrow-up"></i>
                    </span>
                    <span className="spacer">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                    <span className="session-wrapper">
                        <div id="session-label">
                            Session Length
                        </div>
                        <i id="session-decrement" className="fas fa-arrow-down"></i>
                        <span id="session-length"> {this.state.sessionLength} </span>
                        <i id="session-increment" className="fas fa-arrow-up"></i>
                    </span>
                </div>
                <div className="timer">
                    <p id="timer-label">Session</p>
                    <span id="time-left">
                        25:00
                    </span>                   
                </div>
                <div className="clickable">
                    <button id="start_stop"><i className="fa fa-play"></i><i className="fa fa-pause"></i></button>
                    <button id="reset"><i className="fa fa-arrows-rotate"></i></button>
                </div>
            </div>
        );
    }
}


ReactDOM.render(<Clock />, document.getElementById('root'));