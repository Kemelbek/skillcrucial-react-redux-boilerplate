import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'

const Dummy = () => {
  // const [counter] = useState(0)
  return (
    <div>
      <a href="https://google.com/" className="link">my-link my link</a>
      <p className="p-container">
        <p className="p">Paragraph 1</p>
        <p className="p">Paragraph 2</p>
        <p className="p">Paragraph 3</p>
        <p className="p">Paragraph 4</p>
      </p>
    </div>
  )
}

Dummy.propTypes = {}

const mapStateToProps = () => ({})

const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Dummy)
