import React, {Component} from 'react'
import PropTypes from 'prop-types'


export class Filter extends Component {
    
    static propTypes = {
        value: PropTypes.string.isRequired,
        onChange: PropTypes.func.isRequired,
      }

    render(){

    return (
  <>
    <h3>Find contacts by name</h3>
    <input
      onChange={this.props.onChange}
      value = {this.props.value}
    />
  </>
    )

    }
}


export default Filter