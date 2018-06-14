// object with two parameters
function Sidewinder(startingX, startingY, team) {
    
    var self = this;
    self.x = startingX;
    self.y = startingY;
    self.size = 20;
    self.speed = 6;
    self.img = loadImage('../img/destiny.png');
    self.team = team;
    
    self.control = function() {
        self.x += self.speed;
        if(self.x > height) {
            self.x = -self.size;
            self.y = random(0, width);
            score = score + 1;
            
        }
    }

    self.display = function() {
        /*fill(253, 226, 0); 
        stroke(0);
        strokeWeight(5);
        rect(self.x, self.y, self.size, self.size);*/
        image(self.img, self.x, self.y, self.img.height * 0.02, self.img.height * 0.02)
    }
    
    self.isColliding = function(other) {
        var distance = dist(other.x, other.y, self.x, self.y);
        
        
        if(distance < self.size / 2 + other.size / 2) {
            return true;
        }
        return false
    }

    self.handleCollision = function() {
        
    }
}
