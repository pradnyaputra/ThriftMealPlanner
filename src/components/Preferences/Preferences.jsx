import React, { Component } from 'react'
import { Checkbox } from 'antd'
import './Preferences.scss'
export default class Preferences extends Component {

  render() {
		    const radioStyle = {
      display: 'block',
      height: '30px',
      lineHeight: '30px',
    };
    return (
      <div>
        <Checkbox>
          vegetarian
        </Checkbox>
				        <Checkbox>
          vegan
        </Checkbox>
   
				        <Checkbox>
          halal
        </Checkbox>
   
				        <Checkbox>
          pescatarian
        </Checkbox>
   
      </div>
    )
  }
}
