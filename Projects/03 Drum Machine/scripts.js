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
        this.handlePowerClick = this.handlePowerClick.bind(this);
        this.handleBankClick = this.handleBankClick.bind(this);
        this.handleVolume = this.handleVolume.bind(this);
        //this.modifyIndex = this.modifyIndex.bind(this);
    }
    handleClick(event){
        if(!document.getElementById('power').classList.contains('off')){
            let target = event.target.firstChild.id;
            document.getElementById(target).play();
            $('#display').text(target)
        }
    }
    handlePowerClick(event){
        let target = event.target.firstChild.id;
        document.getElementById(target).classList.toggle('off');
        $('#display').text('');
        
    }
    handleBankClick(event){
        let target = event.target.firstChild.id;
        if(document.getElementById(target).classList.toggle('off')){
            $('#display').text('Heater Kit');
            //this.modifyIndex(0);
        }else{
            $('#display').text('Smooth Piano Kit');
            //this.modifyIndex(1)
        }
    }
    handleVolume(){
        let volume = document.getElementById('customranges').value;
        let audios = document.querySelectorAll('audio');
        $('#display').text(`Volume: ${volume}`);
        audios.forEach(audio=>{
            audio.volume = volume/100;
        })
    }
    render(){
        return (
            <div id="drum-machine">
                <div className="drum-pads left-div">
                    <span className="drum-pad" id="Heater-1" onClick={this.handleClick} >
                        <audio className="clip" id="Q"  type="audio/mp3" src={audioURL.Q[1]}></audio>
                        Q
                    </span>
                    <span className="drum-pad" id="Heater-2" onClick={this.handleClick}>
                        <audio className="clip" id="W"  type="audio/mp3" src={audioURL.W[1]}></audio>
                        W
                    </span>
                    <span className="drum-pad" id="Heater-3" onClick={this.handleClick}>
                        <audio className="clip" id="E"  type="audio/mp3" src={audioURL.E[1]}></audio>
                        E
                    </span>
                    <span className="drum-pad" id="Heater-4" onClick={this.handleClick}>
                        <audio className="clip" id="A"  type="audio/mp3" src={audioURL.A[1]}></audio>
                        A
                    </span>
                    <span className="drum-pad" id="Heater-6" onClick={this.handleClick}>
                        <audio className="clip" id="S"  type="audio/mp3" src={audioURL.S[1]}></audio>
                        S
                    </span>
                    <span className="drum-pad" id="Dsc-Oh" onClick={this.handleClick}>
                        <audio className="clip" id="D"  type="audio/mp3" src={audioURL.D[1]}></audio>
                        D
                    </span>
                    <span className="drum-pad" id="Kick-n-Hat" onClick={this.handleClick}>
                        <audio className="clip" id="Z"  type="audio/mp3" src={audioURL.Z[1]}></audio>
                        Z
                    </span>
                    <span className="drum-pad" id="RP4-KICK-1" onClick={this.handleClick}>
                        <audio className="clip" id="X"  type="audio/mp3" src={audioURL.X[1]}></audio>
                        X
                    </span>
                    <span className="drum-pad" id="Cev_H2" onClick={this.handleClick}>
                        <audio className="clip" id="C"  type="audio/mp3" src={audioURL.C[1]}></audio>
                        C
                    </span>
                </div>
                <div className="right-div">
                    <div className="on-off-wrapper">
                        <p>Power</p>
                        <span className="switch" onClick={this.handlePowerClick}>
                            <span className="on-off" id="power"></span>
                        </span>
                    </div>
                    <div id="display">
                            
                    </div>
                    <div class="volume-wrapper">
                        <input type="range" min="0" max="100" id="customranges" className="form-range" onInput={this.handleVolume}/>
                    </div>
                    <div className="on-off-wrapper">
                        <p>Bank</p>
                        <span className="switch" onClick={this.handleBankClick}>
                            <span className="on-off" id="bank"></span>
                        </span>
                    </div>
                </div>
            </div>
        );
    }
    
}

ReactDOM.render(<DrumMachine />, document.getElementById('root'));