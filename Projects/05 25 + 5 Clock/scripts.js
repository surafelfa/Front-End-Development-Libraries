
class Clock extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            breakLenght: 5,
            sessionLength: 25,
            mm: 25,
            ss: 0,
            counter: undefined,
            isPlayed: true,
        }
        this.breakDecrementClicked =  this.breakDecrementClicked.bind(this);
        this.breakIncrementClicked = this.breakIncrementClicked.bind(this);
        this.sessionDecrementClicked = this.sessionDecrementClicked.bind(this);
        this.sessionIncrementClicked = this.sessionIncrementClicked.bind(this);
        this.startSession = this.startSession.bind(this);
        this.startBreak = this.startBreak.bind(this);
        this.reset = this.reset.bind(this);
    }
    breakDecrementClicked(){
        if(this.state.breakLenght > 1){
            this.setState( state =>({
                breakLenght: --state.breakLenght,
            }));
        }
    }
    breakIncrementClicked(){
        if(this.state.breakLenght < 5){
            this.setState( state =>({
                breakLenght: ++state.breakLenght,
            }));
        }
    }
    sessionDecrementClicked(){
        if(this.state.sessionLength > 1){
            this.setState( state =>({
                sessionLength: --state.sessionLength,
                mm: --state.mm,
            }));
        }
    }
    sessionIncrementClicked(){
        if(this.state.sessionLength < 60){
            this.setState( state =>({
                sessionLength: ++state.sessionLength,
                mm: ++state.mm,
            }));
        }
    }
    startBreak(){
        this.setState({
            counter: setInterval(()=>{
                if(this.state.mm == 0 && this.state.ss == 0){//session should start as break ends
                    this.setState( state =>({
                        mm: state.sessionLength, 
                    }));
                    clearInterval(this.state.counter);
                    document.getElementById("timer-label").innerText = 'Session';
                    this.startSession();
                }else if(this.state.ss == 0 && this.state.mm != 0){
                    this.setState(state =>({
                        mm: --state.mm,
                        ss: 59
                    }));
                }else{
                    this.setState(state =>({
                        ss: --state.ss,
                    }));
                }         
            }, 1000)
        });
    }
    startSession(){
        this.setState({
            counter: setInterval(()=>{
                if(this.state.mm == 0 && this.state.ss == 0){//break should start as session ends
                    this.setState( state =>({
                        mm: state.breakLenght, 
                    }));
                    clearInterval(this.state.counter);
                    document.getElementById("timer-label").innerText = 'Break';
                    this.startBreak();
                }else if(this.state.ss == 0 && this.state.mm != 0){
                    this.setState(state =>({
                        mm: --state.mm,
                        ss: 59
                    }));
                }else{
                    this.setState(state =>({
                        ss: --state.ss,
                    }));
                }         
            }, 1000)
        });
    }
    reset(){
        this.setState({
            breakLenght: 5,
            sessionLength: 25,
            mm: 25,
            ss: 0,
            
        });
        clearInterval(this.state.counter);
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
                        <i id="break-decrement" className="fas fa-arrow-down" onClick={this.breakDecrementClicked}></i>
                        <span id="break-length"> {this.state.breakLenght} </span>
                        <i id="break-increment" className="fas fa-arrow-up" onClick={this.breakIncrementClicked}></i>
                    </span>
                    <span className="spacer">&emsp;&emsp;</span>
                    <span className="session-wrapper">
                        <div id="session-label">
                            Session Length
                        </div>
                        <i id="session-decrement" className="fas fa-arrow-down" onClick={this.sessionDecrementClicked}></i>
                        <span id="session-length"> {this.state.sessionLength} </span>
                        <i id="session-increment" className="fas fa-arrow-up" onClick={this.sessionIncrementClicked}></i>
                    </span>
                </div>
                <div className="timer">
                    <p id="timer-label">Session</p>
                    <span id="time-left">
                        <span id="mm">{(this.state.mm > 9) ? this.state.mm : `0${this.state.mm}`}</span>:<span id="ss">{(this.state.ss>9) ? this.state.ss : `0${this.state.ss}`}</span>
                    </span>                   
                </div>
                <div className="clickable">
                    <button id="start_stop" onClick={this.startSession}><span id="play-pause"><i className="fa fa-play"></i><i className="fa fa-pause"></i></span></button>
                    <button id="reset" onClick={this.reset}><i className="fa fa-arrows-rotate"></i></button>
                </div>
            </div>
        );
    }
}


ReactDOM.render(<Clock />, document.getElementById('root'));