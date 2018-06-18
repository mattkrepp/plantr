const html = require("html-template-tag");

module.exports = (users) => layout(html`
<html lang="en">
<head>
  <title>WikiStack</title>
  <link href="http://netdna.bootstrapcdn.com/bootstrap/3.0.3/css/bootstrap.min.css" rel="stylesheet">
  <link href="/style.css" rel="stylesheet">
</head>
<h3>Users</h3>
<hr>
<ul class="list-unstyled">
  <ul>
    ${users.map(user => html`<li>
      <a href="/users/${user.id}">${user.name}</a>
    </li>`)}
  </ul>
</ul>
`)