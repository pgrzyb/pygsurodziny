import React from 'react'
import { useAppContext as state } from 'context/state'

class TabHeading extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      tabHeading: this.props.tabHeading
    }
  }

  render() {
    console.log('tab heading rendered');
    return (
      <div className="tab-heading">
        <Countdown date={Date.now() + 10000} />
      </div>      
    )    
  }
}

export default TabHeading