function setStatus(type) {
    const token = getToken();
    const Http = new XMLHttpRequest();
    const url = 'http://localhost:8080/api/feedback/answer';
    const params = 'value=' + type + '&token=' + token + '&siteUrl=' + window.location.hostname;
    Http.open('POST', url, true);

    //Send the proper header information along with the request
    Http.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
    Http.send(params);

    Http.onreadystatechange = (e) => {
        if (Http.readyState == 4) {
            console.log('DONE - Hide iFrame form!', Http.responseText);
        }
    }
}

function getToken() {
    var url = window.location.search.substring(1); //get rid of "?" in querystring
    var qArray = url.split('&'); //get key-value pairs
    if (qArray.length) {
        return qArray[0].replace('token=', '');
    }
    return '';
}