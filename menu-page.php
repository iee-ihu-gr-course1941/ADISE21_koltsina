<html>
<head>
    <meta charset="utf-8">
    <link rel='stylesheet' type='text/css' href='css/menu-page.css'/>
    <title>Koltsina Game</title>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Audiowide&family=Cutive&family=Prosto+One&family=Russo+One&family=Share+Tech+Mono&family=Slackey&display=swap');
    </style>
    <script src="js/menu-page.js"></script>
</head>

<body class="body-style">
<div class="menu-text">Main Menu</div>
<section>
    <div class="form-container">
        <div class="connected-user">username</div>
        <form action="#">
            <div class="control">
                <input onclick="openPageGame()" type="button" value="New Game">
            </div>
            <div class="control">
                <input onclick="openPageScores()" type="button" value="Score">
            </div>
            <div class="control">
                <input onclick="funcLogout()" type="button" value="Logout">
            </div>
        </form>
        <div class="style-icon" onclick="openPageCredits()">
            <span class="tooltiptext">Click to see credits</span>
        </div>
    </div>
</section>
</body>
</html>