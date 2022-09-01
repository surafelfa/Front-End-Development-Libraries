

class Clock extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            breakLenght: 5,
            sessionLength: 25,
            mm: 25,
        }
        this.breakDecrementClicked =  this.breakDecrementClicked.bind(this);
        this.breakIncrementClicked = this.breakIncrementClicked.bind(this);
        this.sessionDecrementClicked = this.sessionDecrementClicked.bind(this);
        this.sessionIncrementClicked = this.sessionIncrementClicked.bind(this);
        this.startTimer_mm = this.startTimer_mm.bind(this);
        this.startTimer_ss = this.startTimer_ss.bind(this);
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
    startTimer_ss(ss){
        let ssCounter = setInterval(()=>{
            --ss;
            if(ss == 0) clearInterval(ssCounter);
            if(second > 9) document.getElementById('ss').innerHTML = ss;
            else document.getElementById('ss').innerHTML = `0${ss}`;
        }, 1000);
    }
    startTimer_mm(mm){
        let mmCounter = setInterval(()=>{
            --mm;
            if(mm == 0) clearInterval(mmCounter);
            if(mm > 9) document.getElementById('mm').innerHTML = mm;
            else document.getElementById('mm').innerHTML = `0${mm}`;
                
            }, 60000);
    }
    reset(){
        this.setState({
            breakLenght: 5,
            sessionLength: 25,
            mm: 25,
        })
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
                    <span className="spacer">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
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
                        <span id="mm">{this.state.mm}</span>:<span id="ss">00</span>
                    </span>                   
                </div>
                <div className="clickable">
                    <button id="start_stop"><i className="fa fa-play"></i><i className="fa fa-pause"></i></button>
                    <button id="reset" onClick={this.reset}><i className="fa fa-arrows-rotate"></i></button>
                </div>
            </div>
        );
    }
}


ReactDOM.render(<Clock />, document.getElementById('root'));