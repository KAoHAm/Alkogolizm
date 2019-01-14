import React, {Component} from "react";
import {connect} from "react-redux";
import  CountComponent from "./CountComponent"
import {LOADING_Person} from "../constants/action-types";

const Alc = ["Bodka", "Wiskey", "Rum", "Cognac", "Wine", "Burbon", "Scotch", "Beer", "Champagne"]
const mapStateToProps = state => {
    return {persons: state.persons, count: state.count};
};
const mapDispatchToProps = dispatch=> {

    return{
        loadingPerson: () => dispatch({type: LOADING_Person, payload: { dispatch}})
    }
};
class MenuComponent extends Component{
    constructor(){
        super()
        this.alcohole=this.alcohole.bind(this)
    }
    alcohole(title){
        this.props.persons.map(el=>{
            if(el.Alcohol===title)
            console.log ("el", el)
        })
    }



    componentDidMount(){
        console.log(this.props)
    }

    render(){

        return(
            <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div><h2>Alcoholiks</h2></div>
                <CountComponent />
                <div>
                    {Alc.map((i, index)=>
                        <button
                            className="btn btn-success"
                            key={index}
                            onClick={this.alcohole(i)}>
                        {i}</button>) }

                </div>




            </nav>
            </div>
        )
    }
}

const Menu=connect(mapStateToProps, mapDispatchToProps)(MenuComponent)
export default Menu

/*
     constructor() {
        super();
        this.state = {
            showMenu: false,
        };

        this.showMenu = this.showMenu.bind(this);
    }
        showMenu(event) {
            event.preventDefault();

        this.setState((prev)=>{
                return {showMenu: !prev.showMenu}
            });
        }
    <div className="dropdown">
                    <button  type="button" className="btn btn-danger"onClick={this.showMenu}>
                        Show menu
                    </button>
                    {
                        this.state.showMenu ? (
                            <form className="menu" ref={(element) => {
                                        this.dropdownMenu = element;
                                    }}>
                                    <button className="dropdown-item" > Menu item 1 </button>
                                    <button className="dropdown-item"> Menu item 2 </button>
                                    <button className="dropdown-item"> Menu item 3 </button>
                                </form>)
                            : null}

                </div>*/