<div align="center"><h1>Ivan Arias. Full-Stack Engineering Student.</h1></div>

<div id="badges" align="center">
  <a href="https://www.linkedin.com/in/arias-ivan-hcoco1/">
    <img src="https://img.shields.io/badge/LinkedIn-blue?style=for-the-badge&logo=linkedin&logoColor=white" alt="LinkedIn Badge"/>
  </a>
  <a href="https://www.youtube.com/channel/UCban0ilP3jBC9rdmL-fPy_Q">
    <img src="https://img.shields.io/badge/YouTube-red?style=for-the-badge&logo=youtube&logoColor=white" alt="Youtube Badge"/>
  </a>
  <a href="https://twitter.com/hcoco1">
    <img src="https://img.shields.io/badge/Twitter-blue?style=for-the-badge&logo=twitter&logoColor=white" alt="Twitter Badge"/>
  </a>
</div>  


## Phase 2 Project: Real State Site.
### Deployment link: https://phase2app.vercel.app/
##### Phase 2 Project repository link: https://github.com/hcoco1/phase2app
### Database link:  https://phase2-db.onrender.com/
##### Database repository link: https://github.com/hcoco1/phase2-dB

#### Project Pitch

**Real Estate Site (RES)** is a REACT/REACT-BOOTSTRAP/REACT-ROUTER app that accesses data from a web database. RES returns a collection of real estate properties for sale and rent. Each property has 13 attributes (id, address, city, state, zip code, listing price, bedrooms, bathrooms, square feet, listing date, property type, operation type, and image).

 The App fetches all the data as soon the browser load. Users can navigate between different links thanks to react-router features. Also, users can filter and search properties by price, property type, and operation type.

Additionally, the user can view details about a property by clicking the View button, and immediately they will be sent to a new view where only the selected property is shown. Also, the users can access more images and the delete button in the detail view. Finally, users can add a new property to the database by filling out the form. Also, The user can view some statistic charts in the chart tab.

## Instructions:

 Users can access the app data through four main links in the navigation bar: Home, Properties, Tables, and Charts.

1.- Once the page load, the home page shows a few images and some information about real estate.

2.-All the data is fetched in the properties tab. The user can scroll down and check the collection of properties. There are two nested tabs in  Properties: List and Add New Property. The List tab is, by default, where all data is displayed. By clicking the view button on a property card, users will be sent to a new view where only the selected property is shown. Also, the users can access more images, and a delete button is in the detail view. The user will be sent to the List tab by clicking the List button. The Add New Property tab is where the user adds new real estate properties in the database.

3.- A table is showing in the Table tab. It contains information on seven attributes (id,  city, state, listing price,  square feet,  property type, and operation type). Users can sort the attributes by clicking on the table header. Additionally, users can search for a specific detail by typing in the search text box input located about the table.

4.- Two statistics charts are shown in the Charts tab. A bar chart and a line chart show information about how properties prices in Texas state. If the user hovers over the graph, some information will be displayed.


---

![how this app works](https://github.com/hcoco1/phase2app/blob/main/gif_phase_2.gif?raw=true) 
 
---
### **Project Structure**

 Real Estate Site runs on a single page and has Eighteen  JSX components.
 ![how this App works](https://github.com/hcoco1/phase2app/blob/main/phase2_components.png?raw=true) 
 
 
 
 
 Also, RES uses seven client-side routes (four nested). Users can navigate between routes using the navigation bar and the nested menu.
 

```javascript
<Routes>
  <Route path='/' element={<Home />} />
  <Route path='charts' element={<PropertyCharts/>}></Route>
  <Route path='search' element={<SearchTable />}></Route>
  <Route path='/properties/' element={<Properties />}>
    <Route path='list' element={<ListProperties />} />
    <Route path='add' element={<AddProperty />} />
    <Route path=':id' element={<PropertyDisplay />} />
    <Route path='*' element={<NoMatch />} />
  </Route>
</Routes>
```
Additionally, RES uses three RESTful routing conventions:

| Route   Name    | URL             | HTTP Verb | Description                |
|-----------------|-----------------|-----------|----------------------------|
| ListProperties  | properties/list | GET       | Display all properties     |
| AddProperty     | properties/add  | POST      | Add new property to db     |
| PropertyDisplay | properties/:id  | DELETE    | Delete a specific property |

---
**Real Estate Site (RES)**  makes GET, POST, and DELETE requests to the " properties " web database. The POST request is managed for a controlled form using a "react-hook-form" hook.

 Some of the dependencies of **Real Estate Site** are:

| #  	| Dependencies                               	|
|----	|--------------------------------------------	|
| 1  	|           "bootstrap": "^5.3.0",           	|
| 2  	|           "chart.js": "^4.3.0",            	|
| 3  	|           "mdb-react-ui-kit": "^6.1.0",    	|
| 4  	|           "mdb-ui-kit": "^6.4.0",          	|
| 5  	|           "modern-normalize": "^2.0.0",    	|
| 6  	|           "react-bootstrap": "^2.7.4",     	|
| 7  	|           "react-chartjs-2": "^5.2.0",     	|
| 8  	|           "react-dom": "^18.2.0",          	|
| 9  	|           "react-hook-form": "^7.45.0",    	|
| 10 	|           "react-icons": "^4.9.0",         	|
| 11 	|           "react-router-dom": "^6.13.0",   	|
| 12 	|           "react-table": "^7.8.0",         	|
| 13 	|           "react-table-plugins": "^1.3.4", 	|
| 14 	|           "react-table-sticky": "^1.1.3",  	|
| 15 	|           "semantic-ui-css": "^2.5.0",     	|
| 16 	|           "semantic-ui-react": "^2.1.4",   	|


##### **Challenges**

 1. Write a clean code / Use Folders to organize the components. 

 2. Responsive design.

 3. Update the state of the modal components.
 
