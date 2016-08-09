function FbShare(url, width, height) {
    let facebookURL = 'http://www.facebook.com/sharer/sharer.php?u' + encodeURIComponent(url);
    window.open(facebookURL, '', 'width=' + width + ', height=' + height);
}

module.exports = FbShare;