import React from 'react'

class Row extends React.Component{
    state = {
        rows: ''
    }

    static getDerivedStateFromProps(props, state){
        return {
            rows: props.data.map((x, index1) => 
            <tr key={index1}>
                {x.map((r, index2) => 
                <td key={index2}>{r.text}</td>)}
            </tr>
            )
        }
    }

    render(){
        return (<tbody>{this.state.rows}</tbody>)
    }
}

export default Row;