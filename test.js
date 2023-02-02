// function nitin(){
//     const h = new Date().getHours();
//     const m = new Date().getMinutes();
//     const s = new Date().getSeconds();
//     let a = h-12;
    
//     tasu();
//     if (m<=9&&s<=9&&h>=12){
//         let a=h-12;
//         document.write(a,":","0", m,":","0",s);
        
//     }
//     else if(s<=9&&h>=12){
//         let a=h-12;
//         document.write(a,":", m,":","0",s);
//     }
//     else if(m<=9&&h>=12){
//         let a=h-12;
//         document.write(a,":","0", m,":",s);
//     }
//     else{
//         let a=h-12;
//         document.write(a,":", m,":",s);
//     }
// }
// nitin();

function tasu(){
    let h = new Date().getHours();
    let m = new Date().getMinutes();
    let s = new Date().getSeconds();
    if(h>12){
        h=h-12;
        h="0"+h;
        document.getElementById('h').innerHTML=h;
    }
    else if(h==12){
    document.getElementById('h').innerHTML=h;
    }
    
    if(m<=9){
        m="0"+m;
    }
    document.getElementById('m').innerHTML=m;
    if(s<=9&&s>=1){
        s="0"+s;
    }
    else if(s==0){
        s="0"+s;
    }
    document.getElementById('s').innerHTML=s;
    setTimeout(tasu,1000);
}
tasu();

