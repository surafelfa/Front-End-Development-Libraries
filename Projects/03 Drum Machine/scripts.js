const audioURL = {
    Q:[
        'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3',
        'https://s3.amazonaws.com/freecodecamp/drums/Chord_1.mp3'
    ],
    W:[
        'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3',
        'https://s3.amazonaws.com/freecodecamp/drums/Chord_2.mp3'
    ],
    E:[
        'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3',
        'https://s3.amazonaws.com/freecodecamp/drums/Chord_3.mp3'
    ],
    A:[
        'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3',
        'https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3'
    ],
    S:[
        'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3',
        'https://s3.amazonaws.com/freecodecamp/drums/Dry_Ohh.mp3'
    ],
    D:[
        'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3',
        'https://s3.amazonaws.com/freecodecamp/drums/Bld_H1.mp3'
    ],
    Z:[
        'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3',
        'https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3'
    ],
    X:[
        'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3',
        'https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3'
    ],
    C:[
        'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3',
        'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3'
    ],
}
$(document).ready(()=>{
    $(document).on("keydown", event=>{
        let pressedKey = event.code[event.code.length-1]
        let regex = new RegExp(pressedKey);
        if(regex.test('QWEASDZXC')){
            document.getElementById(pressedKey).play();
            $('#display').text(pressedKey);
        }
    })
})
class DrumMachine extends React.Component{
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(event){
        let target = event.target.firstChild.id
        document.getElementById(target).play();
        $('#display').text(target)
    }
       
    render(){
        return (
            <div id="drum-machine">
                <div className="drum-pads left-div">
                    <span className="drum-pad" id="Heater-1" onClick={this.handleClick} >
                        <audio className="clip" id="Q"  type="audio/mp3" src={audioURL.Q[0]}></audio>
                        Q
                    </span>
                    <span className="drum-pad" id="Heater-2" onClick={this.handleClick}>
                        <audio className="clip" id="W"  type="audio/mp3" src={audioURL.W[0]}></audio>
                        W
                    </span>
                    <span className="drum-pad" id="Heater-3" onClick={this.handleClick}>
                        <audio className="clip" id="E"  type="audio/mp3" src={audioURL.E[0]}></audio>
                        E
                    </span>
                    <span className="drum-pad" id="Heater-4" onClick={this.handleClick}>
                        <audio className="clip" id="A"  type="audio/mp3" src={audioURL.A[0]}></audio>
                        A
                    </span>
                    <span className="drum-pad" id="Heater-6" onClick={this.handleClick}>
                        <audio className="clip" id="S"  type="audio/mp3" src={audioURL.S[0]}></audio>
                        S
                    </span>
                    <span className="drum-pad" id="Dsc-Oh" onClick={this.handleClick}>
                        <audio className="clip" id="D"  type="audio/mp3" src={audioURL.D[0]}></audio>
                        D
                    </span>
                    <span className="drum-pad" id="Kick-n-Hat" onClick={this.handleClick}>
                        <audio className="clip" id="Z"  type="audio/mp3" src={audioURL.Z[0]}></audio>
                        Z
                    </span>
                    <span className="drum-pad" id="RP4-KICK-1" onClick={this.handleClick}>
                        <audio className="clip" id="X"  type="audio/mp3" src={audioURL.X[0]}></audio>
                        X
                    </span>
                    <span className="drum-pad" id="Cev_H2" onClick={this.handleClick}>
                        <audio className="clip" id="C"  type="audio/mp3" src={audioURL.C[0]}></audio>
                        C
                    </span>
                </div>
                <div className="right-div">
                    <span id="display">
                            
                    </span>  
                </div>
            </div>
        );
    }
    
}

ReactDOM.render(<DrumMachine />, document.getElementById('root'));