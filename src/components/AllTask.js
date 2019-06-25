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
        this.state = {radioOutput:{},radioOpt:{}, autoCompSearch:'',autoCompOpt:{}, dropDownOpt:{}, dropDownRes:{}};
    }
    componentWillMount()
    {
        let temp_opt= {
            'A':'Apple',
            'B':'Ball',
            '1':'One',
            '3':'Three'
        }
        this.setState({radioOpt: temp_opt})
    }
    render()
    {
        return  <div className="box-area" style={{margin:"10px"}}>
                    <AutoComplete />
                    <RadioButton radOpt={this.state.radioOpt}/>
                    <div className="box-area">
                        <CssPreprocess />
                    </div>
                    <Toogler />
                    <DropDown />
                </div>;
    }
}
export default AllTask;