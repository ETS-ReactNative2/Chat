import React from 'react';



class BoilingVerdict extends React.Component {


    render() {
        return(
            <div>
                {this.props.celsius >= 100 ?
                    <p>The water would boil</p>
                :
                    <p>The water would not boil</p>
                }

            </div>
        )

    }
}

export default BoilingVerdict;