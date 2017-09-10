var component = require('./hello');
var app = document.createElement('div');

document.body.appendChild(app);

app.appendChild(component());
