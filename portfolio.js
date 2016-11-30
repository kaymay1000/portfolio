'use strict';

var projects = [];

function Project (obj) {
  this.title = obj.title;
  this.dateCreated = obj.dateCreated;
  this.image = obj.image;
  this.description = obj.description;
  // this.fileSource = obj.fileSource;
}

Project.prototype.toHtml = function() {
  // var $newProject = $('.project-template').clone();
  // $newProject.find('#title').text(this.title);
  // $newProject.find('#date-created').text(this.dateCreated);
  // $newProject.find('img').attr('src', this.image);
  // $newProject.find('#description').text(this.description);
  // // $newProject.attr('href', this.fileSource); //need to chain .html jQ method on?
  // $newProject.removeClass('.project-template');
  // return $newProject;

  var htmlTemp = $('#template').html(); //#template refers to the ID of the Handlebars script tag right above the HTML template
  var temp = Handlebars.compile(htmlTemp); //Handlebars.compile returns a function, so we store it in a variable, pass 'this' into it (next line), and return it.
  return temp(this);
};

projectInfo.forEach(function(currentProject) {
  projects.push(new Project(currentProject));
});

projects.forEach(function(project) {
  $('#projects').append(project.toHtml());
});
