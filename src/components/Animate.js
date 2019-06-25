import React, {Component} from 'react';
class Animate extends Component
{
    render()
    {
        return (<div className="box-area">
            <div id="spinner">
                <img src={this.props.imageSource} alt={this.props.imageSource} />
            </div>
        </div>);
    }
}
export default Animate;