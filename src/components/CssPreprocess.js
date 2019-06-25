import React, {Component} from 'react';
class CssPreprocess extends Component
{
    render()
    {
        return (<div className="inner-box-area">
            <h1 className="bg-red">This is the h1 tag with background red</h1>
            <h2 className="bg-green">This is the h2 tag with background green</h2>
            <p className="bg-yellow">This is the p tag with <strong>backgroung yellow</strong></p>
        </div>);
    }
}
export default CssPreprocess;