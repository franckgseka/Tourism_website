<?php
	define('HOST','localhost');
	define('DB_NAME','mon site');
	define('USER','root');
	define('PASS','8889');
		$dbh = new PDO('mysql:host=localhost:8889;dbname=mon site','root','root');
	try{
		$db = new PDO("mysql :host=" . HOST . ";dbname=" . DB_NAME, USER, PASS);
		$db-> setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
	} catch(PDOException $e){
		echo $e;
	}


	?>