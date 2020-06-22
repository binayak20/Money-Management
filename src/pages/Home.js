import React, { Component } from 'react'
export default class Home extends Component {
    constructor(props) {
        super(props);
        // this.state = {
        //     hasMedia: false,
        //     //   otherUserId: null
        // }
        //   this.mediaHandler = new MediaHandler()
        // this.state = {
        //     activeDrags: 0,
        //     videoStyle: videoSmall
        // }
        //this.localVideoref = React.createRef();
        // this.textInput = null;
        // this.localVideoref = element => {
        //     this.textInput = element;
        // };
        this.localVideoref = React.createRef()
        //  this.remoteVideoref = React.createRef()
    }
    render() {

        console.log(this.localVideoref)
        const constraints = { video: true }
        const success = (stream) => {
            this.localVideoref.current.srcObject = stream
        }
        const failure = e => {
            console.log('GetUsermedia Error: ', e)
        }
        navigator.getUserMedia(constraints, success, failure)
        // navigator.mediaDevices.getUserMedia(constraints)
        //     .then(success)
        //     .catch(failure)
        return (
            <div
            //className="video-container"
            >
                <video
                    //   ref={this.video}
                    ref={this.localVideoref}
                    //  className="my-video"
                    //ref={(ref) => { this.myVideo = ref; }}
                    //id="video"
                    // loop
                    autoPlay
                // controls
                // controlsList="nodownload"
                > </video>
                {/* <video
                        //   ref={this.video}
                        ref={this.remoteVideoref}
                        className="user-video"
                        // ref={(ref) => { this.myVideo = ref; }}
                        //id="video"
                        //  loop
                        autoPlay
                    // controls
                    // controlsList="nodownload"
                    ></video> */}


                {/* <video
                        // style={this.state.videoStyle}
                        ref={this.localVideoref}
                        autoPlay
                    // disablePictureInPicture
                    // loop
                    // controls
                    // controlsList="nodownload"
                    /> */}
            </div>
        )
    }
}
