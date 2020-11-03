export default p5 => {
    let dots = [];
    let speed;
    let width = 500, height = 380;

    p5.setup = () => {
        p5.createCanvas(500, 380);

        function Dot() {
            this.x = p5.random(-width, width);
            this.y = p5.random(-height, height);
            this.z = p5.random(width);

            this.display = function () {
                p5.noStroke();
                p5.fill(255);
                let sx = p5.map(this.x / this.z, 0, 1, 0, width);
                let sy = p5.map(this.y / this.z, 0, 1, 0, height);
                let r = p5.map(this.z, 0, width, 12, 0);
                p5.ellipse(sx, sy, r, r);
            } 

            this.update = function () {
                this.z -= speed;

                if (this.z < 1) {
                    this.z = width;
                    this.x = p5.random(-width, width);
                    this.y = p5.random(-height, height);
                }
            } 
        } 

        for (let i = 0; i < 2000; i += 1) {
            dots[i] = new Dot();
        }
    } 

    p5.draw = () => {
        p5.background(0);
        p5.translate(width / 2, height / 2);
        speed = p5.map(p5.mouseX, 0, width, 2, 20);
        for (let i = 0; i < dots.length; i += 1) {
            dots[i].display();
            dots[i].update();
        }
    } 
}