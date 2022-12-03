const { default: NormalizeOpts } = require("@babel/core/lib/transformation/normalize-opts")

// Code your solutions in this file

function writeCards (name, event){
    let greeting = []
    for (let i=0; i< name.length; i++){
        greeting.push(`Thank you, ${name[i]}, for the wonderful ${event} gift!`)
    }
    return greeting
}

function countDown(i){
    while (i >0){
        console.log(i)
        i --
    } 
    console.log(i)
}

