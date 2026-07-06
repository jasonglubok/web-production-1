// to write comments
// if you use the hotkey +/ (Mac) or CTRL+/ (PC) it will automatically switch to

// semi-colons (;)are optional in js
// function name alert()
// parameter = 'this is a javascript alert!'
// text that's wrapped in '' or "" is called a string

// this won't work because it is reading apostrophe in i've as code syntax, not a character
// alert('i've changed this text)

// removing apostrophe fixes the issue
alert('ive changedthis text');
// we could also use "" and ' to differentiate
// alert ("i've changed this text")
// or use an escape character \ before the apostrophe
// alert('i\'ve changed this text')

// this does not show up on the webpage
// you need to open the inspector console to see
// function name = log
// parameter = 'this is a console message'
// log belongs to the console - console.log
// log does not exist outside of the console
conole.log('this is a console message')
 
// in order for js to manipulate the HTML, the HTML file needs to fully loaded
// we detect when the page has loaded using
// addEventListener() - function
//"load" parameter #1, which event we're looking for
// we're waiting for the WINDOW to finish LOAD the HTML
//()=>{} parameter #2, the action / function execute when the page is fully loaded
window.addEventListener("load",()=>{
	// all of our code that changes the HMTL/CSS will live inside these {}
	console.log('pace has loaded, js connected')

	// to change something in js we need to grab the specific element we are changing'
	// document HTML document
	// getElementById() fuction to retrieve an element name
	// 'big-paragraph' name of the id, without #
	// .textContent html inside of the <p> to change doesn't accept html tags in the text
	document.getElementById('big-paragraph').textContent = '<strong>changed with js</strong>'
	//querySelector for ids needs the CSS selector with the #
	// .innerHTML does include the html tags
	document.querySelector('.red-paragraph').innerHTML = '<em> changed again </em>'

	//querySelector for ids needs thee Css selector with the #
	// to grab the style we use .style
	// to change a specific style property we use the CSS property name without hypen
	// converting the css rule to js
	// #big-paragraph { background-color: #454e9e}
	document.querySelector('#big-paragraph').style.backgroundColor = '454e9e'

	// grab the #another id ad add a class to ti
	// add() function name
	// 'red-paragraph' parameter of the class name added
	document.querySelector('#another').classList.add('red-paragraph')

// creating a variable so we won't need to write document.getElementById
	let sp = document.getElementById('special')
sp.textContent = 'this is a special paragraph'