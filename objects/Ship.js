function Ship(team) {
    
    // explicit reference to this instance (of an object)
    var self = this;
    
    // position is bottom middle
    self.x = width / 2; //middle of the screen
    self.y = height -50; //50 px from the bottom
    self.size = 19;
    self.speed = 6;
    self.team = team;
    self.img = loadImage('/img/d5yyptv.png');
    self.canShoot = true;
    self.delay = 290;
    
    self.control = function() {
        
        var a = 97;
        var A = 65;
        
        var d = 100;
        var D = 68;
        
        var w = 87;
        
        var s = 83;
        
        var space = 32;
        
        
        
        if(   (keyIsDown(a) || keyIsDown(A)) && self.x > 25 ) {
            self.x -= self.speed;
        }  
        
        if(   (keyIsDown(d) || keyIsDown(D)) && self.x < width - 25 ) {
            self.x += self.speed;
        }
        
        if(   (keyIsDown(w)) && self.y > 25 ) {
            self.y -= self.speed;
        }
        
        if(   (keyIsDown(s)) && self.y < height - 25 ) {
            self.y += self.speed;
        }
        
        if(keyIsDown(space)) {
            self.shoot();
        }
              
    }
    
    self.shoot = function() {
        if(self.canShoot){
            self.canShoot = false;
            sprites.push(new Bullet(self.x, self.y, createVector(0, -7), playerTeam));
            setTimeout(function(){
                self.canShoot = true;
            }, self.delay);
        }
    }
        
        
    
    self.display = function draw() {
        /*
        fill(10, 232, 8);
        stroke(255);
        ellipse(self.x, self.y, self.size, self.size)
        */
        image(self.img, self.x, self.y, self.img.height * 0.2, self.img.height * 0.2);
    }

    self.isColliding = function(other) {
        var distance = dist(other.x, other.y, self.x, self.y);
        
        if(distance < self.size / 2 + other.size / 2) {
            return true;
        }
        return false
    }
    
    self.handleCollision = function() {
        background(0);
        textSize(50);
        textAlign(CENTER);
        fill(255);
        strokeWeight(2);
        text("Game Over", width/2, height/2);
        text(score, width/2, 2 * height/3)
        noLoop();
        
    }
    
}