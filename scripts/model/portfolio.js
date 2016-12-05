'use strict';

(function(module) {

  function Project (obj) {
    this.title = obj.title;
    this.dateCreated = obj.dateCreated;
    this.image = obj.image;
    this.description = obj.description;
    // this.fileSource = obj.fileSource;
  }

  Project.allProjects = [];

  Project.prototype.toHtml = function() {
    var htmlTemp = $('#template').html(); //#template refers to the ID of the Handlebars script tag right above the HTML template
    var temp = Handlebars.compile(htmlTemp); //Handlebars.compile returns a function, so we store it in a variable, pass 'this' into it (next line), and return it.
    return temp(this);
  };

  projectInfo.forEach(function(currentProject) {
    Project.allProjects.push(new Project(currentProject));
  });

  Project.allProjects.forEach(function(project) {
    $('#projects').append(project.toHtml());
  });

  Project.loadAll = function(projects) {
    projects.forEach(function(ele) {
      Project.allProjects.push(new Project(ele));
    });
  };

  Project.fetchAll = function() {
    if (localStorage.projectInfo) {
      var lsProject = JSON.parse(localStorage.getItem('projectInfo'));
      Project.loadAll(lsProject);
      console.log('First part worked');
    } else {
      $.getJSON('projectInfo.json').then(
        function(data) {
          localStorage.setItem('projectInfo', JSON.stringify(data));
          Project.loadAll(data);
          console.log('2nd part worked!');
        }
      );
    }
  };

  Project.fetchAll();
  module.Project = Project;

})(window);
