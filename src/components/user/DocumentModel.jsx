import { CButton, CModal, CModalBody, CModalFooter, CModalHeader, CModalTitle } from '@coreui/react'
import React from 'react'

const DocumentModel = (props) => {
    return (
      <>
        
        <CModal
          visible={props.visible}
          onClose={() => props.setVisible(false)}
          aria-labelledby="ScrollingLongContentExampleLabel"
        >
          <CModalHeader>
            <CModalTitle id="ScrollingLongContentExampleLabel">Add New Document</CModalTitle>
          </CModalHeader>
          <CModalBody>
            
            
          <form>
          <div className="mb-3">
            <label className="form-label">First  Name</label>
            <input type="text" className="form-control" />
          </div>
          <div className="mb-3">
            <label className="form-label">Last  Name</label>
            <input type="text" className="form-control" />
          </div>
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input type="email" className="form-control" />
          </div>
          <div className="mb-3">
            <label className="form-label">National ID</label>
            <input type="number" className="form-control" />
          </div>
          <div className="mb-3">
            <label className="form-label">National ID</label>
            <select className='form-control'>
                <option selected>Select Position</option>
                <option>Manager</option>
            </select>
          </div>
         
        </form>

            
          </CModalBody>
          <CModalFooter>
            <CButton color="secondary" onClick={() => props.setVisible(false)}>
              Close
            </CButton>
            <CButton color="primary">Save changes</CButton>
          </CModalFooter>
        </CModal>
      </>
    )
}

export default DocumentModel