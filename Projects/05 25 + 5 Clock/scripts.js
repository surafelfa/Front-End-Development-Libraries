
class Clock extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            breakLenght: 5,
            sessionLength: 25,
            timeCounter: 1500,
            intervalID: undefined,
            isSession: true,
            isRunning: false,
        }
        this.timeFormatter = this.timeFormatter.bind(this);
        this.breakDecrementClicked =  this.breakDecrementClicked.bind(this);
        this.breakIncrementClicked = this.breakIncrementClicked.bind(this);
        this.sessionDecrementClicked = this.sessionDecrementClicked.bind(this);
        this.sessionIncrementClicked = this.sessionIncrementClicked.bind(this);
        this.startSession = this.startSession.bind(this);
        this.startBreak = this.startBreak.bind(this);
        this.startTimeCounter = this.startTimeCounter.bind(this);
        this.reset = this.reset.bind(this);
    }
    timeFormatter(seconds){
        let mm = Math.floor(seconds/60);
        let ss = seconds % 60;
        if (mm < 10) mm = "0" + mm;
        if(ss < 10) ss = "0"+ ss;
        
        return mm + ":" + ss;
    }
    breakDecrementClicked(){
        if(this.state.breakLenght > 1){
            this.setState( state =>({
                breakLenght: --state.breakLenght,
            }));
        }
    }
    breakIncrementClicked(){
        if(this.state.breakLenght < 60){
            this.setState( state =>({
                breakLenght: ++state.breakLenght,
            }));
        }
    }
    sessionDecrementClicked(){
        if(this.state.sessionLength > 1){
            this.setState( state =>({
                sessionLength: --state.sessionLength,
                timeCounter: state.timeCounter - 60,
            }));
        }
    }
    sessionIncrementClicked(){
        if(this.state.sessionLength < 60){
            this.setState( state =>({
                sessionLength: ++state.sessionLength,
                timeCounter: state.timeCounter + 60,
            }));
        }
    }
    startBreak(){
        this.setState({
            intervalID: setInterval(()=>{
                if(this.state.timeCounter === 0){//session should start as break ends
                    this.setState( state =>({
                        timeCounter: state.sessionLength * 60, 
                        isSession: true,
                    }));
                    clearInterval(this.state.intervalID);
                    document.getElementById("timer-label").innerText = 'Session';
                    document.getElementById('beep').play();
                    this.startSession();
                }else{
                    this.setState(state =>({
                        timeCounter: --state.timeCounter,
                    }));
                }         
            }, 1000)
        });
    }
    startSession(){
        this.setState({
            intervalID: setInterval(()=>{
                if(this.state.timeCounter === 0){//break should start as session ends
                    this.setState( state =>({
                        timeCounter: state.breakLenght * 60,
                        isSession: false,
                    }));
                    clearInterval(this.state.intervalID);
                    document.getElementById("timer-label").innerText = 'Break';
                    document.getElementById('beep').play();
                    this.startBreak();
                }else{
                    this.setState(state =>({
                        timeCounter: --state.timeCounter,
                    }));
                }         
            }, 1000)
        });
    }
    startTimeCounter(){
        if(!this.state.isRunning){
            this.setState({
                isRunning: true,
            });
            if(this.state.isSession){
                this.startSession();
            }else{
                this.startBreak();
            }
        }
        else{
            this.setState({
                isRunning: false,
            });
            clearInterval(this.state.intervalID)
        }
    }
    reset(){
        this.setState({
            breakLenght: 5,
            sessionLength: 25,
            timeCounter: 1500,
            isSession: true,
            isRunning: false
        });
        clearInterval(this.state.intervalID);
        document.querySelector('audio').pause();
        document.querySelector('audio').currentTime = 0;
        document.getElementById("timer-label").innerText = 'Session';
    }
    render(){

        return(
            <div className="main-wrapper">
                <h1>25 + 5 Clock</h1>
                <div className="break-session-wrapper">
                    <span className="break-wrapper">
                        <h2 id="break-label">
                            Break Length
                        </h2>
                        <i id="break-decrement" className="fas fa-arrow-down" onClick={this.breakDecrementClicked}></i>
                        <h3 id="break-length"> {this.state.breakLenght} </h3>
                        <i id="break-increment" className="fas fa-arrow-up" onClick={this.breakIncrementClicked}></i>
                    </span>
                    <span className="session-wrapper">
                        <h2 id="session-label">
                            Session Length
                        </h2>
                        <i id="session-decrement" className="fas fa-arrow-down" onClick={this.sessionDecrementClicked}></i>
                        <h3 id="session-length"> {this.state.sessionLength} </h3>
                        <i id="session-increment" className="fas fa-arrow-up" onClick={this.sessionIncrementClicked}></i>
                    </span>
                </div>
                <div className="timer">
                    <h2 id="timer-label">Session</h2>
                    <span id="time-left">
                        {this.timeFormatter(this.state.timeCounter)}
                    </span>                   
                </div>
                <div className="clickable">
                    <button id="start_stop" onClick={this.startTimeCounter}><span id="play-pause"><i className="fa fa-play"></i><i className="fa fa-pause"></i></span></button>
                    <button id="reset" onClick={this.reset}><i className="fa fa-arrows-rotate"></i></button>
                </div>
                <audio id="beep"type="audio/mp3" 
                src="https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav"></audio>
            </div>
        );
    }
}


ReactDOM.render(<Clock />, document.getElementById('root'));