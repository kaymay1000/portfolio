var projects = [];

var portfolio = {};

function Project (title, dateCreated, image, description) {
  this.title = title;
  this.dateCreated = dateCreated;
  this.image = image;
  this.description = description;
  // this.fileSource = fileSource;
  projects.push(this);
}

Project.prototype.toHtml = function() {
  // var $newProject = $('#projects').clone();
  // $newProject.find('a').text(this.title);
  // $newProject.attr('.date-created', this.dateCreated);
  // $newProject.attr('src', this.image);
  // $newProject.attr('.description', this.description);
  // // $newProject.attr('href', this.fileSource); //need to chain .html jQ method on?
  // $newProject.removeClass('template');
  // return $newProject;
  var htmlTemp = $('.template').html();
  var temp = Handlebars.compile(htmlTemp); //Handlebars.compile returns a function, so we store it in a variable, pass 'this' into it (next line), and return it.
  return temp(this);
};

portfolio.handleMainNav = function() {
  $('.main-nav').on('click', '.nav-item', function(event) {
    event.preventDefault();
    $('.tab-content').hide();
    $(`#${$(this).data('content')}`).fadeIn(500);
  });
};

projectInfo.forEach(function(currentProject) {
  projects.push(new Project(currentProject));
});

projects.forEach(function(project) {
  $('#projects').append(project.toHtml());
});

portfolio.handleMainNav();
