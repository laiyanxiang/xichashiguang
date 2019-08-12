import React, { Component } from 'react';

function Error(){
    return(
        <div>
            <h1>出错了！</h1>
        </div>
    )
}

class ErrorBoundary extends Component {

    state = {
        isError:false
    }


    componentDidCatch(error,info){
        this.setState({isError:true});
        //将版本信息，错误信息提交给后台
    }
    render() {
        return (
            <div>
                {
                    this.state.isError?<Error/>:this.props.children
                }
            </div>
            );
    }
}

export default ErrorBoundary;