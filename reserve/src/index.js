import React from "react";
import ReactDOM from "react-dom";
import "./index.css";

class TeacherTable extends React.Component {
  constructor() {
    super();
    this.state = {
      teachers: [
        {
          firstName: "Brmian",
          lastName: "Meermans",
          department: "Mathematics"
        },
        {
          firstName: "Brian",
          lastName: "Meermans",
          department: "Mathematics"
        },
        {
          firstName: "Brian",
          lastName: "Meermans",
          department: "Mathematics"
        },
        {
          firstName: "Brian",
          lastName: "Meermans",
          department: "Mathematics"
        },

        {
          firstName: "Brian",
          lastName: "Meermans",
          department: "Mathematics"
        },

        {
          firstName: "Brian",
          lastName: "Meermans",
          department: "Mathematics"
        },

        {
          firstName: "Brian",
          lastName: "Meermans",
          department: "Mathematics"
        },

        {
          firstName: "Brian",
          lastName: "Meermans",
          department: "Mathematics"
        },
        {
          firstName: "Brian",
          lastName: "Meermans",
          department: "Mathematics"
        },

        {
          firstName: "Brian",
          lastName: "Meermans",
          department: "Mathematics"
        }
      ]
    };
  }

  render() {
    let rows = this.state.teachers.map(person => {
      return (
        <TeacherTableRow
          firstName={person.firstName}
          lastName={person.lastName}
          department={person.department}
        />
      );
    });

    return (
      <div class="question-input-pair">
        <p class="question-label">
          Select your <span class="r-bold">info</span>.
        </p>

        <div class="selection big">
          <div class="selection-full-row">
            <input class="selection-filter" placeholder="SEARCH" type="text" />
          </div>

          <div class="selection-full-row">
            <div class="selection-table">
              <div class="selection-full-row">
                <div class="table-row-title">
                  <p class="table-title w33">FIRST NAME</p>

                  <p class="table-title w33">LAST NAME</p>

                  <p class="table-title w33">DEPARTMENT</p>
                </div>
              </div>

              <div class="selection-table">
                <div class="table-row-group" />
                {rows}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

class TeacherTableRow extends React.Component {
  render() {
    return (
      <div class="table-row">
        <div class="table-row-value-box">
          <p class="table-row-value w33">{this.props.firstName}</p>

          <p class="table-row-value w33">{this.props.lastName}</p>

          <p class="table-row-value w33">{this.props.department}</p>
        </div>
        <button class="table-row-selector">
          <i class="fas fa-plus" />
        </button>
      </div>
    );
  }
}

class LabTableRow extends React.Component {
  render() {
    return (
      <div class="table-row">
        <div class="table-row-value-box">
          <p class="table-row-value w50">{this.props.labNumber}</p>

          <p class="table-row-value w50">{this.props.deviceQuantity}</p>
        </div>
        <button class="table-row-selector">
          <i class="fas fa-plus" />
        </button>
      </div>
    );
  }
}

class CartTableRow extends React.Component {
  render() {
    return (
      <div class="table-row">
        <div class="table-row-value-box">
          <p class="table-row-value w33">{this.props.cartNumber}</p>

          <p class="table-row-value w33">{this.props.type}</p>

          <p class="table-row-value w33">{this.props.deviceQuantity}</p>
        </div>
        <button class="table-row-selector">
          <i class="fas fa-plus" />
        </button>
      </div>
    );
  }
}

class ReservedLabTableRow extends React.Component {
  render() {
    return (
      <div class="table-row">
        <div class="table-row-value-box main-row-value-box">
          <p class="table-row-value r-20">{this.props.fullName}</p>

          <p class="table-row-value r-20">{this.props.department}</p>

          <p class="table-row-value r-15">{this.props.labNumber}</p>

          <p class="table-row-value r-15">{this.props.deviceQuantity}</p>

          <p class="table-row-value r-15">{this.props.date}</p>

          <p class="table-row-value r-15">{this.props.block}</p>
        </div>
      </div>
    );
  }
}

class ReservedCartTableRow extends React.Component {
  render() {
    return (
      <div class="table-row">
        <div class="table-row-value-box main-row-value-box">
          <p class="table-row-value r-20">{this.props.fullName}</p>

          <p class="table-row-value r-20">{this.props.department}</p>

          <p class="table-row-value r-12">{this.props.cartNumber}</p>

          <p class="table-row-value r-12">{this.props.type}</p>

          <p class="table-row-value r-12">{this.props.deviceQuantity}</p>

          <p class="table-row-value r-12">{this.props.date}</p>

          <p class="table-row-value r-12">{this.props.block}</p>
        </div>
      </div>
    );
  }
}

const v_root = document.getElementById("root");
ReactDOM.render(<TeacherTable />, v_root);
