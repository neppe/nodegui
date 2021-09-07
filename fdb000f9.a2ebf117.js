(window.webpackJsonp=window.webpackJsonp||[]).push([[384],{442:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return p})),a.d(t,"rightToc",(function(){return l})),a.d(t,"default",(function(){return o}));var n=a(2),b=a(6),r=(a(0),a(456)),c={id:"qshortcut",title:"QShortcut",sidebar_label:"QShortcut"},p={unversionedId:"api/generated/classes/qshortcut",id:"api/generated/classes/qshortcut",isDocsHomePage:!1,title:"QShortcut",description:"The QShortcut class is used to create keyboard shortcuts.",source:"@site/docs/api/generated/classes/qshortcut.md",slug:"/api/generated/classes/qshortcut",permalink:"/docs/api/generated/classes/qshortcut",editUrl:"https://github.com/nodegui/nodegui/edit/master/website/docs/api/generated/classes/qshortcut.md",version:"current",sidebar_label:"QShortcut",sidebar:"api",previous:{title:"QSettings",permalink:"/docs/api/generated/classes/qsettings"},next:{title:"QSize",permalink:"/docs/api/generated/classes/qsize"}},l=[{value:"Example",id:"example",children:[]},{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Index",id:"index",children:[{value:"Constructors",id:"constructors",children:[]},{value:"Properties",id:"properties",children:[]},{value:"Methods",id:"methods",children:[]}]},{value:"Constructors",id:"constructors-1",children:[{value:"constructor",id:"constructor",children:[]}]},{value:"Properties",id:"properties-1",children:[{value:"native",id:"native",children:[]},{value:"nodeChildren",id:"nodechildren",children:[]},{value:"<code>Optional</code> nodeParent",id:"optional-nodeparent",children:[]}]},{value:"Methods",id:"methods-1",children:[{value:"addEventListener",id:"addeventlistener",children:[]},{value:"dumpObjectInfo",id:"dumpobjectinfo",children:[]},{value:"dumpObjectTree",id:"dumpobjecttree",children:[]},{value:"eventProcessed",id:"eventprocessed",children:[]},{value:"inherits",id:"inherits",children:[]},{value:"objectName",id:"objectname",children:[]},{value:"property",id:"property",children:[]},{value:"removeEventListener",id:"removeeventlistener",children:[]},{value:"setAutoRepeat",id:"setautorepeat",children:[]},{value:"setContext",id:"setcontext",children:[]},{value:"setEnabled",id:"setenabled",children:[]},{value:"setEventProcessed",id:"seteventprocessed",children:[]},{value:"setKey",id:"setkey",children:[]},{value:"setNodeParent",id:"setnodeparent",children:[]},{value:"setObjectName",id:"setobjectname",children:[]},{value:"setProperty",id:"setproperty",children:[]}]}],s={rightToc:l};function o(e){var t=e.components,a=Object(b.a)(e,["components"]);return Object(r.b)("wrapper",Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"The QShortcut class is used to create keyboard shortcuts.")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"This class is a JS wrapper around Qt's ",Object(r.b)("a",Object(n.a)({parentName:"strong"},{href:"https://doc.qt.io/qt-5/qshortcut.html"}),"QShortcut class"))),Object(r.b)("h3",{id:"example"},"Example"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-javascript"}),'const { QShortcut, QKeySequence, QMainWindow } = require("@nodegui/nodegui");\n\nconst win = new QMainWindow();\nconst shortcut = new QShortcut(win);\nshortcut.setKey(new QKeySequence("Ctrl+M"));\nshortcut.setEnabled(true);\nshortcut.addEventListener(QShortcutEvents.activated, () => {\nconsole.log("Shortcut Activated");\n});\n\nwin.show();\nglobal.win = win;\nglobal.shortcut = shortcut;\n')),Object(r.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(r.b)("p",null,"  \u21b3 ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/api/generated/classes/nodeobject"}),"NodeObject"),"\u2039",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/api/generated/interfaces/qshortcutsignals"}),"QShortcutSignals"),"\u203a"),Object(r.b)("p",null,"  \u21b3 ",Object(r.b)("strong",{parentName:"p"},"QShortcut")),Object(r.b)("h2",{id:"index"},"Index"),Object(r.b)("h3",{id:"constructors"},"Constructors"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/api/generated/classes/qshortcut#constructor"}),"constructor"))),Object(r.b)("h3",{id:"properties"},"Properties"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/api/generated/classes/qshortcut#native"}),"native")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/api/generated/classes/qshortcut#nodechildren"}),"nodeChildren")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/api/generated/classes/qshortcut#optional-nodeparent"}),"nodeParent"))),Object(r.b)("h3",{id:"methods"},"Methods"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/api/generated/classes/qshortcut#addeventlistener"}),"addEventListener")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/api/generated/classes/qshortcut#dumpobjectinfo"}),"dumpObjectInfo")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/api/generated/classes/qshortcut#dumpobjecttree"}),"dumpObjectTree")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/api/generated/classes/qshortcut#eventprocessed"}),"eventProcessed")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/api/generated/classes/qshortcut#inherits"}),"inherits")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/api/generated/classes/qshortcut#objectname"}),"objectName")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/api/generated/classes/qshortcut#property"}),"property")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/api/generated/classes/qshortcut#removeeventlistener"}),"removeEventListener")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/api/generated/classes/qshortcut#setautorepeat"}),"setAutoRepeat")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/api/generated/classes/qshortcut#setcontext"}),"setContext")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/api/generated/classes/qshortcut#setenabled"}),"setEnabled")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/api/generated/classes/qshortcut#seteventprocessed"}),"setEventProcessed")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/api/generated/classes/qshortcut#setkey"}),"setKey")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/api/generated/classes/qshortcut#setnodeparent"}),"setNodeParent")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/api/generated/classes/qshortcut#setobjectname"}),"setObjectName")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/api/generated/classes/qshortcut#setproperty"}),"setProperty"))),Object(r.b)("h2",{id:"constructors-1"},"Constructors"),Object(r.b)("h3",{id:"constructor"},"constructor"),Object(r.b)("p",null,"+"," ",Object(r.b)("strong",{parentName:"p"},"new QShortcut"),"(",Object(r.b)("inlineCode",{parentName:"p"},"parent"),": ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/api/generated/classes/nodewidget"}),"NodeWidget"),"\u2039any\u203a): ",Object(r.b)("em",{parentName:"p"},Object(r.b)("a",Object(n.a)({parentName:"em"},{href:"/docs/api/generated/classes/qshortcut"}),"QShortcut"))),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Overrides ",Object(r.b)("a",Object(n.a)({parentName:"em"},{href:"/docs/api/generated/classes/eventwidget"}),"EventWidget"),".",Object(r.b)("a",Object(n.a)({parentName:"em"},{href:"/docs/api/generated/classes/eventwidget#constructor"}),"constructor"))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Parameters:")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"parent")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/api/generated/classes/nodewidget"}),"NodeWidget"),"\u2039any\u203a")))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," ",Object(r.b)("em",{parentName:"p"},Object(r.b)("a",Object(n.a)({parentName:"em"},{href:"/docs/api/generated/classes/qshortcut"}),"QShortcut"))),Object(r.b)("h2",{id:"properties-1"},"Properties"),Object(r.b)("h3",{id:"native"},"native"),Object(r.b)("p",null,"\u2022 ",Object(r.b)("strong",{parentName:"p"},"native"),": ",Object(r.b)("em",{parentName:"p"},Object(r.b)("a",Object(n.a)({parentName:"em"},{href:"/docs/api/generated/globals#nativeelement"}),"NativeElement"))),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Overrides ",Object(r.b)("a",Object(n.a)({parentName:"em"},{href:"/docs/api/generated/classes/component"}),"Component"),".",Object(r.b)("a",Object(n.a)({parentName:"em"},{href:"/docs/api/generated/classes/component#abstract-native"}),"native"))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"nodechildren"},"nodeChildren"),Object(r.b)("p",null,"\u2022 ",Object(r.b)("strong",{parentName:"p"},"nodeChildren"),": ",Object(r.b)("em",{parentName:"p"},"Set\u2039",Object(r.b)("a",Object(n.a)({parentName:"em"},{href:"/docs/api/generated/classes/component"}),"Component"),"\u203a")),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Inherited from ",Object(r.b)("a",Object(n.a)({parentName:"em"},{href:"/docs/api/generated/classes/component"}),"Component"),".",Object(r.b)("a",Object(n.a)({parentName:"em"},{href:"/docs/api/generated/classes/component#nodechildren"}),"nodeChildren"))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"optional-nodeparent"},Object(r.b)("inlineCode",{parentName:"h3"},"Optional")," nodeParent"),Object(r.b)("p",null,"\u2022 ",Object(r.b)("strong",{parentName:"p"},"nodeParent"),"? : ",Object(r.b)("em",{parentName:"p"},Object(r.b)("a",Object(n.a)({parentName:"em"},{href:"/docs/api/generated/classes/component"}),"Component"))),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Inherited from ",Object(r.b)("a",Object(n.a)({parentName:"em"},{href:"/docs/api/generated/classes/component"}),"Component"),".",Object(r.b)("a",Object(n.a)({parentName:"em"},{href:"/docs/api/generated/classes/component#optional-nodeparent"}),"nodeParent"))),Object(r.b)("h2",{id:"methods-1"},"Methods"),Object(r.b)("h3",{id:"addeventlistener"},"addEventListener"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("strong",{parentName:"p"},"addEventListener"),"\u2039",Object(r.b)("strong",{parentName:"p"},"SignalType"),"\u203a(",Object(r.b)("inlineCode",{parentName:"p"},"signalType"),": SignalType, ",Object(r.b)("inlineCode",{parentName:"p"},"callback"),": QShortcutSignals","[SignalType]","): ",Object(r.b)("em",{parentName:"p"},"void")),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Inherited from ",Object(r.b)("a",Object(n.a)({parentName:"em"},{href:"/docs/api/generated/classes/eventwidget"}),"EventWidget"),".",Object(r.b)("a",Object(n.a)({parentName:"em"},{href:"/docs/api/generated/classes/eventwidget#addeventlistener"}),"addEventListener"))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Type parameters:")),Object(r.b)("p",null,"\u25aa ",Object(r.b)("strong",{parentName:"p"},"SignalType"),": ",Object(r.b)("em",{parentName:"p"},"keyof QShortcutSignals")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Parameters:")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"signalType")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"SignalType"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"SignalType is a signal from the widgets signals interface.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"callback")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"QShortcutSignals","[SignalType]"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Corresponding callback for the signal as mentioned in the widget's signal interface")))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," ",Object(r.b)("em",{parentName:"p"},"void")),Object(r.b)("p",null,"void"),Object(r.b)("p",null,"For example in the case of QPushButton:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"const button = new QPushButton();\nbutton.addEventListener('clicked',(checked)=>console.log(\"clicked\"));\n// here clicked is a value from QPushButtonSignals interface\n")),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("strong",{parentName:"p"},"addEventListener"),"(",Object(r.b)("inlineCode",{parentName:"p"},"eventType"),": ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/api/generated/enums/widgeteventtypes"}),"WidgetEventTypes"),", ",Object(r.b)("inlineCode",{parentName:"p"},"callback"),": function): ",Object(r.b)("em",{parentName:"p"},"void")),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Inherited from ",Object(r.b)("a",Object(n.a)({parentName:"em"},{href:"/docs/api/generated/classes/eventwidget"}),"EventWidget"),".",Object(r.b)("a",Object(n.a)({parentName:"em"},{href:"/docs/api/generated/classes/eventwidget#addeventlistener"}),"addEventListener"))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Parameters:")),Object(r.b)("p",null,"\u25aa ",Object(r.b)("strong",{parentName:"p"},"eventType"),": ",Object(r.b)("em",{parentName:"p"},Object(r.b)("a",Object(n.a)({parentName:"em"},{href:"/docs/api/generated/enums/widgeteventtypes"}),"WidgetEventTypes"))),Object(r.b)("p",null,"\u25aa ",Object(r.b)("strong",{parentName:"p"},"callback"),": ",Object(r.b)("em",{parentName:"p"},"function")),Object(r.b)("p",null,"For example in the case of QPushButton:"),Object(r.b)("pre",null,Object(r.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),'const button = new QPushButton();\nbutton.addEventListener(WidgetEventTypes.HoverEnter,()=>console.log("hovered"));\n')),Object(r.b)("p",null,"\u25b8 (",Object(r.b)("inlineCode",{parentName:"p"},"event?"),": ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/api/generated/globals#nativerawpointer"}),"NativeRawPointer"),'\u2039"QEvent"\u203a): ',Object(r.b)("em",{parentName:"p"},"void")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Parameters:")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"event?")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/api/generated/globals#nativerawpointer"}),"NativeRawPointer"),'\u2039"QEvent"\u203a')))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," ",Object(r.b)("em",{parentName:"p"},"void")),Object(r.b)("hr",null),Object(r.b)("h3",{id:"dumpobjectinfo"},"dumpObjectInfo"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("strong",{parentName:"p"},"dumpObjectInfo"),"(): ",Object(r.b)("em",{parentName:"p"},"void")),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Inherited from ",Object(r.b)("a",Object(n.a)({parentName:"em"},{href:"/docs/api/generated/classes/nodeobject"}),"NodeObject"),".",Object(r.b)("a",Object(n.a)({parentName:"em"},{href:"/docs/api/generated/classes/nodeobject#dumpobjectinfo"}),"dumpObjectInfo"))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," ",Object(r.b)("em",{parentName:"p"},"void")),Object(r.b)("hr",null),Object(r.b)("h3",{id:"dumpobjecttree"},"dumpObjectTree"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("strong",{parentName:"p"},"dumpObjectTree"),"(): ",Object(r.b)("em",{parentName:"p"},"void")),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Inherited from ",Object(r.b)("a",Object(n.a)({parentName:"em"},{href:"/docs/api/generated/classes/nodeobject"}),"NodeObject"),".",Object(r.b)("a",Object(n.a)({parentName:"em"},{href:"/docs/api/generated/classes/nodeobject#dumpobjecttree"}),"dumpObjectTree"))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," ",Object(r.b)("em",{parentName:"p"},"void")),Object(r.b)("hr",null),Object(r.b)("h3",{id:"eventprocessed"},"eventProcessed"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("strong",{parentName:"p"},"eventProcessed"),"(): ",Object(r.b)("em",{parentName:"p"},"boolean")),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Inherited from ",Object(r.b)("a",Object(n.a)({parentName:"em"},{href:"/docs/api/generated/classes/eventwidget"}),"EventWidget"),".",Object(r.b)("a",Object(n.a)({parentName:"em"},{href:"/docs/api/generated/classes/eventwidget#eventprocessed"}),"eventProcessed"))),Object(r.b)("p",null,"Get the state of the event processed flag"),Object(r.b)("p",null,"See ",Object(r.b)("inlineCode",{parentName:"p"},"setEventProcessed()"),"."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," ",Object(r.b)("em",{parentName:"p"},"boolean")),Object(r.b)("p",null,"boolean True if the current event is flagged as processed."),Object(r.b)("hr",null),Object(r.b)("h3",{id:"inherits"},"inherits"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("strong",{parentName:"p"},"inherits"),"(",Object(r.b)("inlineCode",{parentName:"p"},"className"),": string): ",Object(r.b)("em",{parentName:"p"},"boolean")),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Inherited from ",Object(r.b)("a",Object(n.a)({parentName:"em"},{href:"/docs/api/generated/classes/nodeobject"}),"NodeObject"),".",Object(r.b)("a",Object(n.a)({parentName:"em"},{href:"/docs/api/generated/classes/nodeobject#inherits"}),"inherits"))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Parameters:")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"className")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string")))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," ",Object(r.b)("em",{parentName:"p"},"boolean")),Object(r.b)("hr",null),Object(r.b)("h3",{id:"objectname"},"objectName"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("strong",{parentName:"p"},"objectName"),"(): ",Object(r.b)("em",{parentName:"p"},"string")),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Inherited from ",Object(r.b)("a",Object(n.a)({parentName:"em"},{href:"/docs/api/generated/classes/nodeobject"}),"NodeObject"),".",Object(r.b)("a",Object(n.a)({parentName:"em"},{href:"/docs/api/generated/classes/nodeobject#objectname"}),"objectName"))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," ",Object(r.b)("em",{parentName:"p"},"string")),Object(r.b)("hr",null),Object(r.b)("h3",{id:"property"},"property"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("strong",{parentName:"p"},"property"),"(",Object(r.b)("inlineCode",{parentName:"p"},"name"),": string): ",Object(r.b)("em",{parentName:"p"},Object(r.b)("a",Object(n.a)({parentName:"em"},{href:"/docs/api/generated/classes/qvariant"}),"QVariant"))),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Inherited from ",Object(r.b)("a",Object(n.a)({parentName:"em"},{href:"/docs/api/generated/classes/nodeobject"}),"NodeObject"),".",Object(r.b)("a",Object(n.a)({parentName:"em"},{href:"/docs/api/generated/classes/nodeobject#property"}),"property"))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Parameters:")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"name")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string")))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," ",Object(r.b)("em",{parentName:"p"},Object(r.b)("a",Object(n.a)({parentName:"em"},{href:"/docs/api/generated/classes/qvariant"}),"QVariant"))),Object(r.b)("hr",null),Object(r.b)("h3",{id:"removeeventlistener"},"removeEventListener"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("strong",{parentName:"p"},"removeEventListener"),"\u2039",Object(r.b)("strong",{parentName:"p"},"SignalType"),"\u203a(",Object(r.b)("inlineCode",{parentName:"p"},"signalType"),": SignalType, ",Object(r.b)("inlineCode",{parentName:"p"},"callback"),": QShortcutSignals","[SignalType]","): ",Object(r.b)("em",{parentName:"p"},"void")),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Inherited from ",Object(r.b)("a",Object(n.a)({parentName:"em"},{href:"/docs/api/generated/classes/eventwidget"}),"EventWidget"),".",Object(r.b)("a",Object(n.a)({parentName:"em"},{href:"/docs/api/generated/classes/eventwidget#removeeventlistener"}),"removeEventListener"))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Type parameters:")),Object(r.b)("p",null,"\u25aa ",Object(r.b)("strong",{parentName:"p"},"SignalType"),": ",Object(r.b)("em",{parentName:"p"},"keyof QShortcutSignals")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Parameters:")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"signalType")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"SignalType")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"callback")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"QShortcutSignals","[SignalType]")))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," ",Object(r.b)("em",{parentName:"p"},"void")),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("strong",{parentName:"p"},"removeEventListener"),"(",Object(r.b)("inlineCode",{parentName:"p"},"eventType"),": ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/api/generated/enums/widgeteventtypes"}),"WidgetEventTypes"),", ",Object(r.b)("inlineCode",{parentName:"p"},"callback"),": function): ",Object(r.b)("em",{parentName:"p"},"void")),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Inherited from ",Object(r.b)("a",Object(n.a)({parentName:"em"},{href:"/docs/api/generated/classes/eventwidget"}),"EventWidget"),".",Object(r.b)("a",Object(n.a)({parentName:"em"},{href:"/docs/api/generated/classes/eventwidget#removeeventlistener"}),"removeEventListener"))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Parameters:")),Object(r.b)("p",null,"\u25aa ",Object(r.b)("strong",{parentName:"p"},"eventType"),": ",Object(r.b)("em",{parentName:"p"},Object(r.b)("a",Object(n.a)({parentName:"em"},{href:"/docs/api/generated/enums/widgeteventtypes"}),"WidgetEventTypes"))),Object(r.b)("p",null,"\u25aa ",Object(r.b)("strong",{parentName:"p"},"callback"),": ",Object(r.b)("em",{parentName:"p"},"function")),Object(r.b)("p",null,"\u25b8 (",Object(r.b)("inlineCode",{parentName:"p"},"event?"),": ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/api/generated/globals#nativerawpointer"}),"NativeRawPointer"),'\u2039"QEvent"\u203a): ',Object(r.b)("em",{parentName:"p"},"void")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Parameters:")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"event?")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/api/generated/globals#nativerawpointer"}),"NativeRawPointer"),'\u2039"QEvent"\u203a')))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," ",Object(r.b)("em",{parentName:"p"},"void")),Object(r.b)("hr",null),Object(r.b)("h3",{id:"setautorepeat"},"setAutoRepeat"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("strong",{parentName:"p"},"setAutoRepeat"),"(",Object(r.b)("inlineCode",{parentName:"p"},"on"),": boolean): ",Object(r.b)("em",{parentName:"p"},"void")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Parameters:")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"on")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"boolean")))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," ",Object(r.b)("em",{parentName:"p"},"void")),Object(r.b)("hr",null),Object(r.b)("h3",{id:"setcontext"},"setContext"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("strong",{parentName:"p"},"setContext"),"(",Object(r.b)("inlineCode",{parentName:"p"},"shortcutContext"),": ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/api/generated/enums/shortcutcontext"}),"ShortcutContext"),"): ",Object(r.b)("em",{parentName:"p"},"void")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Parameters:")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"shortcutContext")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/api/generated/enums/shortcutcontext"}),"ShortcutContext"))))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," ",Object(r.b)("em",{parentName:"p"},"void")),Object(r.b)("hr",null),Object(r.b)("h3",{id:"setenabled"},"setEnabled"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("strong",{parentName:"p"},"setEnabled"),"(",Object(r.b)("inlineCode",{parentName:"p"},"enabled"),": boolean): ",Object(r.b)("em",{parentName:"p"},"void")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Parameters:")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"enabled")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"boolean")))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," ",Object(r.b)("em",{parentName:"p"},"void")),Object(r.b)("hr",null),Object(r.b)("h3",{id:"seteventprocessed"},"setEventProcessed"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("strong",{parentName:"p"},"setEventProcessed"),"(",Object(r.b)("inlineCode",{parentName:"p"},"isProcessed"),": boolean): ",Object(r.b)("em",{parentName:"p"},"void")),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Inherited from ",Object(r.b)("a",Object(n.a)({parentName:"em"},{href:"/docs/api/generated/classes/eventwidget"}),"EventWidget"),".",Object(r.b)("a",Object(n.a)({parentName:"em"},{href:"/docs/api/generated/classes/eventwidget#seteventprocessed"}),"setEventProcessed"))),Object(r.b)("p",null,"Mark the current event as having been processed"),Object(r.b)("p",null,"This method is used to indicate that the currently dispatched event\nhas been processed and no further processing by superclasses is\nrequired. It only makes sense to call this method from an event\nhandler."),Object(r.b)("p",null,"When set, this flag will cause NodeGui's ",Object(r.b)("inlineCode",{parentName:"p"},"QObject::event()")," method to\nreturn true and not call the superclass ",Object(r.b)("inlineCode",{parentName:"p"},"event()"),", effectively preventing\nany further processing on this event."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Parameters:")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"isProcessed")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"boolean"),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"true if the event has been processed.")))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," ",Object(r.b)("em",{parentName:"p"},"void")),Object(r.b)("hr",null),Object(r.b)("h3",{id:"setkey"},"setKey"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("strong",{parentName:"p"},"setKey"),"(",Object(r.b)("inlineCode",{parentName:"p"},"keysequence"),": ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/api/generated/classes/qkeysequence"}),"QKeySequence"),"): ",Object(r.b)("em",{parentName:"p"},"void")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Parameters:")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"keysequence")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/api/generated/classes/qkeysequence"}),"QKeySequence"))))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," ",Object(r.b)("em",{parentName:"p"},"void")),Object(r.b)("hr",null),Object(r.b)("h3",{id:"setnodeparent"},"setNodeParent"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("strong",{parentName:"p"},"setNodeParent"),"(",Object(r.b)("inlineCode",{parentName:"p"},"parent?"),": ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/api/generated/classes/component"}),"Component"),"): ",Object(r.b)("em",{parentName:"p"},"void")),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Inherited from ",Object(r.b)("a",Object(n.a)({parentName:"em"},{href:"/docs/api/generated/classes/component"}),"Component"),".",Object(r.b)("a",Object(n.a)({parentName:"em"},{href:"/docs/api/generated/classes/component#setnodeparent"}),"setNodeParent"))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Parameters:")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"parent?")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/api/generated/classes/component"}),"Component"))))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," ",Object(r.b)("em",{parentName:"p"},"void")),Object(r.b)("hr",null),Object(r.b)("h3",{id:"setobjectname"},"setObjectName"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("strong",{parentName:"p"},"setObjectName"),"(",Object(r.b)("inlineCode",{parentName:"p"},"objectName"),": string): ",Object(r.b)("em",{parentName:"p"},"void")),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Inherited from ",Object(r.b)("a",Object(n.a)({parentName:"em"},{href:"/docs/api/generated/classes/nodeobject"}),"NodeObject"),".",Object(r.b)("a",Object(n.a)({parentName:"em"},{href:"/docs/api/generated/classes/nodeobject#setobjectname"}),"setObjectName"))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Parameters:")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"objectName")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string")))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," ",Object(r.b)("em",{parentName:"p"},"void")),Object(r.b)("hr",null),Object(r.b)("h3",{id:"setproperty"},"setProperty"),Object(r.b)("p",null,"\u25b8 ",Object(r.b)("strong",{parentName:"p"},"setProperty"),"(",Object(r.b)("inlineCode",{parentName:"p"},"name"),": string, ",Object(r.b)("inlineCode",{parentName:"p"},"value"),": ",Object(r.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/api/generated/globals#qvarianttype"}),"QVariantType"),"): ",Object(r.b)("em",{parentName:"p"},"boolean")),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Inherited from ",Object(r.b)("a",Object(n.a)({parentName:"em"},{href:"/docs/api/generated/classes/nodeobject"}),"NodeObject"),".",Object(r.b)("a",Object(n.a)({parentName:"em"},{href:"/docs/api/generated/classes/nodeobject#setproperty"}),"setProperty"))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Parameters:")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(r.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"name")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("inlineCode",{parentName:"td"},"value")),Object(r.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(r.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/api/generated/globals#qvarianttype"}),"QVariantType"))))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Returns:")," ",Object(r.b)("em",{parentName:"p"},"boolean")))}o.isMDXComponent=!0},456:function(e,t,a){"use strict";a.d(t,"a",(function(){return j})),a.d(t,"b",(function(){return d}));var n=a(0),b=a.n(n);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,b=function(e,t){if(null==e)return{};var a,n,b={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(b[a]=e[a]);return b}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(b[a]=e[a])}return b}var s=b.a.createContext({}),o=function(e){var t=b.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},j=function(e){var t=o(e.components);return b.a.createElement(s.Provider,{value:t},e.children)},O={inlineCode:"code",wrapper:function(e){var t=e.children;return b.a.createElement(b.a.Fragment,{},t)}},i=b.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,r=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),j=o(a),i=n,d=j["".concat(c,".").concat(i)]||j[i]||O[i]||r;return a?b.a.createElement(d,p(p({ref:t},s),{},{components:a})):b.a.createElement(d,p({ref:t},s))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var r=a.length,c=new Array(r);c[0]=i;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p.mdxType="string"==typeof e?e:n,c[1]=p;for(var s=2;s<r;s++)c[s]=a[s];return b.a.createElement.apply(null,c)}return b.a.createElement.apply(null,a)}i.displayName="MDXCreateElement"}}]);