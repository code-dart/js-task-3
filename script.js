function checkedNum (data) {
    
    let eachData;
    let allData = [];

    for(i = 1; i <= data; i++) {
         
    if(i%2 === 0 || i%3 === 0 || i%5 === 0) {
        if(i % 2 == 0) {
            
            eachData += eachData ? '-yu' : 'yu';            
        
        } else if (i % 3 === 0) {
            
            eachData += eachData ? '-gi' : 'gi';
        
        } else if (i % 5 === 0) {
           
            eachData += eachData ? '-oh' : 'oh';

        }
        
    }

    else {
       eachData = i;
    }

      allData.push(eachData)
       
     }
  
     return allData
 }

 console.log(checkedNum(100));