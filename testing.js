<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8" />
	<meta http-equiv="X-UA-Compatible" content="IE=edge" />
	<meta name="viewport"
		content="width=device-width, 
				initial-scale=1.0" />
	<title>
		How to Make Dark Mode for Websites using HTML CSS & JavaScript ?
	</title>
	<style>
		body {
			padding: 25px;
			background-color: white;
			color: black;
			font-size: 25px;
		}

		.dark-mode {
			background-color: black;
			color: white;
		}
	</style>
</head>
	<div>
		<button onclick="darkMode()">Darkmode</button>
	</div>
	<script>
		function darkMode() {
			var element = document.body;
			element.classList.toggle("dark-mode");
		}
	</script>
</body>
</html>
