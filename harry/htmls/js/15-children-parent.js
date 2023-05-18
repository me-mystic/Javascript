// document.querySelector('.container').childNodes
// -->NodeList(13) [text, h1#heading, text, div#myfirst.good.child.red, text, div.child, text, div#second.child.red, text, div.child, text, form, text]

// document.querySelector('.container').children
// -->HTMLCollection(6) [h1#heading, div#myfirst.good.child.red, div.child, div#second.child.red, div.child, form, heading: h1#heading, myfirst: div#myfirst.good.child.red, second: div#second.child.red]

// let nodes = document.querySelector('.container').childNodes
// -->undefined

// nodes[0].nodeName;
// -->'#text'
// nodes[0].nodeType;
// -->3
// nodes[3].nodeName;
// -->'DIV'
// nodes[3].nodeType;
// -->1

// diff between childNodes and children
// --> known diff and..childeNodes=NodeList..children= htmlcollection
// nested children--> gives elements
// ele.firstChild
// ele.firstElementChild --> gives 1st element
// ele.lastElementChild
// ele.lastElementChild
// ele.childElementCount --> gives no of children
// ele.firstElementChild.parent --> gives parent ele..container
// ele.firstElementChild.nextSibling --> gives next ele in childNode..container
// ele.firstElementChild.nextSibling.nextSibling --> gives next ele in chilren
// ^ works like a ll

// parentElement, parentNode
// nextSibling, nextElementSibling, previousSibling, previousElementSibling

// let element = document.querySelector('.container')
// undefined
// lemenet.childNodes
// element.childNodes
// NodeList(13) [text, h1#heading, text, div#myfirst.good.child.red, text, div.child, text, div#second.child.red, text, div.child, text, form, text]
// element.children
// HTMLCollection(6) [h1#heading, div#myfirst.good.child.red, div.child, div#second.child.red, div.child, form, heading: h1#heading, myfirst: div#myfirst.good.child.red, second: div#second.child.red]0: h1#heading1: div#myfirst.good.child.red2: div.child3: div#second.child.red4: div.child5: formheading: h1#headingmyfirst: div#myfirst.good.child.redsecond: div#second.child.redlength: 6[[Prototype]]: HTMLCollection
// element.firstChild
// #text
// element.lastChild
// #text
// element.firstElementChild
// <h1 id=​"heading">​Welcome to code with harry​</h1>​
// element.lastElementChild
// <form action=​"none.html" method=​"post">​…​</form>​
// element.firstElementChild.parentElement
// <div class=​"container">​…​</div>​
// element.firstElementChild.parentNode
// <div class=​"container">​…​</div>​
// element.firstElementChild.nextSibling
// #text
// element.firstElementChild.nextElementSibling
// <div id=​"myfirst" class=​"good child red">​child1​</div>​