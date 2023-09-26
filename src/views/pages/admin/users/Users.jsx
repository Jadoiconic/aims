import { cilSearch } from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import { CButton } from '@coreui/react'
import React from 'react'
import DefaultLayout from 'src/layout/DefaultLayout'

const Users = () => {
  return (
    <>
    <DefaultLayout>
    <div className="p-2 bg-white rounded">
        <div className="d-flex justify-content-end align-items-center py-2">
          <div className="mx-2 bg-primary rounded d-flex align-items-center">&nbsp;
            <input type="search" className="px-4 py-1 border-0 outline-none" placeholder="Search" />
            <CButton color="primary"><CIcon icon={cilSearch} size='lg' /></CButton>
          </div>
          <CButton color="primary">Add New</CButton>
        </div>
        <div>
          <table className="table table-striped text-center table-secondary responsive">
            <thead className="bg-dark text-white">
              <th className="p-2">No</th>
              <th className="p-2">First Name</th>
              <th className="p-2">Last Name</th>
              <th className="p-2">Id</th>
              <th className="p-2">Position</th>
              <th className="p-2" colSpan={2}>
                Actions
              </th>
            </thead>
            <tbody>
              {[1, 2, 3, 4, 5].map((item, key) => (
                <tr key={key}>
                  <td>{key + 1}</td>
                  <td>fistName</td>
                  <td>lastName</td>
                  <td>15342342</td>
                  <td>Manager</td>
                  <td>Edit</td>
                  <td>Delete</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </DefaultLayout>
    </>
  )
}

export default Users