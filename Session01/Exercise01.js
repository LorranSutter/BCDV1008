function exercise01(str) {
    if(str === '') return '';
  
    str = str.toLowerCase().split(' ');
  
    for(let i in str){
      str[i] = str[i].replace(str[i][0],str[i][0].toUpperCase());
    }
    
    return str.join(' ');
  }
