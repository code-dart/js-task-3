function checkedData(data) {
    let dataArray=[];

    for(i = 1; i <= data; i++) {

    let eachData = '';

 if(i % 5 === 0 ||i % 3 === 0 || i % 2 === 0){
    if(i %2 === 0){
        if(eachData != '')
        eachData+='-yu' 
        else{
            eachData ='yu' 
        }
    }
     if(i % 3 === 0){
            if(eachData !='')
            eachData += '-gi' 

            else{
                eachData = 'gi' 
            }
        }
        if(i % 5 === 0){
            if(eachData != '')
            eachData += '-oh' 

            else{
                eachData = 'oh' 
            }
        }
}
        else{
            eachData = i;
        }
        dataArray.push(eachData);
    }
    return dataArray;
}
console.log(checkedData());
