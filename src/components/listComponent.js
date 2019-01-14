import React, {Component} from "react";
import {connect} from "react-redux";
import Person from "./personListComponent"
import Page from "./paginationComponent"
import {loadingPerson} from "../action/index"
import {LOADING_Person} from "../constants/action-types";

const url = "http://localhost:3001"
const mapStateToProps = state => {

    return {persons: state.persons, count: state.count};
};
const mapDispatchToProps = dispatch=> {

    return{
        loadingPerson: () => dispatch({type: LOADING_Person, payload: { dispatch}})
    }
};
class ListComponent extends Component {
componentDidMount(){

}
    render() {

        const    renderPersons = () => {
           this.props.loadingPerson()
            return this.props.persons.map((el, index) =>

                <Person  key={el._id} el={el}/>)
        }
        return (
            <div>
            <table className="table table-bordered" onLoad={this.handleSubmit}>
                <thead className="thead-dark table-striped">
                < tr  >
                    <th scope="col">Name </th>
                    <th scope="col">Gender </th>
                    <th scope="col">Date </th>
                    <th scope="col">Alcohol </th>
                    <th scope="col">cup </th>
                </tr >
                </thead>
                    {renderPersons()}

            </table >

            </div>

        )
    }
}
const List=connect(mapStateToProps, mapDispatchToProps)(ListComponent)
export default List

