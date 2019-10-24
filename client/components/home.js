import React, { useState } from 'react';
import { Route, Link, Switch } from 'react-router-dom'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import Head from './head'

const jalo = () => (<div>+++++++++++ JALO JALO JALO ++++++++++++++++</div>)
const sosalo = () => (<div>----------- SOSALO  SOSALO  SOSALO------------- </div>)

const Home = () => {
  let initialCounter = 0
  if (typeof localStorage !== 'undefined'
  && typeof localStorage.getItem('counter') !== 'undefined') {
    initialCounter = +localStorage.getItem('counter')
  }
  const [counter, setCounterNew] = useState(initialCounter)
  const [showText, changeShowText] = useState({
    toggled1: true,
    toggled2: false
  })
  const toggleSmth = () => {
    changeShowText({
      toggled1: !showText.toggled1,
      toggled2: !showText.toggled2
    })
  }
  const updateCounter = (count) => {
    setCounterNew(count)
    localStorage.setItem('counter', count)
  }
  return (
    <div>
      <Head title="Hello" />
      {
        showText.toggled1 && (
          <div>Text is shown 1</div>
        )
      }
      {
        showText.toggled2 && (
          <div>Text is shown 2</div>
        )
      }
      <button type="button" onClick={toggleSmth}>Toggle smth</button>
      <div> Hello World Home {counter} </div>
      <button type="button" onClick={() => { updateCounter(counter + 1) }}>Increase counter</button>
      <br />
      <button type="button" onClick={() => { updateCounter(counter + -1) }}>Decrease counter</button>
      <br />
      <Link to="/">Go Home</Link>
      <br />
      <Switch>
        <Route exact path="/salo/jalo" render={jalo} />
        <Route exact path="/salo/sosalo/susalo" render={sosalo} />
      </Switch>
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
