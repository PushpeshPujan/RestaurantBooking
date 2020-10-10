//3 packages inside react we have in package-json file when we create create react app

//1.react-is the main package to create react app.
//2.react-dom-helps to render content on the screen/browser through index.js compulsory files.
//3.react-script-helps to compile and run the scripts.

import React from 'react';
import ReactDOM from 'react-dom';
import Routing from './component/Routing'; //component is the name of the folder.

//React.DOM.render() which is the imported library form above code helps to render/display content on screen/page/browser only index.js file has this method
//inside this method Routing is the name of component(Routing where alll component is imported i.e.
//from where all components are linked. generally routing component is rendering bcoz from here all components are routed.root is the name of index.html id of public folder.

ReactDOM.render( < Routing / > , document.getElementById('root'));
