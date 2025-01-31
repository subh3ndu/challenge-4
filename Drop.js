class Drop {
  constructor() {
    this.pos = createVector(random(width), random(-200, -100))
    this.z = random(0, 20)

    this.acc = createVector(0, map(this.z, 0, 20, 0, 0.2))
    this.vel = createVector(0, map(this.z, 0, 20, 4, 10))
    this.len = map(this.z, 0, 20, 10, 20)
  }

  update() {
    this.vel.add(this.acc)
    this.pos.add(this.vel)

    if(this.pos.y > height) {
      this.pos.set(random(width), random(-200, -100))
      this.vel.set(0, map(this.z, 0, 20, 4, 10))
      this.acc.set(0, map(this.z, 0, 20, 0, 0.2))
    }
  }

  show() {
    let thick = map(this.z, 0, 20, 1, 1.5)

    noFill()
    stroke(138, 43, 226)
    strokeWeight(thick)
    line(this.pos.x, this.pos.y, this.pos.x, this.pos.y + this.len)
  }
}
