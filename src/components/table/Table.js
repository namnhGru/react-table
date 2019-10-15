import React from 'react'
import Header from './Header'
import Row from './Row'

class Table extends React.Component {
  constructor(props){
    super(props);
    this.state = {
    }
  }
  
  render(){
    return (
      <div>
        <table>
          <Header colNames={this.props.data.colNames} setting={this.props.data.headerSetting}/>
          <Row data={this.props.data.rowData} setting={this.props.rowSetting}/>
          {/* <Footer setting={this.props.footerSetting}></Footer> */}
        </table>
      </div>
    )
  }
}

export default Table;