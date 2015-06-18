Meteor.methods({
  addProject: function(project, color) {

    var findedProjects;

    findedProjects = Projects.find({
      $or: [{
        projectName: project
      }, {
        projectColor: color
      }]
    }).count();

    if (!findedProjects) {
      Projects.insert({
        projectName: project,
        projectColor: color
      });
    } else {
      throw new Meteor.Error("project with the same name or color exists");
    }
  },
  addTask: function(task, projId) {

    Tasks.insert({
      taskName: task,
      projectId: projId
    });
  }
});
