let Links={
    setColor:function(color){
        let alist = document.querySelectorAll('a');
        let i = 0;
        while( i < alist.length){
            console.log(alist[i]);
            alist[i].style.color = color;
                i = i+1;
        };
    }
}
    let Body = {
        setTagBodyColor:function (color){
            document.querySelector('body').style.color=color;  
        },
        setTagBodyBackColor:function (color){
            document.querySelector('body').style.backgroundColor=color;
        }
    }
function nightdaybutton(self){
    var target=document.querySelector('body');
    if (self.value ==='night'){
      Body.setTagBodyBackColor('black');
      Body.setTagBodyColor('white');
      self.value ='day';
      Links.setColor('white');
    } else{
      Body.setTagBodyBackColor('white')
      Body.setTagBodyColor('black');
      self.value ='night';
      Links.setColor('black');
    }
}