import React, {Component} from "react";
import {connect} from "react-redux";
import {LOADING_Person } from "../constants/action-types";

const mapStateToProps = state => {
    return {persons: state.persons, count: state.count, };
};

class Pagination extends Component {
    constructor() {
        super();
        this.state = {
            currentPage: 1,
            todosPerPage: 8,

        };
        /*  this.handleClick = this.handleClick.bind(this);
          this.goFirstPage = this.goFirstPage.bind(this);
          this.goPrevPage = this.goPrevPage.bind(this);
          this.goLastPage = this.goLastPage.bind(this);
          this.goNextPage = this.goNextPage.bind(this);*/
    }

    render (){
        this.state.count=Math.ceil(this.props.count/this.state.todosPerPage)
        const pageNumbers = [];
        for (let i = 1; i <= this.state.count; i++) {
            pageNumbers.push(i);
        }
        const renderPageNumbers = pageNumbers.map(number => {
            return (
                <li className="page-item"
                    key={number}
                    id={number}
                    onClick={this.handleClick}

                >
                    {number}
                </li>
            );
        });
        return (
            <div>
                <ul className="pagination pagination-md" id="page-numbers">
                {renderPageNumbers}
            </ul>
            </div>
        )
    }
}

const Page = connect(mapStateToProps)(Pagination);
export default Page