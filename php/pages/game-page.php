<html>
    <head>
        <meta charset="utf-8">
        <link rel='stylesheet' type='text/css' href='../../css/pages.css'/>
        <link rel='stylesheet' type='text/css' href='../../css/game-page.css'/>
        <link rel='stylesheet' type='text/css' href='../../css/deck.css'/>
        <title>Koltsina Game</title>
        <style>
            @import url('https://fonts.googleapis.com/css2?family=Audiowide&family=Cutive&family=Prosto+One&family=Russo+One&family=Share+Tech+Mono&family=Slackey&display=swap');
        </style>
        <script type="module">
            import { initGame } from "../../js/pages/game-page.js";
            initGame();
        </script>
    </head>

    <body class="body-style">
        <div class="top-text">Game</div>
        <div id="announcer" class="text announcer"></div>
        <div>
            <div id="game"></div>    
        </div>
    </body>
</html>
