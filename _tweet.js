function _tweet(text, width, height) {
    let twitterURL = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`;
    window.open(twitterURL, '', 'width=' + width + ', height=' + height);
}

module.exports = _tweet;