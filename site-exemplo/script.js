chromo = [ ]
player = [ ] ]

var ch = Math.floor((Math.random() * 4)+1) * 1       
chromo.push(ch)
console.log(`chromo: ${ch}`)
this.c1, this.c2, this.c3, this.c4 = 0

function clicou1(c1){    
    this.c1 = 1
    player.push(this.c1)
    console.log(`player: ${player}`)
    
}
function clicou2(c2){    
    this.c2 = 2
    player.push(this.c2)
    console.log(`player: ${player}`)
}
function clicou3(c3){    
    this.c3 = 3
    player.push(this.c3)
    console.log(`player: ${player}`)
}
function clicou4(c4){    
    this.c4 = 4
    player.push(this.c4)
    console.log(`player: ${player}`)
}
