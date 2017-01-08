(function(module) {

  var projectView = {};

  projectView.handleMainNav = function() {
    $('.main-nav').on('click', '.nav-item', function(e) {
      $('.tab-content').hide();
      $('select').val('');
      $('article').fadeIn(500);
      $(`#${$(this).data('content')}`).fadeIn(500);
    });
    $('.main-nav .nav-item:first').click();
  };

  projectView.handleDifficultyFilter = function() {
    $('#difficulty-filter').on('change', function() {
      if ($(this).val()) {
        $('article').hide();
        $('article[data-difficulty="' + $(this).val() + '"]').fadeIn(500);
      }
      else {
        $('article').fadeIn(500);
      }
    })
  }

  projectView.renderProjects = function() {
    var projectsByDiff = Project.byDifficulty();
    projectsByDiff.forEach(function(p) {
      if ($('#difficulty-filter option:contains("' + p.difficulty + '")').length === 0) {
        $('#difficulty-filter').append(p.toHtml());
        $('#projects').append(p.toHtml());
      }
      else {
        $('#projects').append();
      }
    });
  };

  projectView.handleMainNav();
  projectView.handleDifficultyFilter();
  Project.fetchAll(projectView.renderProjects);

module.projectView = projectView;
})(window)
