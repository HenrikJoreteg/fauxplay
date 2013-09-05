# fauxplay

Experimental browser module for playing back an array of dataURIs in an `<img>` tag to make it look like a video.

Currently only works properly in Chrome.

## installing

```
npm install fauxplay
```

## demo

Open the `demo.html` file in Chrome.

## example

```html
<!-- an image tag -->
<img id="demo">
<script src="fauxplay.bundle.js"></script>
<!-- contains an array of data uris called window.data -->
<script src="testdata.js"></script>
<script>
    // grab our image tag
    var image = document.getElementById('demo');
    // call pass in our data, the image and some optional options
    fauxplay(window.data, image, {loop: true, duration: 1514});
</script>
```

## license

MIT

## credits

If you like this follow [@HenrikJoreteg](http://twitter.com/henrikjoreteg) on twitter <3. This is a small part of my larger, grander project efforts related to webrtc: http://simplewebrtc.com
