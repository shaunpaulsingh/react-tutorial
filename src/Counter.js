import React from "react";
import {Component} from 'react';

class Counter extends Component{
    constructor(props){
        super(props);

        this.state = {
            records: this.props.dataParentToChild
        }
    }

    componentDidUpdate(prevProps) {
        if (this.props.dataParentToChild !== prevProps.dataParentToChild) {

        this.setState({ 
            records: this.props.dataParentToChild
        });
        }
    }

    render(){
        return (
            <div>
                <div>Number of Records: </div>
                <span>{this.state.records} of records</span>
            </div>
        );
    }
}

export default Counter;