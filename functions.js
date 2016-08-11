function _fbShare(url, width, height) {
    let facebookURL = 'http://www.facebook.com/sharer/sharer.php?u' + encodeURIComponent(url);
    window.open(facebookURL, '', 'width=' + width + ', height=' + height);
}


function _tweet(text, width, height) {
    let twitterURL = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`;
    window.open(twitterURL, '', 'width=' + width + ', height=' + height);
}

module.exports = { _fbShare, _tweet }