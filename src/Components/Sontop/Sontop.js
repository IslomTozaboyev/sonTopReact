import "./Sontop.css";
import React, { Component } from "react";
import loseimg from "../../img/lose.png";
import winimg from "../../img/win.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRedoAlt } from "@fortawesome/free-solid-svg-icons";
import ReactJkMusicPlayer from 'react-jinke-music-player'
import 'react-jinke-music-player/assets/index.css'
import lose from "../../audio/losegame.wav";
import win from "../../audio/wingame.wav";


export default class Sontop extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: "",
      a: 10,
      b: false,
      c: false,
      son: Math.floor(Math.random() * 100),
      text: "",
      text1: "ta imkoniyatingiz bor",
    };

    console.log(this.state.son);
  }

 
  valueInput = (event) => {
    this.setState((state) => {
      console.log(event.target.value);
      return { value: event.target.value };
    });
  };

  find = () => {
    this.setState((state) => {
       if (this.state.son == this.state.value) {
        return { text: "Topdingiz", b: true };
      } else if (this.state.a == 1) {
        return {
          a: 0,
          text: "yutqazdingiz",
          c: true,
          text1: "Imkoniyatingiz tugadi",
          
        };
      } else if (this.state.son > this.state.value && this.state.value != "") {
        return { a: state.a - 1, text: "Kattaroq son kiriting" ,value: ""};
      } else if (this.state.son < this.state.value && this.state.value != "") {
        return { a: state.a - 1, text: "Kichikroq son kiriting" ,value: ""};
      }
    });
  };

  reload = () => {
    window.location.reload();
  };

  render() {
    return (
      <div className="FindContainer d-flex justify-content-center align-items-center">
        <div className="findText">
          <h1 className="title">
            <span className={this.state.c && "d-none"}>{this.state.a}</span>{" "}
            {this.state.text1}
          </h1>
          <p className="fs-4 fw-bold ">{ this.state.text}</p>
        </div>
        <div className="d-flex flex-column align-items-center content">
          <input
            className="form-control input shadow-none"
            type="text"
            placeholder="Komputer o'ylagan sonni toping"
            value={this.state.value}
            onChange={this.valueInput}
          />
          <button className="btn btn-primary mt-4" onClick={this.find}>
            Topdim
          </button>
      
        </div>

        <div
          className={`winContent d-flex justify-content-center align-items-center ${
            this.state.b && "winShow"
          } `}
        >
          <div className="p-5 flex-column d-flex position-relative justify-content-center align-items-center bg-light rounded-pill box">
            <img src={winimg} alt="" className="winimg" />
            <h1 className="my-3">Tabriklaymiz siz go'libsiz</h1>
            <button className="btn btn-primary" onClick={this.reload}>
              <FontAwesomeIcon icon={faRedoAlt}/>
            </button>
          </div>
        </div>

        {/* loseContent */}

        <div
          className={`loseContent d-flex justify-content-center align-items-center ${
            this.state.c && "loseShow"
          } `}
        >
          <div className="p-5 flex-column position-relative d-flex justify-content-center align-items-center bg-light rounded-pill box">
            <img src={loseimg} alt="" className="loseimg" />
            <h1 className="my-3">Afsuski yutqazdingiz!</h1>
            <button className="btn btn-primary" onClick={this.reload}>
            <FontAwesomeIcon icon={faRedoAlt}/>
            </button>
          </div>
        </div>
        <audio src={this.state.b && win || this.state.c && lose} className="visually-hidden" autoPlay></audio>
      </div>
      //fdff
    );
  }
}
