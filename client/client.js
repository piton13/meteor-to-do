Template.Layout.helpers({
  projects: function() {
    var   isInProjects,
          newArray = [],
          projects = Projects.find({});

      projects.forEach(function(item) {
        isInProjects = false;
        newArray.forEach(function(inner) {
          if (inner.projectName == item.projectName) {
            isInProjects = true;
          }
        });
        if (!isInProjects) {
          newArray.push(item);
        }
      });
    return projects;
  }
});

Template.Layout.events({
  "submit .new-project": function(event) {
    var findedProjects;
    var project = event.target.nameProject.value;
    var color = event.target.colorProject.value;

    console.log(project, color);

    if (!!project && !!color) {
      /*findedProjects = Meteor.call("checkProject", project, color);
      if (!findedProjects) {
        Meteor.call("addProject", project, color);
      } else {
        throw new Meteor.Error("project with the same name or color exists");
      }*/
      Meteor.call("addProject", project, color);
      
    } else {
      console.log("Fill the fields");
    }
    return false;
  },

  "submit .new-task": function(event) {
    var findedTasks;
    var task = event.target.nameTask.value;
    var projId = event.target.projectId.value;

    console.log(task, projId);

    if (!!task && !!projId) {
      Meteor.call("addTask", task, projId);
    } else {
      console.log("Fill the fields");
    }
    return false;
  }
});
