// object with two parameters
function Enemy(startingX, startingY, team) {

    var self = this;
    self.x = startingX;
    self.y = startingY;
    self.size = 20;
    self.speed = random(2, 6);
    self.img = loadImage('/SpaceBlasters/img/Asteroid.png');
    self.team = team;

    self.control = function () {
        self.y += self.speed;
        if (self.y > height) {
            self.y = random(-height, -self.size);
            self.x = random(0, width);
            self.speed = random(2, 6);
            score += 1;

        }
    }

    self.display = function () {
        /*fill(120, 89, 43); 
        stroke(0);
        strokeWeight(5);
        rect(self.x, self.y, self.size, self.size);*/
        image(self.img, self.x, self.y, self.img.height * 0.1, self.img.height * 0.1);
    }

    self.isColliding = function (other) {
        var distance = dist(other.x, other.y, self.x, self.y);


        if (distance < self.size / 2 + other.size / 2) {
            return true;
        }
        return false
    }

    self.handleCollision = function () {
        self.y = random(-height, -self.size);
        self.x = random(0, width);
        self.speed = random(2, 6);
        score += 1;
    }
}
