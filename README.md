# cutx-prefill
[View this on Azure DevOps](https://dev.azure.com/CUTX-COE/COE%20Projects/_backlogs/backlog/COE%20Projects%20Team/Epics/?workitem=17)

<code>npm i</code> install packages<br>
<code>npm i gulp-cli -g</code> install gulp-cli<br>
<code>gulp</code> build files - watch for changes - start server<br>
<code>gulp rebuild</code> rebuilds /dist<br>
<code>logState()</code> in browser console anytime<br>

<p>All dependancies should be dev-only so that we can hand off just the static files in /dist</p>

### CUTX Prefill API
Maybe useful for making credentialed API calls<br>
https://localhost:8081/api

### Tech Stack
- Node
- Express
- Gulp
- SASS
- jQuery
- Bootstrap 5
- TransUnion IDVision Suite


## To Do
- [x] Play some tunes
- [x] Dev out to Sketch specs
 - [x] refactor styles.css
   - [x] CSS variables
   - [x] Remove inline styles and put in classes
- [x] Fix page/step numbering
- [x] Autoprefix CSS (browser compatibility)
- [x] npm init for dev-only dependancies, serves static files in /dist
- [x] .env development
- [ ] Mobile and tablet responsive

## To Research
- [ ] Spanish speaking assistance for Prefill user journey?
- [ ] Loading Screen Animation?

## Definitions
page : The "state" in a SPA. A block-level element within the DOM.<br>
step : The user-friendly view of the progress of the application, distinguished by clear titles or markers.<br>
priBo : Primary Borrower<br>
coBo : Co-Borrower

## Notes
<p>Step/page numbering starts at 0.</p>

## Resources
[Bootstrap 5 Docs](https://getbootstrap.com/docs/5.0/getting-started/introduction/)<br>
[jQuery Validate Docs](https://jqueryvalidation.org/documentation/)<br>
[Trustev.js Digital Verification](https://www.trustev.com/developers/)
