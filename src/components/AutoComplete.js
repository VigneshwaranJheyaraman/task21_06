import React, {Component} from 'react';
class AutoComplete extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            userInput: '',
             fruits:Object.values(this.props.autoCompleteData).length > 0?this.props.autoCompleteData:{
            '1':'Apple', '2':'Orange', '3':'Strawberry', '4':'Mango',
            '5':'Chikku', '6':'Butterfruit', '7':'Dragonfruit', '8':'Watermelon',
            '9':'Plum', '10':'Raspberry', '11':'Blueberry', '12':'Banana', '13':'Papaya'
             },
            recommended_Fruits: []
        };
        this.handleUserInputChange = this.handleUserInputChange.bind(this);
        this.handleSuggestionClick = this.handleSuggestionClick.bind(this);
    }
    componentWillMount()
    {
        if(this.props.searchValue !== "")
        {
            this.props.onSearchFinished(Object.values(this.state.fruits).find((elem) => {return elem.toLowerCase() === this.props.searchValue.toLowerCase()}));
        }
    }
    handleUserInputChange(value, event)
    {
        if(value !== "")
        {
            this.setState({userInput: value, recommended_Fruits:[]});
            let previous_elems = this.state.recommended_Fruits;
            Object.values(this.state.fruits).forEach((v)=>
            {
                if(value.toUpperCase() === v.substr(0, value.length).toUpperCase())
                {
                    if(previous_elems.indexOf(v.toLowerCase()) === -1)
                    {
                        previous_elems.push(v.toLowerCase());
                        this.setState({recommended_Fruits:previous_elems});
                    }
                }
            });
        }
        else
        {
            this.setState({recommended_Fruits: []});
        }
    }
    handleSuggestionClick(val)
    {
        document.getElementById("ac").value = val;
        this.setState({recommended_Fruits:[]});
    }
    render()
    {
        return (<div className="box-area">
            <input type="text" id="ac" onInput={(e) => {this.handleUserInputChange(e.target.value, e)}} placeholder="Fruits" />
            <div className="auto-complete-list" id="autoComplete">
                {this.state.recommended_Fruits.map((v,i) => {
                    return <div className="results" key={i} onClick={(e)=> {this.handleSuggestionClick(e.target.innerHTML)}}>{v}</div>
                })}
            </div>
        </div>)
    }
}
export default AutoComplete;