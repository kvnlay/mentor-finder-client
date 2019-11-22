import React from "react";
import SearchBar from "./SearchBar";
import MentorList from "./MentorList";
import "../App.css";
import { connect } from "react-redux";

const Dashboard = ({ bios }) => {
  return (
    <div className="dashboard">
      <div className="search_section">
        <h2 className="headline">Find mentors with ease</h2>
        <SearchBar />
      </div>
      <MentorList bios={bios} />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    bios: state.bios
  };
};

export default connect(mapStateToProps)(Dashboard);
