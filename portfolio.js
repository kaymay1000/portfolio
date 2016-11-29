'use strict';

var projects = [];
var wholePortfolio = {};

function Project (obj) {
  this.title = obj.title;
  this.dateCreated = obj.dateCreated;
  this.image = obj.image;
  this.description = obj.description;
  // this.fileSource = obj.fileSource;
}

Project.prototype.toHtml = function() {
  var htmlTemp = $('#template').html();
  var temp = Handlebars.compile(htmlTemp); //Handlebars.compile returns a function, so we store it in a variable, pass 'this' into it (next line), and return it.
  return temp(this);
};

projectInfo.forEach(function(project) {
  projects.push(new Project(project));
});

projects.forEach(function(project) {
  $('#projects').append(project.toHtml());
});

wholePortfolio.handleMainNav();
