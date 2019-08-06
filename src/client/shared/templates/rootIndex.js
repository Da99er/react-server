const {
    RELOAD_FILES_STORAGE,
} = global.MY1_GLOBAL;

exports.START = () => `<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no" />
<link rel="shortcut icon" type="image/gif" src="data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs=" >
<link rel="preload" href="${RELOAD_FILES_STORAGE['index.js']}" as="script">
<link rel="preload" href="${RELOAD_FILES_STORAGE['index.css']}" as="style">
<link rel="stylesheet" href="${RELOAD_FILES_STORAGE['index.css']}" />
<title>Page</title>
</head>
<body >
<div id="root">`;

exports.END = (preloadData) => `</div>
<script type="text/javascript" id="preloadData">${JSON.stringify(preloadData)}</script>
<script type="text/javascript" src="${RELOAD_FILES_STORAGE['index.js']}"></script>
</body></html>`;
