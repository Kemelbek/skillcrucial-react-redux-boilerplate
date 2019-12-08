import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'

const Dummy = () => {
  // const [counter] = useState(0)
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'row',
      height: '100%',
      width: '100%',
      padding: '2%',
      justifyContent: 'space-around',
      alignItems: 'flex-end',
    }}
    >
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        minWidth: '200px',

      }}
      ><div>row 1</div>
        <div>row 2</div>
      </div>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        minWidth: '600px',
        flexGrow: '1',
        justifyContent: 'space-between'
      }}
      >
        <div>Header</div>
        <div>Body</div>
      </div>
      <div style={{
        display: 'flex',
        minWidth: '100px',
        height: 'fit-content',
        marginLeft: '2px'
      }}
      >
        <div>Money</div>
        <div>Funny</div>
      </div>
    </div>
  )
}

Dummy.propTypes = {}

const mapStateToProps = () => ({})

const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Dummy)
