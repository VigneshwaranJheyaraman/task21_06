import React, {Component} from 'react';
class Toogler extends Component
{
    constructor(props)
    {
        super(props);
        this.state={checkerBool:false}
        this.handleToggleClick = this.handleToggleClick.bind(this);
    }
    handleToggleClick(e)
    {
        var old_val = this.state.checkerBool;
        this.setState({checkerBool:!old_val});
    }
    render()
    {
        return (<div className="box-area">
                    <div className="inner-box-area">
                    <label className="toggler" onClick={this.handleToggleClick}>
                        <input type="checkbox" checked={this.state.checkerBool} />
                        <span className="toggleSlide"/>
                    </label>
                </div>
            </div>
        );
    }

}
export default Toogler;