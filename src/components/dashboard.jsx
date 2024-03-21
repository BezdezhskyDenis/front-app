import React from "react";
import PageHeader from "./common/pageHeader";
// import Card from "./card";
// import { useCardsFilterContext } from "../contexts/filter.context";

const Dashboard = ({ headTitle }) => {
  // const { filteredCards } = useCardsFilterContext();

  return (
    <div className="container">
      <PageHeader title={headTitle} description="" />
      <div className="row">
        <div className="col-sm-4">
          <div className="container mb-2">
            <h1>Tasks</h1>
            <hr />
            <div className="fs-1 border rounded-pill">2</div>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="container mb-2">
            <h1>Progress</h1>
            <hr />
            <div className="fs-1 border rounded-pill">2</div>
          </div>
        </div>
        <div className="col-sm-4">
          <div className="container mb-2">
            <h1>Members</h1>
            <hr />
            <div className="fs-1 border rounded-pill">2</div>
          </div>
        </div>
      </div>
      <div className="table-responsive">
        <table className="table table-bordered rounded table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">First</th>
              <th scope="col">Last</th>
              <th scope="col">Handle</th>
              <th scope="col">Handle</th>
              <th scope="col">Handle</th>
              <th scope="col">Handle</th>
              <th scope="col">Handle</th>
              <th scope="col">Handle</th>
              <th scope="col">Handle</th>
              <th scope="col">Handle</th>
            </tr>
          </thead>
          <tbody className="table-group-divider ">
            <tr>
              <th scope="row">1</th>
              <td>Mark</td>
              <td>Otto</td>
              <td>@mdo</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>Jacob</td>
              <td>Thornton</td>
              <td>@fat</td>
            </tr>
            <tr>
              <th scope="row">3</th>
              <td colSpan="2">Larry the Bird</td>
              <td>@twitter</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
