//written by AJP
// player controlled
var sprites = [];
var score = 0;

var playerTeam = 1;
var enemyTeam = 2;

var player1;
var player2;

function setup() {
    createCanvas(600, 700);
    player1 = new Ship(playerTeam);
    player2 = new Ship2(playerTeam);

    // 10 random enemies
    for (var i = 0; i < 50; i++) {
        sprites.push(new Enemy(random(width), random(-500, 0), enemyTeam));
    }

    for (var i = 0; i < 5; i++) {
        sprites.push(new Sidewinder(-50, random(0, height), enemyTeam));
    }

    //plus the player
    sprites.push(player1);
    sprites.push(player2);
}

function draw() {
    background(0);

    //score in white
    fill(255);
    textSize(18);
    strokeWeight(1);
    text(score, 50, 50);
    if (score % 150 === 0 && score > 0) {
        sprites.push(new Shooter(random(width), 0, enemyTeam));
        score++;
    }
    for (var i = 0; i < sprites.length; i++) {
        sprites[i].display();
        sprites[i].control();
        for (var j = 0; j < sprites.length; j++) {
            if (sprites[i] && sprites[j]) {
                var a = sprites[i];
                var b = sprites[j];
                if (a.team !== b.team && a.isColliding(b)) {
                    a.handleCollision();
                    b.handleCollision();
                }
            }
        }
    }
}
