import React, {Component} from 'react';
class AutoComplete extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            userInput: '',
             fruits:[
            'Apple', 'Orange', 'Strawberry', 'Mango',
            'Chikku', 'Butterfruit', 'Dragonfruit', 'Watermelon',
            'Plum', 'Raspberry', 'Blueberry', 'Banana', 'Papaya'
            ]
        };
        this.handleUserInputChange = this.handleUserInputChange.bind(this);
    }
    handleUserInputChange(value, event)
    {
        this.setState({userInput: value});
        var target = event.target;
        var a= document.getElementById("autoComplete"),b;
        a.style.display ="block";
        this.closeTheSuggestion(target);
        this.state.fruits.forEach((v)=>
        {
            if(value.toUpperCase() === v.substr(0, value.length).toUpperCase())
            {
                b= document.createElement("div");
                b.setAttribute("class","results");
                b.innerHTML = "<strong>"+v.substr(0, value.length)+"</strong>";
                b.innerHTML += v.substr(value.length);
                b.addEventListener("click", (e) => {
                    target.value = v;
                    this.closeTheSuggestion(event.target);
                });
            a.appendChild(b);
            }
        });
    }
    
    closeTheSuggestion(elem)
    {
        var x=document.getElementsByClassName("results");
        for(var i=0;i<x.length;i++)
        {
            if(x[i] !== elem)
            {
                x[i].parentNode.removeChild(x[i]);
            }
        }
    }

    render()
    {
        return (<div className="box-area">
            <input type="text" onInput={(e) => {this.handleUserInputChange(e.target.value, e)}} placeholder="Fruits" />
            <div className="auto-complete-list" id="autoComplete" />
        </div>)
    }
}
export default AutoComplete;