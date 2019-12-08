import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'

const Dummy = () => {
  // const [counter] = useState(0)
  return (
    <div>
      <div className="row">
        <div className="col-12 col-lg-4">1</div>
        <div className="col-12 col-lg-4">2</div>
        <div className="col-12 col-lg-4">3</div>
      </div>
    </div>
  )
}

Dummy.propTypes = {}

const mapStateToProps = () => ({})

const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Dummy)
