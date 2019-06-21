import React, {Component} from 'react';
import CssPreprocess from './CSSPreproces';
import AutoComplete from './AutoComplete';
import DropDown from './DropDown';
import Toogler from './ToggleButton';
class AllTask extends Component
{
    render()
    {
        return <div className="sample-container">
                    <div className="box-area">
                        <CssPreprocess />
                    </div>
                    <div className="box-area">
                        <AutoComplete />
                    </div>
                    <DropDown />
                    <Toogler />
        </div>;
    }
}
export default AllTask;