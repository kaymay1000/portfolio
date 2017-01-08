'use strict';

(function(module) {

  function Project (obj) {
    this.title = obj.title;
    this.dateCreated = obj.dateCreated;
    this.difficulty = obj.difficulty;
    this.image = obj.image;
    this.description = obj.description;
    this.fileSource = obj.fileSource;
  }

  Project.allProjects = [];

  Project.prototype.toHtml = function() {
    var htmlTemp = $('#template').html(); //#template refers to the ID of the Handlebars script tag right above the HTML template
    var temp = Handlebars.compile(htmlTemp); //Handlebars.compile returns a function, so we store it in a variable, pass 'this' into it (next line), and return it.
    return temp(this);
  };

  Project.loadAll = function(projects) {
    projects.forEach(function(ele) {
      Project.allProjects.push(new Project(ele));
    });
  };

  Project.fetchAll = function(callback) {
    if (localStorage.projectInfo) {
      var lsProject = JSON.parse(localStorage.getItem('projectInfo'));
      Project.loadAll(lsProject);
      callback();
    } else {
      $.getJSON('../../data/projectInfo.json').then(
        function(data) {
          localStorage.setItem('projectInfo', JSON.stringify(data));
          Project.loadAll(data);
          callback();
        }
      );
    }
  };

  Project.byDifficulty = function() {
    var projectsByDifficulty = [];
    Project.allProjects.map(function(currProject) {
      if (currProject.difficulty === 'advanced') {
        projectsByDifficulty.push(currProject);
      }
    });
    Project.allProjects.map(function(currProject) {
      if (currProject.difficulty === 'intermediate') {
        projectsByDifficulty.push(currProject);
      }
    });
    Project.allProjects.map(function(currProject) {
      if (currProject.difficulty === 'simple') {
        projectsByDifficulty.push(currProject);
      }
    })
    console.log(projectsByDifficulty, 'projects by difficulty array');
    return projectsByDifficulty;
  }
  module.Project = Project;

})(window);
