const child_process = require('child_process')
const { spawn } = child_process


const userInput = '.'

const streams = spawn('ls', ['-la', userInput], {
  cwd: '../',  // cwd表示默认在哪个路径下选择
  env: {NODE_ENV: 'development'}, // 环境变量
});

streams.stdout.on('data',(chunk)=>{
  console.log(chunk.toString())
})
