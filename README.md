## Brewtiful Web Application:

- Created a web application where you can find your favorite brewery in the US.
- You can either search by the name of the brewery or the city
- You can find the location of the brewery on a map on larger screens
- You can also visit their Website, call them or navigate via Google Maps
- You can filter the breweries by type (Microbrewery, Brewpub, Regional etc.)

## API Documentation:

https://www.openbrewerydb.org

## Website

http://hsankalp.github.io/brewtiful

## Tools used:

- JavaScript
- ReactJS
- Bootstrap
- OpenBreweryDB (https://www.openbrewerydb.org): For the brewery data
- Leaflet (https://leafletjs.com/): To display the map and location
- Picsum (https://picsum.photos): For random images

## Topics Covered

- React Hooks (useState, useEffect, useRef, useContext)
- Custom React Hooks (useFetch) for reusability
- Context API for global state management
- Responsive

## To Do:

- Implement Infinite Scroll
- Do something with Tags in the api response

## Sample API Response Structure:

```
[
  ...
  {
    id: 299,
    name: "Almanac Beer Company",
    brewery_type: "micro",
    street: "651B W Tower Ave",
    city: "Alameda",
    state: "California",
    postal_code: "94501-5047",
    country: "United States",
    longitude: "-122.306283180899",
    latitude: "37.7834497667258",
    phone: "4159326531",
    website_url: "http://almanacbeer.com",
    updated_at: "2018-08-23T23:24:11.758Z",
    tag_list: ["dog friendly"]
  },
  ...
]
```
