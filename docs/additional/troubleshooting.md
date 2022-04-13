# Troubleshooting
Issues you might encounter and possible fixes.

[[toc]]

<br>

### Missing Web Server
Check your path in the browser window, and make sure it begins with either `http` or `https`. If it is something else, chances are that you haven't set-up a [Web Server](https://developer.mozilla.org/en-US/docs/Learn/Common_questions/What_is_a_web_server).

### Incorrect paths
Verify that all paths — pointing to the files — are correct.

### Some cookies are not deleted
TODO: Some services such as GA4 recreate cookies right after deletion

### Some cookies are not deleted on subdomains
Services such as Google Analytics set their cookies in the main domain. The plugin is unaware of this and simply searches for cookies in the current subdomain.

You have to manually specify the `domain` field within each cookie declared in the `autoClear` object.