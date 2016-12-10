var handleMainNav = function() {
  $('.main-nav').on('click', '.nav-item', function(e) {
    $('.tab-content').hide();
    $(`#${$(this).data('content')}`).fadeIn(500);
    // if (e.target === `#${$(this).data('content')}` && has not already been clicked...) { //if Projects is clicked...
    //   renderProjects();
    // }
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
