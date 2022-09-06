import React, { Component } from 'react';
import FallbackUI from '../Components/FallbackUI';

export default class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false,
        };
    }

    static getDerivedStateFromError(error) {
        console.log("getDerivedFromError is exicuted");
        console.log(error);
        return {
            hasError: true,
        };
    }

    componentDidCatch(error, info) {
        console.log("componentDidCatch is exicuted");
        console.log(error);
        console.log(info);
    }
    render() {
        {
            if (this.state.hasError) {
                return (
                    <div>
                        <FallbackUI />
                    </div>
                );
            } else {
                return this.props.children;
            }
        }
    }
}
