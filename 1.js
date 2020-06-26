const child_process = require('child_process')
const {execFile} = child_process


const userInput = '.'

execFile('ls', ['-la', userInput], (error, stdout)=>{
  console.log(stdout)
})


// streams.stdout.on('data', (chunk)=>{
//   console.log('得到了数据')
//   console.log(chunk)
// })

// streams.stderr.on('data')


// exec('ls ../',(error, stdout,stderr)=>{
//   console.log(error)
//   console.log(stdout)
//   console.log(stderr)
// })
