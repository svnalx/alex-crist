$(document).ready(function() {
    var currentURL = window.location.href;
    var queryString = window.location.search;
    var urlParams = new URLSearchParams(queryString);
    var utmCampaign = urlParams.get('utm_campaign');
    var utmSource = urlParams.get('utm_source');
    var utmMedium = urlParams.get('utm_medium');
    var utmTerm = urlParams.get('utm_term');
    var utmContent = urlParams.get('utm_content');
    localStorage.setItem('utmCampaign', utmCampaign);
    localStorage.setItem('utmSource', utmSource);
    localStorage.setItem('utmMedium', utmMedium);
    localStorage.setItem('utmTerm', utmTerm);
    localStorage.setItem('utmContent', utmContent);

  $("#form0a").validate({
    rules: {
      priBoPhone: {
        required: true,
        phoneUS: true
      },
      priBoSSNLast4: {
        minlength: 4,
        maxlength: 4,
        digits: true,
        required: true
      },
      applicationOption: {
        required: true
      }
    },
    messages: {
      priBoPhone: "A valid US phone number is required.",
      priBoSSNLast4: {
        required: "Please enter the last 4 digits of your Social Security Number.",
        maxlength: "Please enter the last 4 digits of your Social Security Number.",
        minlength: "Please enter the last 4 digits of your Social Security Number.",
        digits: "Please enter the last 4 digits of your Social Security Number."
      },
      applicationOption: {
        required: "Please make a selection."
      }
    },
    errorElement: 'span',
    errorPlacement: function(error, element) {
      error.addClass('invalid-feedback');
      element.closest('.form-floating').append(error);
    },
    success: function(label, element) {
      $(element).addClass('is-valid');
    },
    highlight: function(element, errorClass, validClass) {
      $(element).addClass('is-invalid');
    },
    unhighlight: function(element, errorClass, validClass) {
      $(element).removeClass('is-invalid');
    },
    submitHandler: function(form) {
      logState();
      var dataValuesArray = $("#form0a").serializeArray();
      $(dataValuesArray).each(function(index, obj){
        appState[obj.name] = obj.value;
      });

      $('#form0b #spanPriBoPhone').html(appState.priBoPhone);
      localStorage.setItem('Application Option', appState.applicationOption);

      var appOptionPrefill = $('#rowPrefillOrManual input[id="applicationPrefill"]');
      var appOptionManual = $('#rowPrefillOrManual input[id="applicationManual"]');

      if(appOptionPrefill.is(':checked')) {
        $('#page0a')
          .addClass('animate__fadeOutLeft d-none');
        $('#page0b')
          .removeClass('d-none')
          .addClass('animate__fadeInRight');
      }

      if(appOptionManual.is(':checked')) {
        $('#page0a')
          .addClass('animate__fadeOutLeft d-none');
        $('#page0c')
          .removeClass('d-none')
          .addClass('animate__fadeInRight');
      }
    }

  });
  $("#form0b").validate({
    rules: {
      prefillOTP: {
        required: true,
        maxlength: 6,
        minlength: 6,
        digits: true
      }
    },
    messages: {
      prefillOTP: {
        required: "Please enter your 6 digit secure access code.",
        maxlength: "Please enter your 6 digit secure access code.",
        minlength: "Please enter your 6 digit secure access code.",
        digits: "Please enter your 6 digit secure access code."
      }
    },
    errorElement: 'span',
    errorPlacement: function(error, element) {
      error.addClass('invalid-feedback');
      element.closest('.form-floating').append(error);
    },
    success: function(label, element) {
      $(element).addClass('is-valid');
    },
    highlight: function(element, errorClass, validClass) {
      $(element).addClass('is-invalid');
    },
    unhighlight: function(element, errorClass, validClass) {
      $(element).removeClass('is-invalid');
    },
    submitHandler: function(form) {
      logState();
      var dataValuesArray2 = $("#ShortAppPrefillOTP").serializeArray();
      $(dataValuesArray2).each(function(index, obj){
        appState[obj.name] = obj.value;
      });

      $('#page0b')
        .addClass('d-none animate__fadeOutLeft');
      $('#page2a')
        .removeClass('d-none')
        .addClass('animate__fadeInRight');
      $('#getStarted')
        .removeClass('page-active')
        .addClass('page-complete');
      $('#basicInformation')
        .removeClass('page-inactive')
        .addClass('page-complete');
      $('#reviewAndConfirm')
        .removeClass('page-inactive')
        .addClass('page-active');
      $('#navStep0 p')
        .removeClass('nav-title-active')
        .addClass('nav-title-complete');
      $('#navStep1 p')
        .addClass('nav-title-complete');
      $('#navStep2 p')
        .addClass('nav-title-active');
    }
  });
});
