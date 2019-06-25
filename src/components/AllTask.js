import React, {Component} from 'react';
import CssPreprocess from './CssPreprocess';
import AutoComplete from './AutoComplete';
import DropDown from './DropDown';
import Toogler from './Toogler';
import RadioButton from './RadioButton';
class AllTask extends Component
{
    constructor(props)
    {
        super(props);
        this.state = {radioOpt:{}, autoCompSearch:'',autoCompOpt:{}, dropDownOpt:{}, dropDownRes:{}};
        this.searchCompleted = this.searchCompleted.bind(this);
        this.handleDropDownSelection = this.handleDropDownSelection.bind(this);
    }
    componentWillMount()
    {
        let temp_opt= {
            'A':'Apple',
            'B':'Ball',
            '1':'One',
            '3':'Three'
        };
        this.setState({radioOpt: temp_opt, autoCompOpt:temp_opt, dropDownOpt:temp_opt});
    }
    searchCompleted(returnValue)
    {
        if(returnValue !== "" && returnValue !== undefined)
        {
            this.setState({autoCompSearch: returnValue}, () => {console.log(this.state.autoCompSearch)});
        }
        else
        {
            this.setState({autoCompSearch: "No result found"}, () => {console.log(this.state.autoCompSearch)});
        }
    }
    handleDropDownSelection(selection)
    {
        this.setState({dropDownRes: selection},() => {console.log(this.state)});
    }
    render()
    {
        return  <div className="box-area" style={{margin:"10px"}}>
                    <AutoComplete searchValue="apple" onSearchFinished= {this.searchCompleted}
                        autoCompleteData={this.state.autoCompOpt}/>
                    <RadioButton radOpt={this.state.radioOpt}/>
                    <div className="box-area">
                        <CssPreprocess />
                    </div>
                    <Toogler />
                    <DropDown dropDownData={this.state.dropDownOpt} onSelected={this.handleDropDownSelection}/>
                </div>;
    }
}
export default AllTask;