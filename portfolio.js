'use strict';

var projects = [];
var wholePortfolio = {};

function Project (title, dateCreated, image, description) {
  this.title = title;
  this.dateCreated = dateCreated;
  this.image = image;
  this.description = description;
  // this.fileSource = fileSource;
}

Project.prototype.toHtml = function() {
  var htmlTemp = $('#template').html();
  var temp = Handlebars.compile(htmlTemp); //Handlebars.compile returns a function, so we store it in a variable, pass 'this' into it (next line), and return it.
  return temp(this);
};

wholePortfolio.handleMainNav = function() {
  $('.main-nav').on('click', '.nav-item', function(e) {
    $('.tab-content').hide();
    $(`#${$(this).data('content')}`).fadeIn(500);
  });
  $('.main-nav .nav-item:first').click();
};

projectInfo.forEach(function(currentProject) {
  projects.push(new Project(currentProject));
});

projects.forEach(function(project) {
  $('#projects').append(project.toHtml());
});

wholePortfolio.handleMainNav();
