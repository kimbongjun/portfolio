const settings = {
  "name": "my-first-frontity-project",
  "state": {
    "frontity": {
      "url": "https://test.frontity.org",
      "title": "Bongjour Portfolio",
      "description": "WordPress Developer"
    }
  },
  "packages": [
    {
      "name": "@frontity/mars-theme",
      "state": {
        "theme": {
          "menu": [
            [
              "Home",
              "/"
            ],
            [
              "Product",
              "/category/products-notice/"
            ],
            [
              "News",
              "/category/news/"
            ],
            // [
            //   "Japan",
            //   "/tag/japan/"
            // ],
            [
              "Resume",
              "/materials/"
            ]
          ],
          "featured": {
            "showOnList": true,
            "showOnPost": false
          }
        }
      }
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "url": "https://classys.cn"
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
