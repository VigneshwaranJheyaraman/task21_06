import React, {Component} from 'react';
import CssPreprocess from './CssPreprocess';
import AutoComplete from './AutoComplete';
import DropDown from './DropDown';
import Toogler from './Toogler';
import RadioButton from './RadioButton';
import Animate from './Animate';
class AllTask extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            radioOpt:{},
            autoCompSearch:'', 
            autoCompSearchInput:"",
            autoCompOpt:{}, 
            dropDownOpt:{}, 
            dropDownRes:{}, 
            autoCompPlaceHolder:"",
            radioRes:'',
            currentToggle:''
        };
        this.searchCompleted = this.searchCompleted.bind(this);
        this.handleDropDownSelection = this.handleDropDownSelection.bind(this);
        this.updateSearchInput = this.updateSearchInput.bind(this);
        this.updateRadioResult = this.updateRadioResult.bind(this);
        this.getToggleDetails = this.getToggleDetails.bind(this);
    }
    componentWillMount()
    {
        let temp_opt= {id:"102",name:"Shyam Kumar",salary:"40000"};
        this.setState({radioOpt: temp_opt, autoCompOpt:temp_opt, dropDownOpt:temp_opt, autoCompPlaceHolder:'Permanent'});
    }
    searchCompleted(returnValue)
    {
        if(returnValue !== "" && returnValue !== undefined)
        {
            this.setState({autoCompSearch: returnValue}, () => {console.log("output:"+this.state.autoCompSearch+" is available")});
        }
        else
        {
            this.setState({autoCompSearch: "No result found"}, () => {console.log("output:"+this.state.autoCompSearch)});
        }
    }
    handleDropDownSelection(selection)
    {
        this.setState({dropDownRes: selection},() => {console.log(this.state.dropDownRes)});
    }
    updateSearchInput(value)
    {
        this.setState({autoCompSearchInput:value}, () =>{console.log("Input:"+this.state.autoCompSearchInput)});
    }
    updateRadioResult(radioVal)
    {
        this.setState({radioRes: radioVal}, ()=>{console.log("The radio values is " + this.state.radioRes)});
    }
    getToggleDetails(v)
    {
        this.setState({currentToggle:v}, ()=>{
            console.log(this.state.currentToggle);
        });
    }
    render()
    {
        return  <div className="box-area" style={{margin:"10px"}}>
                    <AutoComplete searchValue={this.state.autoCompSearchInput} onSearchFinished= {this.searchCompleted}
                        autoCompleteData={this.state.autoCompOpt} onSearching={this.updateSearchInput}
                        autoCompletePlaceHolder = {this.state.autoCompPlaceHolder}/>
                    <RadioButton radOpt={this.state.radioOpt} onSelected={this.updateRadioResult}/>
                    <div className="box-area">
                        <CssPreprocess />
                    </div>
                    <Toogler onUpdate={this.getToggleDetails}/>
                    <DropDown dropDownData={this.state.dropDownOpt} onSelected={this.handleDropDownSelection}
                    dropDownInnerColor="cyan"/>
                    <Animate imageSource={"https://sap.github.io/ui5-webcomponents/images/react.svg"} />
                </div>;
    }
}
export default AllTask;