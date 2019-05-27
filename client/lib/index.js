window.onload = function(d) {
  var iframe = document.createElement('iframe');
  win = iframe.contentWindow || iframe;
  iframe.style.border = 'none';
  iframe.style.height = '100%';
  iframe.style.width = '100%';
  iframe.src = './app.html?token=' + window.parent.feedbackApp.widget;
  document.body.appendChild(iframe);
};
