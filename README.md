App
└── NavigationBar
    ├── Link to Home  (React Router)
    ├── Link to Properties (React Router)
    Properties
    ├── Link to ListProperties (React Router)
    ├── Link to AddProperty (React Router)
    Home
    ├── CarouselHome
    ├── FooterHome
    ListProperties
    ├── Search
    └── PropertyCards
    AddProperty
    │
    PropertyDisplay
    ├── ViewBtn
    │   └── CardModal



    ISSUES:

1.- Updating Elements in Arrays in State => 
                        Infinite loop:
                                Warning: Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render.
	-COMPONENT: function ListProperties()
	-COMPONENT: function App() USE STATE LOCATED HERE
	-
	-I tried : React State and Arrays (canvas), Chatgpt



2.- DELETE BUTTON OK, BUT CAN'T DELETE AT THE DATABASE (FETCH)

	-COMPONENT: function App() USE STATE LOCATED HERE
	-COMPONENT: function PropertyDisplay() DELETE BTN LOCATED HERE
	-
	-

3.- REACT ROUTER 6. PATH ISSUES. 
	-COMPONENT: function    PropertyDisplay()
    				├── ViewBtn()
    				     └── CardModal()

CardModal() is ok?, The issue is in PropertyDisplay() and ViewBtn()

Cannot read properties of undefined (reading 'image')
TypeError: Cannot read properties of undefined (reading 'image')
    at PropertyDisplay (http://localhost:3000/static/js/bundle.js:2001:39)
    at renderWithHooks (http://localhost:3000/static/js/bundle.js:40844:22)
    at mountIndeterminateComponent (http://localhost:3000/static/js/bundle.js:44130:17)
    at beginWork (http://localhost:3000/static/js/bundle.js:45426:20)
    at HTMLUnknownElement.callCallback (http://localhost:3000/static/js/bundle.js:30436:18)
    at Object.invokeGuardedCallbackDev (http://localhost:3000/static/js/bundle.js:30480:20)
    at invokeGuardedCallback (http://localhost:3000/static/js/bundle.js:30537:35)
    at beginWork$1 (http://localhost:3000/static/js/bundle.js:50411:11)
    at performUnitOfWork (http://localhost:3000/static/js/bundle.js:49658:16)
    at workLoopSync (http://localhost:3000/static/js/bundle.js:49581:9)