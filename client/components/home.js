import React, { useState } from 'react';
import { Route, Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import Head from './head'

const Home = () => {
  let initialCounter = 0
  if (typeof localStorage !== 'undefined'
  && typeof localStorage.getItem('counter') !== 'undefined') {
    initialCounter = +localStorage.getItem('counter')
  }
  const [counter, setCounterNew] = useState(initialCounter)
  const updateCounter = (count) => {
    setCounterNew(count)
    localStorage.setItem('counter', count)
  }
  return (
    <div>
      <Head title="Hello" />
      <div> Hello World Home {counter} </div>
      <button type="button" onClick={() => { updateCounter(counter + 1) }}>Increase counter</button>
      <br />
      <button type="button" onClick={() => { updateCounter(counter + -1) }}>Increase counter</button>
      <br />

      <Route path="/salo/jalo" component={() => <div> JALO JALO JALO </div>} />
      <Route path="/salo/sosalo/susalo" component={() => <div> SOSALO  SOSALO  SOSALO </div>} />

      <Link to="/">Go Home</Link>
      <br />
      <Link to="/salo/jalo">JALO</Link>
      <br />
      <Link to="/salo/sosalo/susalo">SOSALO</Link>

    </div>
  )
}


Home.propTypes = {}

const mapStateToProps = () => ({})

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Home)
