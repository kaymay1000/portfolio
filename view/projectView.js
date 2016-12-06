var handleMainNav = function() {
  $('.main-nav').on('click', '.nav-item', function(e) {
    $('.tab-content').hide();
    $(`#${$(this).data('content')}`).fadeIn(500);
  });
  $('.main-nav .nav-item:first').click();
};

var renderProjects = function() {
  Project.allProjects.forEach(function(project) {
    $('#projects').append(project.toHtml());
  });
};

handleMainNav();
renderProjects();
