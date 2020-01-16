# React application to find breweries

Can be accessed at https://hsankalp.github.io/brewtiful

## Tools used:

- JavaScript
- ReactJS
- Bootstrap: For design
- OpenBreweryDB (https://www.openbrewerydb.org): For the brewery data
- Leaflet (https://leafletjs.com/): To display the map and location
- Picsum (https://picsum.photos): For random images

## To Do:

- Implement Infinite Scroll
- Loader and Error Handling
- Additional Filters
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
    tag_list: []
  },
  ...
]
```
