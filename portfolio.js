var projects = [];

function Project () {
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

};
