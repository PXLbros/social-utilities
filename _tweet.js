function Tweet(text, width, height) {
    let text = text;
    let twitterURL = 'https://twitter.com/intent/tweet?text=${' + encodeURIComponent(text) + '}';
    window.open(twitterURL, '', 'width=' + width + ', height=' + height);
}

exports.tweet = Tweet;