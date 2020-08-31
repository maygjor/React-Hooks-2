

export const UseComputeLongestWord=(arr)=>{
    console.log(JSON.stringify(arr));
    if (!arr){return [];}

    console.log('computing longest word');
    let longestWord= '';
    
    arr.forEach(user=>user.title.split(' ').forEach(word=>{
      if(word.length>longestWord.length){
        longestWord=word;
      }
    }));
    return longestWord;
}

