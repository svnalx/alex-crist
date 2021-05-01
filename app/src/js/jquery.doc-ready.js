$(document).ready(function() {

  logState();

  /*
   * Dev use: short circuit the routing to page being worked on
  */

  //$('#page2a').removeClass('d-none');
  //$('#page0a').addClass('d-none');

  /*
   * UI selection highlighting
  */
  $('#applicationPrefill').on('click', function() {
    $('#rowPrefillChoice').addClass('selected-bg');
    $('#rowManualChoice').removeClass('selected-bg');
    $('#cardPrefill').addClass('selected-shadow');
    $('#cardManual').removeClass('selected-shadow');
  });

  $('#applicationManual').on('click', function() {
    $('#rowManualChoice').addClass('selected-bg');
    $('#rowPrefillChoice').removeClass('selected-bg');
    $('#cardManual').addClass('selected-shadow');
    $('#cardPrefill').removeClass('selected-shadow');
  });

  /*
   * Animating the arrow on buttons. Adds hover class which fires CSS for pseudo element animation
  */
  $('.btn-tx-blue.with-arrow').hover(
    function() {
      $('.btn-tx-blue.with-arrow').addClass('hover');
    },
    function() {
      $('.btn-tx-blue.with-arrow').removeClass('hover');
    }
  )

  /*
   * Back buttons
  */
  $('#page0bBack').click(function() {
    logState();
    $('#page0b')
      .addClass('d-none')
      .removeClass('animate__fadeInRight');
    $('#page0a')
      .removeClass('d-none animate__fadeOutLeft')
      .addClass('animate__fadeInRight');
  })
  $('#page2aBack').click(function() {
      logState();
    $('#page2a')
      .addClass('d-none')
      .removeClass('animate__fadeInRight');
    $('#page0b')
      .removeClass('d-none animate__fadeOutLeft')
      .addClass('animate__fadeInRight');
    $('#getStarted')
      .removeClass('page-complete')
      .addClass('page-active');
    $('#basicInformation')
      .removeClass('page-active')
      .addClass('page-inactive');
    $('#reviewAndConfirm')
      .removeClass('page-active')
      .addClass('page-inactive');
    $('#navStep0 p')
      .removeClass('nav-title-complete')
      .addClass('nav-title-active');
    $('#navStep1 p')
      .removeClass('nav-title-complete')
      .addClass('nav-title-inactive');
    $('#navStep2 p')
      .removeClass('nav-title-active')
      .addClass('nav-title-inactive');
  })
  $('#page0cBack').click(function() {
    logState();
    $('#page0c')
      .addClass('d-none')
      .removeClass('animate__fadeInRight');
    $('#page0a')
      .removeClass('d-none animate__fadeOutLeft')
      .addClass('animate__fadeInRight');
  })

  /*
   * SSN input - maybe obsolete
  *
  let ssnInput = $('#colSsnLast4 input');
  ssnInput.keydown(function() {
    let ssnLength = ssnInput.val().length;
    if (ssnLength == 3) {
      ssnInput.removeClass('default');
    }
  });
  */

  /*
   * Add/remove Co-Borrower form
  */
  $('#page0a input[name=coBoSwitch]').click(function() {
    if($("#page0a input[name=coBoSwitch]").is(':checked')) {
      appState.coBoOption = 'true';
      fillCoBoInputs();
      $('#page2a #coBoClosed')
        .addClass('d-none')
        .removeClass('animate__fadeInUp');
      $('#page2a #coBoOpen')
        .removeClass('d-none')
        .addClass('animate__fadeInDown');
    }
  })


  function fillCoBoInputs() {
    $('#page2a input[name=coBoFirstName]').val(appState.coBo.coBoFirstName);
    $('#page2a input[name=coBoLastName]').val(appState.coBo.coBoLastName);
    $('#page2a input[name=coBoAddress1]').val(appState.coBo.coBoAddress1);
    $('#page2a input[name=coBoAddress2]').val(appState.coBo.coBoAddress2);
    $('#page2a input[name=coBoCity]').val(appState.coBo.coBoCity);
    $('#page2a input[name=coBoState]').val(appState.coBo.coBoState);
    $('#page2a input[name=coBoZip]').val(appState.coBo.coBoZip);
    $('#page2a input[name=coBoSSN]').val(appState.coBo.coBoSSN);
    $('#page2a input[name=coBoDOB]').val(appState.coBo.coBoDOB);
    $('#page2a input[name=coBoGrossAnnualIncome]').val(appState.coBo.coBoGrossAnnualIncome);
  }

  // User clicked Add Co-Borrower
  $('#page2a #coBoClosed a').click(function() {
    fillCoBoInputs();
    $('#page2a #coBoClosed')
      .addClass('d-none')
      .removeClass('animate__fadeInUp');
    $('#page2a #coBoOpen')
      .removeClass('d-none')
      .addClass('animate__fadeInDown');
  })

  // User clicked Remove Co-Borrower
  $('#page2a #coBoOpen a').click(function() {
    initCoBoState();
    fillCoBoInputs();
    $('#page2a #coBoOpen')
      .addClass('d-none')
      .removeClass('animate__fadeInDown');
    $('#page2a #coBoClosed')
      .removeClass('d-none')
      .addClass('animate__fadeInUp');
  })

});
