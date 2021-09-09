import React, { Component } from "react";


class ReadString extends Component{
    componentDidMount() {
        const { drizzle, drizzleState } = this.props;
        console.log(drizzle);
        console.log(drizzleState);
        
    }

    render() {
        return <div> ReadString Component</div>
    }
}

export default ReadString;