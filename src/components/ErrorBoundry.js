import React, {Component} from "react";

class ErrorBoundry extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false
        } 
    }


    componenetDidCatch(error, info) {
        this.setState({ hasError: true})
    }

    render() {
        const {hasError} = ErrorBoundry;
        if(hasError){
            return <h1>Ooopss. Thats is not good</h1>
        }
        return this.props.children;
    }
}

export default ErrorBoundry