import React from 'react'
import './People.css'
import Sidebar from '../../components/sidebar/Sidebar'
import Header from '../../components/header/Header'
import peopleIcon from '../../../public/people-icon.png'
import { peopleInfo } from '../.././data/people'
import { FaEye, FaEdit, FaTrash } from "react-icons/fa";

const People = () => {
  return (
    <div className='people-container'>
      <Sidebar />


      <div className="people-main">
        <Header />

        <div className="people-main-big">
          <div className='people-main-addon'>
            <div className='people-addon'>
              <div>
                <p className='people-addon-title'>Customers</p>

                <div className='people-addon-name'>
                  <p className='people-addon__desc'>Dashboard</p>
                  <img className='people-addon-icon' src={peopleIcon} alt="icon" />
                  <p className='people-addon-customers'>Customers</p>
                </div>
              </div>

              <div className="people-icons-container">
                <div className="people-pdf"></div>
                <div className="people-green-pdf"></div>
                <div className="people-cycle"></div>
                <div className="people-up"></div>
                <button className='customer-add-btn'>Add Customer</button>
              </div>
            </div>
          </div>

          <div className="people-main-container">
            <div className="people-search-bar">
              <input type="search" />
              <select>
                <option value="status">Status</option>
                <option value="name">Name</option>
              </select>
            </div>

            <div className="people-main-box">
              <table>
                <thead>
                  <tr>
                    <th><input type="checkbox" /></th>
                    <th>Code</th>
                    <th>Customer</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Country</th>
                    <th>Status</th>
                    <th></th>
                  </tr>
                </thead>

                <tbody style={{border: "none"}}>
                  {peopleInfo.map((peopleInfo) => (
                    <tr key={peopleInfo.id}>
                      <td className='checkbox'><input type="checkbox" /></td>
                      <td className='code'>{peopleInfo.code}</td>

                      <td className="customer-info">
                        <img src={peopleInfo.image} alt="avatar" />
                        <p>{peopleInfo.customer}</p>
                      </td>

                      <td>{peopleInfo.email}</td>
                      <td>{peopleInfo.phone}</td>
                      <td>{peopleInfo.country}</td>

                      <td>
                        <span className="status">{peopleInfo.status}</span>
                      </td>

                      <td className="actions">
                      <button><FaEye /></button>
                      <button><FaEdit /></button>
                      <button><FaTrash /></button>
                    </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>


    </div>
  )
}

export default People
