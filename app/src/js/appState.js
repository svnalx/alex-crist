/*
 * Console log state on state change
*/
var appState = {};
var appStateB = 0;  // blue

function logState() {
  console.log(
    '%c State of the App', // %c is CSS for flair only
    'color:rgba(100, 255, ' + appStateB.toString() + ', 1);' +
    'background:rgba(32, 32, 35, 1);' +
    'font-size:10px;' +
    'font-weight:normal;' +
    'margin-left:-7px;' +
    'padding:0 4px;'
  );

  console.log(appState);

  appStateB+=40;
}

/*
 * Initialize appState
*/
appState.appName = 'CUTX Prefill with TransUnion IDVision';

//only call once trustev.min.js has been loaded
TrustevV2.Init('6f3c81a4397d45219e9ca2b51258f7f8', function(sessionId) {
  appState.sessionId = sessionId;
});

function initPriBoState() {
  appState.priBo = {};
  appState.priBo.priBoFirstName = '';
  appState.priBo.priBoLastName = '';
  appState.priBo.priBoAddress1 = '';
  appState.priBo.priBoAddress2 = '';
  appState.priBo.priBoCity = '';
  appState.priBo.priBoState = '';
  appState.priBo.priBoZip = '';
  appState.priBo.priBoSSNLast4 = '';
  appState.priBo.priBoSSN = '';
  appState.priBo.priBoDOB = '';
  appState.priBo.priBoGrossAnnualIncome = '';
  appState.priBo.priBoEmail = '';
  appState.priBo.priBoPhone = '';
}

function initCoBoState() {
  appState.coBo = {};
  appState.coBo.coBoFirstName = '';
  appState.coBo.coBoLastName = '';
  appState.coBo.coBoAddress1 = '';
  appState.coBo.coBoAddress2 = '';
  appState.coBo.coBoCity = '';
  appState.coBo.coBoState = '';
  appState.coBo.coBoZip = '';
  appState.coBo.coBoSSN = '';
  appState.coBo.coBoDOB = '';
  appState.coBo.coBoGrossAnnualIncome = '';
  appState.coBo.coBoEmail = '';
  appState.coBo.coBoPhone = '';
}

function initOtherState() {
  appState.desiredAmount = '';
  appState.coBoOption = 'false';
  appState.prefillOTP = '';
}

initPriBoState();
initCoBoState();
initOtherState();
