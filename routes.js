Router.configure({
  layoutTemplate: 'Layout'
});

Router.route('/', function() {
  var isInProjects,
      newArray = [],
      projects = Projects.find({});
      tasks = Tasks.find({projectId: this.params.projectName});

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
  this.render('Home', {
    data: {
      projects: newArray,
      tasks: tasks
    }
  });
}, {
  name: 'Home'
});


Router.route('/:_id', function() {
  var project = Projects.findOne(this.params._id);
  // tasks = Tasks.find({projectId: this.params._id});
  this.render('Project', {
    data: project,
    // tasks: tasks
  });
}, {
  name: 'Project'
});
