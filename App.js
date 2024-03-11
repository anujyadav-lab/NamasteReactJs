
// This parent React element is actually a object and this react object becomes html that the browser understand.
const parent = React.createElement(
    'div',
    {id:'parent'},
    
    // React.createElement('div',{id:'child'},React.createElement('h1',{},'i am h1 tag'),React.createElement('h1',{},'i am h1 tag')));
    
    React.createElement('div',{id:'child'},
    [
        React.createElement('h1',{},'i am h1 tag'),
        React.createElement('h2',{},'i am h2 tag'),
    
    ]),
    React.createElement('div',{id:'child2'},
    [
        React.createElement('h1',{},'i am h1 tag'),
        React.createElement('h2',{},'i am h2 tag'),
    
    ]
    ));

    
    
    // parent = {

    // }

    // <parent>
    // console.log(parent)

    const root = ReactDOM.createRoot(document.getElementById('root'))
    
    
    
    root.render(parent);//while it is rendering onto the DOM it converts itself into that html and puts it up into the DOM.
    
    // const headingElement = React.createElement('h1',{id:"h1ID"},'har har mahadev');
    //     console.log(headingElement)// gives object.
    // const root = ReactDOM.createRoot(document.getElementById('root'));
    
    
    
    
    // root.render(headingElement)
     
    
    
    
    
    
     