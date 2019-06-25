import React, {Component} from 'react';
class DropDown extends Component
{
    constructor(props)
    {
        super(props);
        this.state ={
            lists: [
                'Option 1',
                'Option 2',
                'Option 3',
                'Option 4',
                'Option 5'
            ]
        };
        this.onOptionSelected = this.onOptionSelected.bind(this);
    }
    onOptionSelected(selected_value)
    {
        alert("The value you selected is "+ selected_value);
    }
    render()
    {
        return (<div className="box-area">
            <div className="inner-box-area">
                <select onChange={(e) => {this.onOptionSelected(e.target.value)}} className="selector">
                    {this.state.lists.map((v,i) => {
                        return <option key={i}>{v}</option>;
                    })}
                </select>
            </div>
        </div>)
    }
}
export default DropDown;