var scrapeGoogle = (keyword, num) => {

  // Scrape image data from google
  var Scraper = require ('images-scraper')
    , google = new Scraper.Google()
    , fs = require('fs')
    , util = require('util')
    , download = require('download')
    , imgsDataFile = keyword + '-images.json'
    , dest = './imgs/' + keyword;
   
  google.list({
      keyword: keyword,
      num: num,
      detail: true,
      nightmare: {
          show: true
      }
  })
  .then((res) => {
    var imgsDataString = util.inspect(res)

    // Download images
    for (var i = 0; i < res.length; i++){
        var imgUrl = res[i].thumb_url
            filename = keyword + i + '.jpg'

        download(imgUrl, dest, {filename: filename }).then(() => {
        });
      }

  // Write json string of image data
  fs.writeFileSync(imgsDataFile, imgsDataString, 
          (err) => {
      if (err) return console.log(err);
      console.log('first 100 results from google', res);

    });
  }).catch((err) => {
      console.log('err', err);
  });
  
}

var key = process.argv[2] || 'hotdog'
    count = process.argv[3] || 100;

scrapeGoogle(key, count);