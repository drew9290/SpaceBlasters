// object with two parameters
function Shooter(startingX, startingY, team) {

    var self = this;
    self.x = startingX;
    self.y = startingY;
    self.size = 80;
    self.speed = 2;
    self.img = loadImage('/SpaceBlasters/img/shooter.png');
    self.team = team;
    self.canShoot = true;
    self.delay = 1000
    self.armor = 5;
    self.bulletSpeed = 7;

    // returns a vector
    // assures we are aiming at the ship
    self.aim = function () {
        var target = player1
        var dx = target.x - self.x;
        var dy = target.y - self.y;
        var vector = createVector(dx, dy);
        vector.normalize();
        return vector;
    }

    self.shoot = function (vector) {
        if (self.canShoot) {
            self.canShoot = false;
            sprites.push(new Bullet(self.x, self.y, vector, enemyTeam))
            setTimeout(function () {
                self.canShoot = true;
            }, self.delay);
        }
    }



    self.control = function () {
        //self.y += self.speed;
        if (self.y > height) {
            self.y = random(-height, -self.size);
            self.x = random(0, width);
            score += 1;
        }
        var vector = self.aim();
        self.shoot(vector.mult(self.bulletSpeed));
    }

    self.display = function () {
        /*fill(120, 89, 43); 
        stroke(0);
        strokeWeight(5);
        rect(self.x, self.y, self.size, self.size);*/
        image(self.img, self.x, self.y, self.img.height * 0.8, self.img.height * 0.8);
    }

    self.isColliding = function (other) {
        var distance = dist(other.x, other.y, self.x, self.y);


        if (distance < self.size / 2 + other.size / 2) {
            return true;
        }
        return false
    }

    self.handleCollision = function () {
        var index = sprites.indexOf(self);
        if (self.armor > 0) {
            self.armor -= 5;
        } else {
            if (index !== -1) {
                var index = sprites.indexOf(self);
                if (index !== -1) {
                    sprites.splice(index, 1);
                }
                score += 10;
            }
        }
    }
}