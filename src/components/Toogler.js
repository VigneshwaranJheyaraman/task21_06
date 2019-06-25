import React, {Component} from 'react';
class Toogler extends Component
{
    constructor(props)
    {
        super(props);
        this.state={mcheckerBool:false, kcheckerBool:true};
        this.handleToggleClick = this.handleToggleClick.bind(this);
    }
    handleToggleClick(mOk,e)
    {
        if(mOk === "m")
        {
            let old_val = this.state.mcheckerBool;
            this.setState({mcheckerBool:!old_val}, () =>{
                this.props.onUpdate(this.state.mcheckerBool ? "Mouse is turned on" : "Mouse is turned off");});
        }
        else
        {
            let old_val = this.state.kcheckerBool;
            this.setState({kcheckerBool:!old_val}, () =>{
                this.props.onUpdate(this.state.kcheckerBool ? "Keyboard is turned on" : "keyboard is turned off");});
        }
    }
    render()
    {
        return (<div className="box-area">
                    <div className="inner-box-area">Mouse:
                    <label className="toggle" >
                        <input type="checkbox"  checked={this.state.mcheckerBool} onChange={(e)=>{e.preventDefault()}}/>
                        <span className="toggleSlide" onClick={(e) => {this.handleToggleClick("m",e)}}/>
                    </label>
                    <br />
                    <hr />Keyboard:
                    <label className="toggle" >
                        <input type="checkbox"  checked={this.state.kcheckerBool} onChange={(e)=>{e.preventDefault()}}/>
                        <span className="toggleSlide" onClick={(e) => {this.handleToggleClick("k",e)}}/>
                    </label>
                </div>
            </div>
        );
    }

}
export default Toogler;