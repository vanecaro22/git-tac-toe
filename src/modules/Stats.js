import React from "react";

import "./Stats.css";

const Stats = ({ stats }) => (
  <div className="Stats">
    <table>
      <thead>
        <tr>
          {Object.keys(stats).map(key => (
            <th>{`wins ${key}`}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        <tr>
          {Object.values(stats).map(value => (
            <td>{value}</td>
          ))}
        </tr>
      </tbody>
    </table>
  </div>
);

export default Stats;
