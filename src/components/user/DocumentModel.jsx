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
            <label className="form-label">Names 1</label>
            <input type="text" className="form-control" />
          </div>
          <div className="mb-3">
            <label className="form-label">Name 2</label>
            <input type="text" className="form-control" />
          </div>
          <div className="mb-3">
            <label className="form-label">Ikirego</label>
            <input type="text" className="form-control" />
          </div>
          <div className="mb-3">
            <label className="form-label">Impamvu</label>
            <textarea type="text" className="form-control" />
          </div>
          
         
        </form>

            
          </CModalBody>
          <CModalFooter>
            <CButton color="secondary" onClick={() => props.setVisible(false)}>
              Close
            </CButton>
            <CButton color="primary">Save Record</CButton>
          </CModalFooter>
        </CModal>
      </>
    )
}

export default DocumentModel