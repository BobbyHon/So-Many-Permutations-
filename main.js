//COPY AND PASTE FROM GOOGLE!
//Permutations was impossible for me to think of by myself
//So instead of wasting another day of it
//I rather try to learn the reasoning behind it
//... I still don't fully understand this
//I somewhat understand the 'spirit' of it...
//I still can't fully motified it for any situtation I need yet
function permutations(string) {
	string = string.split('')
  let result = []

  const permute = function (arr, m = [], loop = 0){
    if (arr.length === 0 && !result.includes(m.join(''))){
      result.push(m.join(''))
    }
    else{
      for (let i = 0; i < arr.length; i++){
        let curr = arr.slice()
        let next = curr.splice(i, 1)
        
        permute(curr.slice(), m.concat(next), ++loop)
      }
    }
  }
  
  permute(string)
  
  return result
}