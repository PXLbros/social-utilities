function Tweet(text, width, height) {
    let text = text;
    let twitterURL = 'https://twitter.com/intent/tweet?text=${' + encodeURIComponent(text) + '}';
    window.open(twitterURL, '', 'width=' + width + ', height=' + height);
}

exports.tweet = Tweet;

// function fbShare(url, width, height) {
//     let facebookURL = 'http://www.facebook.com/sharer/sharer.php?u' + encodeURIComponent(url);
//     window.open(facebookURL, '', 'width=' + width + ', height=' + height);
// }

// export default  {tweet, fbShare};