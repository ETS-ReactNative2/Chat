import React from 'react';



class Test extends React.Component {
    constructor(props) {
        super(props);
        this.state={
           // hight:"100px"
            height:this.props.height
        }
    }
    componentDidMount(){
        this.setState({
            height:"200px"
        })
    }

    render() {
        return(
            <div>
            {this.state.height}

            <div>hello</div>

            </div>
        )

    }
}

export default Test;
