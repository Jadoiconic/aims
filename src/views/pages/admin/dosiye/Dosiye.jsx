import { cilSearch } from "@coreui/icons";
import CIcon from "@coreui/icons-react";
import { CButton } from "@coreui/react";
import React from "react";
import DefaultLayout from "src/layout/DefaultLayout";

const Dosiye = () => {
  return (
    <DefaultLayout>
      <div className="p-2 bg-white rounded">
        <div className="d-flex justify-content-between align-items-center py-2">
          <h2>Dosiye yanjye</h2>
          <div className="d-flex">
            <div className="mx-2 bg-primary rounded d-flex align-items-center">
              &nbsp;
              <input
                type="search"
                className="px-4 py-1 border-0 outline-none"
                placeholder="Search"
              />
              <CButton color="primary">
                <CIcon icon={cilSearch} size="lg" />
              </CButton>
            </div>
          </div>
        </div>
        <div>
          <table className="table table-striped text-center table-secondary responsive">
            <thead className="bg-dark text-white">
              <th className="p-2">No</th>
              <th className="p-2">Ikirego</th>
              <th className="p-2">PID</th>
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
                  <td>Impamvu</td>
                  <td>Edit</td>
                  <td>Delete</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </DefaultLayout>
  );
};

export default Dosiye;
