import React from "react";
import firebase from "../../config/firebaseConfig";
// import TaskList from "../components/TasksList";
import Tasks from "../components/Tasks";

class AdminDashboard extends React.Component {

    addTask(e) {
        e.preventDefault();
        const data = new FormData(e.target);
      
        //TODO: Needs Error Checking For Special Characters
      
        //Capitalize first letter
        const task =
          data
            .get("task")
            .charAt(0)
            .toUpperCase() + data.get("task").substring(1);
      
        firebase
          .firestore()
          .collection("tasks")
          .add({
            task,
            completed: false
          }).then({
              task: ''
          });
      }
  render() {
    return (
      <div className="AdminDashboard">
        <div className="uk-container">
          <div>
            <form onSubmit={this.addTask}>
              Enter a task:
              <br></br>
              <input type="text" name="task"></input>
              <input type="submit" value="Submit"></input>
            </form>
          </div>
          <br></br>
          <Tasks />
        </div>
      </div>
    );
  }
}

export default AdminDashboard;