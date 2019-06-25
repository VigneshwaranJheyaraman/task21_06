import React, { Component } from 'react';
class RadioButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            radioOptions: Object.entries(this.props.radOpt).length > 0?this.props.radOpt:{
                '1':'Radio 1',
                '2':'Radio 2',
                '3':'Radio 3',
                '4':'Radio 4',
                '5':'Radio 1',
                '6':'Radio 2',
                '7':'Radio 3',
                '8':'Radio 1',
                '9':'Radio 2',
                '10':'Radio 3'
                } , checked: 0
        };
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(i,e) {
        this.setState({ checked: i }, ()=> {
            this.props.onSelected(Object.entries(this.state.radioOptions)[i][1]);
        });
    }
    render() {
        return (
            Object.entries(this.state.radioOptions).map((v, i) => {
                return <label key={i}><input type="radio" checked={this.state.checked === i} 
                     onChange={(e) => this.handleClick(i,e)} name="radios" />{v[v.length-1]}</label>
            })
        );
    }
}
export default RadioButton;