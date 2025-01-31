let drops = []
let count = 1000

function setup() {
  createCanvas(innerWidth, innerHeight)

  for(let i = 0; i < count; i++) {
    drops[i] = new Drop()
  }
}

function draw() {
  background(230, 230, 250)

  drops.forEach(drop => {
    drop.update()
    drop.show()
  })
}
