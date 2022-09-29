# Google Maps API Practice

This is a project from the [Understanding TypeScript](https://www.udemy.com/course/understanding-typescript/) course.  

## Table of contents

  - [Overview](#overview)
  - [Links](#links)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
  - [Acknowledgments](#acknowledgments)
 

## Overview




### Links

- Live Site URL: [github pages](https://emday4prez.github.io/select-and-share-location/)


### Built with

- [TypeScript](https://www.typescriptlang.org/) - TypeScript is a superset of JavaScript.
- [Google Maps JavaScript API](https://developers.google.com/maps/documentation/javascript/overview) - Dynamic Maps
- Google Maps JS API Loader
- [Google Geocoding API](https://developers.google.com/maps/documentation/geocoding/overview) - Address Conversion
- [Axios](https://www.npmjs.com/package/axios) - HTTP
- [Webpack](https://webpack.js.org/) - Bundling
- [dotenv-webpack](https://www.npmjs.com/package/dotenv-webpack) - Environment Variables


### What I learned

I learned about TypeScript, maps, and Google APIs.


```js
loader.load().then(() => {
 const map = new google.maps.Map(document.getElementById("map") as HTMLElement, {
    center: coordinates,
    zoom: 16,
  });
new google.maps.Marker({
    position: coordinates,
    map: map,
  });
});
```


### Continued development

I would like to earn more experience working with APIs and TypeScript.

### Useful resources

- [Webpack & TypeScript](https://webpack.js.org/guides/typescript/#root)
- [Google Maps Platform](https://developers.google.com/maps/) 


## Acknowledgments

Thank you to Maximilian Schwarzmüller for the Understanding TypeScript course. 