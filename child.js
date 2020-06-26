setTimeout(()=>{
  process.send({ foo:"bar" })
},2000)
