// object with two parameters
function Bullet(startingX, startingY, vector, team) {

    var self = this;
    self.x = startingX;
    self.y = startingY;
    self.size = 10;
    self.speed = 10;
    self.team = team;
    self.vector = vector;
    
    if(self.team === playerTeam) {
        self.img = loadImage('../img/bullet.png');
    } else if(self.team === enemyTeam) {
        self.img = loadImage('../img/egg2.png');
    }

    self.control = function () {
        self.x += self.vector.x;
        self.y += self.vector.y;
        
        //bullet out of bounds
        if(self.y < 0 ||
           self.y > height ||
           self.x < 0 ||
           self.x > width) {
            //destroys the bullet
            var index = sprites.indexOf(self);
            if (index !== -1) {
                sprites.splice(index, 1);
            }
        }
    }


    self.display = function () {
        /*fill(120, 89, 43); 
        stroke(0);
        strokeWeight(5);
        rect(self.x, self.y, self.size, self.size);*/
        image(self.img, self.x, self.y, self.img.height * 0.05, self.img.height * 0.05);
    }

    self.isColliding = function (other) {
        var distance = dist(other.x, other.y, self.x, self.y);


        if (distance < self.size / 2 + other.size / 2) {
            return true;
        }
        return false
    }

    self.handleCollision = function () {
        //destroys the bullet
        var index = sprites.indexOf(self);
        if (index !== -1) {
            sprites.splice(index, 1);
        }
    }
}