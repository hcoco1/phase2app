# Ivan Arias. Full-Stack Engineering Student.

## Phase 2 Project: Real State Site

### Link: https://phase2app.vercel.app/

### Database Link:  https://phase2-db.onrender.com/

#### Project Pitch

**Real Estate Site (RES)** is a REACT/REACT-BOOTSTRAP/REACT-ROUTER app that accesses data from a web database. RES returns a collection of real estate properties for sale and rent. Each property has 13 attributes (id, address, city, state, zip code, listing price, bedrooms, bathrooms, square feet, listing date, property type, operation type, and image).

 The App fetches all the data as soon the browser load. Users can navigate between different links thanks to react-router features. Also, users can filter and search properties by price, property type, and operation type.

Additionally, the user can view details about a property by clicking the View button, and immediately they will be sent to a new view where only the selected property is shown. Also, the users can access more images and the delete button in the detail view. Finally, users can add a new property to the database by filling out the form. Also, The user can view some statistic charts in the chart tab.

## Instructions:

 Users can access the app data through four main links in the navigation bar: Home, Properties, Tables, and Charts.

1.- Once the page load, the home page shows a few images and some information about real estate.

2.-All the data is fetched in the properties tab. The user can scroll down and check the collection of properties. There are two nested tabs in  Properties: List and Add New Property. The List tab is, by default, where all data is displayed. By clicking the view button on a property card, users will be sent to a new view where only the selected property is shown. Also, the users can access more images, and a delete button is in the detail view. The user will be sent to the List tab by clicking on the List button. The Add New Property tab is where the user adds new real estate properties in the database.

3.- A table is showing in the Table tab. It contains information on seven attributes (id,  city, state, listing price,  square feet,  property type, and operation type). Users can sort the attributes by clicking on the table header. Additionally, users can search for a specific detail by typing in the search text box input located about the table.

4.- Two statistics charts are shown in the Charts tab. A bar chart and a line chart show information about how properties prices in Texas state. If the user hovers over the graph, some information will be displayed.



