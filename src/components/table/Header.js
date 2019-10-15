import React from 'react'

class Header extends React.Component{
    state = {
        columns: ''
    }

    static getDerivedStateFromProps(props, state){
        return {
            columns: props.colNames.map((x, index) => <th key={index}>{x.text}</th>)
        }
    }
        
    render(){
        return (<thead><tr>{this.state.columns}</tr></thead>)
    }
}

export default Header
