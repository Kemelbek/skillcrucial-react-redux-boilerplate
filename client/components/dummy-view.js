import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { getData } from '../redux/reducers/users'
import Head from './head'
//         <img src={`/tracker/${pageIndex}.gif`} alt="tracker" />
const Dummy = (props) => {
  const [pageIndex, setPageIndex] = useState(0)
  const { getData: getDataProps } = props

  useEffect(() => {
    getDataProps(pageIndex);
  }, [getDataProps, pageIndex])

  useEffect(() => {
    if (props.error && (pageIndex !== 0)) { setPageIndex(pageIndex - 1) }
  }, [props.error, pageIndex])

  const PrevPage = () => setPageIndex(Math.max(0, pageIndex - 1))
  const NextPage = () => setPageIndex(Math.min(props.TotalPages - 1, pageIndex + 1))


  if (!props.isRequesting) {
    return (
      <div>
        <div> Page {pageIndex + 1}/{props.TotalPages}. Page length is {props.users.length} </div>
        { pageIndex !== 0 && (<button id="buttonPrev" type="button" onClick={PrevPage}> Prev </button>)}
        { ((pageIndex + 1) !== props.TotalPages) && (<button id="buttonNext" type="button" onClick={NextPage}>Next</button>) }

        <table>
          <tr>
            <td>Avatar</td>
            <td>Name</td>
            <td>Age</td>
            <td>Email</td>
            <td>Company</td>
            <td>Salary</td>
            <td>Phone</td>
            <td>City</td>
            <td>Street</td>
          </tr>
          {
            props.users.map(user => (
              <tr>
                <td><img src={user.avatar} alt="avatar" className="avatar" /></td>
                <td>{user.name}</td>
                <td>{user.age}</td>
                <td>{user.email}</td>
                <td>{user.company}</td>
                <td>{user.salary}</td>
                <td>{user.phone}</td>
                <td>{user.City}</td>
                <td>{user.street}</td>
              </tr>
            ))
          }
        </table>
        <Head title="Hello" />
      </div>
    )
  }
  return (<div> Please Wait a moment  </div>)
}

Dummy.propTypes = {}

const mapStateToProps = state => ({
  isRequesting: state.users.isRequesting,
  users: state.users.list,
  error: state.users.error,
  TotalPages: state.users.TotalPages
})

const mapDispatchToProps = dispatch => bindActionCreators({
  getData
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Dummy)
