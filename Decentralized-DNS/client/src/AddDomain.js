import React, { Component } from "react";


class AddDomain extends Component{
    componentDidMount() {
        const { drizzle, drizzleState } = this.props;
        console.log(drizzle);
        console.log(drizzleState);
        
    }

    render() {
        return <div> Add Domain Page</div>
    }
}

export default AddDomain;