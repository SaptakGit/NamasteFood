Food Ordering App
/*
* Header
*  - Logo
*  - Nav Items
* Body
*  - Search
*  - RestaurantContained
*    - RestaurentCard
*       - Img
*       - Name of Restaurent, Star Rating, Cousine, delhiveery time etc
* Footer
*  - Copyright
*  - Links
*  - Address
*  - Contact
*/


npm init <br>
npm install -D parcel<br>
npm install react<br>
npm install react-dom<br>

props : are just normal arguments to a function. Passing a prop to a component is just like passing an argument to a function.React takes this props and wrap it into an object and pass it to the component.

https://www.swiggy.com/dapi/restaurants/list/v5?lat=129351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING

config-driven UI: UI changes uopn change in data. Controlling th UI using data/config that comes from backend.

whenever we use Map(), we need to pass a unique key.

array.join(",") = print the array elements with comma separated.

? => optional chaining

Separate file separate component.

Two types of Exports:
    Named Export:
        export const Component;
        import {Component} from "path";
    Default Export
        export default Component;
        import Component from "path";