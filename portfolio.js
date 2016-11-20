var projects = [];

function Project (title, dateCreated, image, fileSource) {
  this.title = title;
  this.dateCreated = dateCreated;
  this.image = image;
  this.fileSource = fileSource;
  projects.push(this);
}

Project.prototype.toHtml = function() {
  var $newProject = $('#projects').clone();
  $newProject.find('a').text(this.title);
  $newProject.attr('.date-created', this.dateCreated);
  $newProject.attr('src', this.image);
  $newProject.attr('href', this.fileSource); //need to chain .html jQ method on?
  $newProject.removeClass('template');
  return $newProject;
};

projectInfo.forEach(function(currentProject) {
  projects.push(new Project(currentProject));
});

projects.forEach(function(project) {
  $('#projects').append(project.toHtml());
});
