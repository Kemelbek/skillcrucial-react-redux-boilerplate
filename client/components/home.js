import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import Head from './head'

const Home = () => {
  return (
    <div>

      <Head title="Hello" />
      <div> Hello World Home </div>

    </div>
  )
}


Home.propTypes = {}

const mapStateToProps = () => ({})

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Home)
