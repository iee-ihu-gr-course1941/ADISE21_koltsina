<html>
    <head>
        <meta charset="utf-8">
        <link rel='stylesheet' type='text/css' href='../../css/pages.css'/>
        <link rel='stylesheet' type='text/css' href='../../css/extended-form.css'/>
        <title>Koltsina Game</title>
        <style>
            @import url('https://fonts.googleapis.com/css2?family=Audiowide&family=Cutive&family=Prosto+One&family=Russo+One&family=Share+Tech+Mono&family=Slackey&display=swap');
        </style>
        <script type="module">
            import { connectDiv } from "../../js/pages/connect-page.js";
            connectDiv();
        </script>
    </head>
    <body class="body-style">
        <div class="top-text">Connect</div>
        <section>
            <div class="form-container" style="margin-top: 150px !important;">
                <div id="username-text" class="text" style="font-size:15px"></div>
                <br></br>
                <div id="label" class="text" style="font-size:20px">Name</div>
                <div class="control">
                    <input type="text" id="username">
                    <input id="submit-button" type="button" value="Start">
                </div>
                <br></br>
                <input id="anonymous-button" class="text alternate" type="button" value="Play anonymously">
            </div>
        </section>
    </body>
</html>