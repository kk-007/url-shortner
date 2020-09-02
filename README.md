# url-shortener

- This API converts a long website links to short (like goo.gl,bit.ly).

<img src="https://github.com/kk-007/url-shortner/blob/master/Gif.gif"/>

### Prerequisites

- Node.js
- NPM
- Express


### Installation

- Clone the project
- Run given commands to the project directory

- This command will install all require packages
```
npm install
```
<p align="center">
  <img src="https://github.com/kk-007/url-shortner/blob/master/npm_install.JPG" title="npm_install_command">
</p>

- This command will start server in localhost and deploy the API on it (basically will run app.js file).
```
node app
```
<p align="center">
  <img src="https://github.com/kk-007/url-shortner/blob/master/node_app.JPG" title="npm_install_command">
</p>


### How to use

- Now API is running on localhost. One can call the API from anywhere (like in own program or Postman), I am using cURL.
- User has to call the api with POST method at end-point **api/shorten** (call with JSON object, key name is **fullURL** and value is **Website's Long Link**)
<p align="center">
  <img src="https://github.com/kk-007/url-shortner/blob/master/post.JPG" title="npm_install_command">
</p>

- It will return the JSON object. In this object, "url" key has short url.
- Now insert "localhost:<port_number>/<short_url>" into browser and it will redirect it to original url.
<p align="center">
  <img src="https://github.com/kk-007/url-shortner/blob/master/get.JPG" title="npm_install_command">
</p>
 

## Authors

* **Keval S. Navadiya** 
