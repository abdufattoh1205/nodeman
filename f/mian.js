var s1 = "abcd def abcd xyz";
var s2 = "ijk def ijk"

var chunked1 = s1.split(' ')
var chunked2 = s2.split(' ')



for(let i = 0; i < chunked1.length && chunked2.length; i++){
    
    
    var noDuplicate = function(ss1){
        let set = new Set()
        ss1.forEach(ele => set.add(ele))
        var myArr = Array.from(set)
        return myArr
    }

    console.log(chunked1[i])
    
    var noDuplicateChunked1 = noDuplicate(chunked1)
    var noDuplicateChunked2 = noDuplicate(chunked2)
    
    console.log('this is :' + noDuplicateChunked1[i])
    var empty = []

        if(noDuplicateChunked1[i] !== noDuplicateChunked2[i]){
          
           empty.push(noDuplicateChunked1[i])
           empty.push(noDuplicateChunked2[i])

           
        //    console.log(noDuplicateChunked1[i])
        }
    }






