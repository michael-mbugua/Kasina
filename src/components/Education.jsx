import React from 'react'
import './Education.css'
import Navbar from './Navbar'

function Education() {
  return (
    <div className='Education-header'>
      <Navbar/>
        <h2>Education</h2>
      <div className="table-set">
      <table>
            <th>Year</th>
            <th>School</th>
            <th>Course</th>
            <tr>
                <td>2019 - present</td>
                <td>Cooperative University of Kenya</td>
                <td>Business Information and Technology</td>
            </tr>
            <tr>
                <td>2014-2018</td>
                <td>lorem 20</td>
                <td>KCSE - high school education</td>
            </tr>
            
            
        </table>
      </div>
    </div>
  )
}

export default Education