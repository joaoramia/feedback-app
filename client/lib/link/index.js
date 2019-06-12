window.onload = function(d) {
    var iframe = document.createElement('iframe');
    win = iframe.contentWindow || iframe;
    iframe.style.border = 'none';
    iframe.style.height = '250px';
    iframe.style.width = '250px';
    iframe.style.position = 'absolute';
    iframe.style.top = '0';
    iframe.style.bottom = '0';
    iframe.style.margin = 'auto';
    iframe.src = 'http://localhost:8080/cdn/link/link.html?token=' + window.parent.feedbackApp.widget;

    document.body.appendChild(iframe);
  };
  
  function createPusher() {
    var pusher = document.createElement('div');
    win = pusher.contentWindow || pusher;
    pusher.style.border = 'none';
    pusher.style.height = '100px';
    pusher.style.width = '100%';
    pusher.style.position = 'relative';
    pusher.style.flex = 'none';
    pusher.style.overflow = 'hidden';
    document.body.appendChild(pusher);
  }