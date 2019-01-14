import React, {Component} from "react";
import {connect} from "react-redux";
import {addPerson} from "../action/index";
const randomProfile = require('random-profile-generator');
const momentRandom = require('moment-random');
const mapDispatchToProps = dispatch => {
    return {
        addPerson: person  => dispatch(addPerson(person))
    };
};
const randomNumber=(max)=>{
    return Math.ceil(Math.random()*max)
}
const getDateTime=(unixTime)=> {
    let d = new Date(unixTime);
    let y=d.getFullYear()
    let h = (d.getHours().toString().length === 1) ? ('0' + d.getHours()) : d.getHours();
    let m = (d.getMinutes().toString().length === 1) ? ('0' + d.getMinutes()) : d.getMinutes();
    let s = (d.getSeconds().toString().length === 1) ? ('0' + d.getSeconds()) : d.getSeconds();
    let day = (d.getDate().toString().length === 1) ? ('0' + d.getDate()) : d.getDate();
    let mount=["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Oug", "Sep", "Oct", "Nov", "Dec" ];
    let mi = d.getMonth()
    let time = h + ':' + m +":"+s+" "+day+" "+ mount[mi]+" "+y;
    return time;
}
let num=0;
const Alc = ["Bodka", "Wiskey", "Rum", "Cognac", "Wine", "Burbon", "Scotch", "Beer", "Champagne"],
    initalState={
    name: "", gender: "", date:"", alcohol:"", cup: ""
};
class AddComponent extends Component {
    constructor() {
        super();
        this.state =initalState
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    addMale(){
        let alcohol = Alc[randomNumber(9)- 1],
            cup = randomNumber(20),
            date = getDateTime(momentRandom({}, "2018-01-01")._i),
            gender="Male",
            name = randomProfile.name(gender),
            count=num++;
      this.state={name, gender, date, alcohol, cup, count}
      this.props.addPerson(this.state)
}
    addFemale(){
        let alcohol = Alc[randomNumber(9)- 1],
            cup = randomNumber(20),
            date = getDateTime(momentRandom({}, "2018-01-01")._i),
            gender="Female",
            name = randomProfile.name(gender),
            count=num++;
       this.state={name, gender, date, alcohol,cup, count}
        this.props.addPerson(this.state)
    }

    handleSubmit(event) {
        event.preventDefault();
        this.addMale()
        this.addFemale()
        this.setState(initalState)
    }

    render() {
        return (
            <div>
            <form onSubmit={this.handleSubmit}>
                <button type="submit" className="btn btn-success btn-lg">
                    SAVE
                </button>
            </form>
            </div>
    );
    }
}

const Add = connect(null, mapDispatchToProps)(AddComponent);
export default Add;