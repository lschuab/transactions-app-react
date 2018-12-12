import React, { Component } from 'react'
import axios from 'axios'

class Transactions extends Component {
  state = {
    transactions: []
  }
  
  componentDidMount = async () => {

    const token = localStorage.getItem('token')
    const result = await axios.get('http://localhost:8000/transactions', {headers: {"token" : token} })
    this.setState({transactions: result.data})
  }
  
  render() {
    let transactionsList = this.state.transactions.map(transaction => <li key={transaction.id}>{transaction.type}</li>)

    return (
      <ul>
        {transactionsList}
      </ul>
    )
  }
}

export default Transactions