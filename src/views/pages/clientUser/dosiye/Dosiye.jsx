import { cilSearch } from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import { CButton } from '@coreui/react'
import React from 'react'
import DocumentModel from 'src/components/user/DocumentModel'
import DefaultLayout from 'src/layout/DefaultLayout'

const Dosiye = () => {
  const [visible, setVisible] = React.useState(false)
  return (
    <>
    <DefaultLayout>
      <DocumentModel visible={visible} setVisible={setVisible}/>
    <div className="p-2 bg-white rounded">
        <div className="d-flex justify-content-end align-items-center py-2">
          <div className="mx-2 bg-primary rounded d-flex align-items-center">&nbsp;
            <input type="search" className="px-4 py-1 border-0 outline-none" placeholder="Search" />
            <CButton color="primary" ><CIcon icon={cilSearch} size='lg' /></CButton>
          </div>
          <CButton color="primary" onClick={() => setVisible(!visible)} className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">Add New Document</CButton>
        </div>
        <div>
        <table className="table table-striped text-center table-secondary responsive">
            <thead className="bg-dark text-white">
              <th className="p-2">No</th>
              <th className="p-2">Ikirego</th>
              <th className="p-2">PID</th>
              <th className="p-2">User 1 VS User 2</th>
              <th className="p-2">Impamvu</th>
              <th className="p-2" colSpan={2}>
                Actions
              </th>
            </thead>
            <tbody>
              {[1, 2, 3, 4, 5].map((item, key) => (
                <tr key={key}>
                  <td>{key + 1}</td>
                  <td>Ubujurire</td>
                  <td>CRV342#FsFsa42</td>
                  <td>Name 1 & Name 2</td>
                  <td>Impamvu</td>
                  <td>Edit({item})</td>
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

export default Dosiye