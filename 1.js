const child_process = require('child_process')
const { spawn } = child_process


const userInput = '.'

const streams = spawn('ls', ['-la', userInput], {
  cwd: '../',  // cwd表示默认在哪个路径下选择
  env: {NODE_ENV: 'development'}, // 环境变量
  shell: '', // 指定shell路径，一般不用,
  maxBuffer: 1024 * 1024, // 设置最大缓存,最大2mb,1024*1024
});

streams.stdout.on('data',(chunk)=>{
  console.log(chunk.toString())
})
