# img-scrapers

## Description

Download images from google. Currently using JS with plans to include other languages in the future.

*Default set to download 100 hotdog images - see step 5 to overwrite default*

## Instructions

1. Clone repository, in the terminal execute:

  ```
  $git clone "https://github.com/quickresolve/img-scrapers.git"
  
  ```
2. Enter img-scrapers direcotry

```
$cd img-scrapers/

```

3. Install npm modules
 
 ```
 $npm install
 
 ```
 
4. Run scraper to download images of hotdogs & create json file of image data
 
  ```
  $node scrape-google
  
  ```
5. **OPTIONAL** Specify optional parameters for image keyword and number of images(max 100)
 
  ```
  $node scrape-google {keyword} {number}
  
  ```
 
 
 
