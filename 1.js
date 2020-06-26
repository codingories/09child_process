const child_process = require('child_process')
const {execFile} = child_process


const userInput = '.'

const streams = execFile('ls', ['-la', userInput],{
  cwd: '../',  // cwd表示默认在哪个路径下选择
  env: {NODE_ENV: 'development'}, // 环境变量
  shell: '', // 指定shell路径，一般不用,
  maxBuffer: 1024*1024, // 设置最大缓存,最大2mb,1024*1024
},(error, stdout)=>{
  console.log(error) // 执行完再回调
  console.log(stdout)
});


