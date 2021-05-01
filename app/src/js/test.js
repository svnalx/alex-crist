function initTestData() {
  appState.priBo.priBoFirstName = 'Tommy';
  appState.priBo.priBoLastName = 'Pickles';
  appState.priBo.priBoAddress1 = '103 Rugrats Ln';
  appState.priBo.priBoAddress2 = 'Ste 301';
  appState.priBo.priBoCity = 'Fort Worth';
  appState.priBo.priBoState = 'TX';
  appState.priBo.priBoZip = '76179';
  appState.priBo.priBoSSNLast4 = '0000';
  appState.priBo.priBoSSN = '601110000';
  appState.priBo.priBoDOB = '06/11/90';
  appState.priBo.priBoGrossAnnualIncome = '160000';
  appState.priBo.priBoEmail = 'tommy@rugrats.com';
  appState.priBo.priBoPhone = '8175555555';
  appState.coBo.coBoFirstName = 'Stu';
  appState.coBo.coBoLastName = 'Pickles';
  appState.coBo.coBoAddress1 = '5005 Toymaker Dr';
  appState.coBo.coBoAddress2 = 'Apt 505';
  appState.coBo.coBoCity = 'Provo';
  appState.coBo.coBoState = 'UT';
  appState.coBo.coBoZip = '84097';
  appState.coBo.coBoSSN = '601001111';
  appState.coBo.coBoDOB = '10/23/58';
  appState.coBo.coBoGrossAnnualIncome = '225000';
  appState.coBo.coBoEmail = 'stu@rugrats.com';
  appState.coBo.coBoPhone = '8014444444';
  appState.desiredAmount = '75000';
  appState.prefillOTP = '012345';
}

$(document).ready(function() {

  initTestData();

  $('#page0a input[name=priBoSSNLast4]').val(appState.priBo.priBoSSNLast4);
  $('#page0a input[name=priBoPhone]').val(appState.priBo.priBoPhone);
  $('#page0b input[name=prefillOTP]').val(appState.prefillOTP);

  /*
   * Perform the prefill
  */
  $('#page2a input[name=desiredAmount]').val(appState.desiredAmount);
  $('#page2a input[name=priBoGrossAnnualIncome]').val(appState.priBo.priBoGrossAnnualIncome);
  $('#page2a input[name=priBoEmail]').val(appState.priBo.priBoEmail);
  $('#page2a #spanPriBoFirstName').html(appState.priBo.priBoFirstName);
  $('#page2a input[name=priBoFirstName]').val(appState.priBo.priBoFirstName);
  $('#page2a input[name=priBoLastName]').val(appState.priBo.priBoLastName);
  $('#page2a input[name=priBoAddress1]').val(appState.priBo.priBoAddress1);
  $('#page2a input[name=priBoAddress2]').val(appState.priBo.priBoAddress2);
  $('#page2a input[name=priBoCity]').val(appState.priBo.priBoCity);
  $('#page2a input[name=priBoState]').val(appState.priBo.priBoState);
  $('#page2a input[name=priBoZip]').val(appState.priBo.priBoZip);
  $('#page2a input[name=priBoSSN]').val(appState.priBo.priBoSSN);
  $('#page2a input[name=priBoDOB]').val(appState.priBo.priBoDOB);
  $('#page2a input[name=priBoGrossAnnualIncome]').val(appState.priBo.priBoGrossAnnualIncome);
  $('#page2a input[name=priBoEmail]').val(appState.priBo.priBoEmail);
  $('#page2a input[name=priBoPhone]').val(appState.priBo.priBoPhone);


});
