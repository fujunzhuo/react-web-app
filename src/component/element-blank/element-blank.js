import React, {Component} from 'react'
export default class ElementBlank extends Component {
    render() {
        const { height = 10 } = this.props
        return(
            <div style={{height:height}}></div>
        )
    }

}