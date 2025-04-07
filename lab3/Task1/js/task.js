const str='asdd as as ass'
const result=function (str){
  let str1=''
  str.forEach((item)=>{
    str1+=item+' '
  })
  str1=str1.trim()
  let arr=str1.split(' ')
  let out=''
  let min=Number.MAX_SAFE_INTEGER
  arr.forEach((item)=>{
    if(item.length<min) min=item.length
  })
  arr.forEach((item)=>{
    if(min===item.length) out+=item+' '
  })
  out=out.trim()
  return out
}
console.log(result(['as as as', 'a a a']));
