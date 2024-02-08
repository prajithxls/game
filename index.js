const head_node=document.getElementById('header');
const mode_node=document.getElementById('mode_btn');
const drop_down=document.querySelector('.drop_down')

function onclick(event){
//  const new_node=document.querySelector('#headers');
//    if(flag){
//     new_node.style.display='block';
//     flag=false;
//    }
//    else{
//     new_node.style.display='none';
//     flag=true
//    }
    //  const div=document.createElement('div');
    //  div.id='headers';
    //  const pp=document.createElement('p');
    //  pp.innerText='Battle Ground Mobile pakistan';
    //  div.className="msg"
    //  div.prepend(pp);
    // document.body.prepend(div);
    // // window.alert('hello');
    // if(head_node.title==="bgmi"){
    //     head_node.title="battle"
    // }
    // else{
    //     head_node.title="bgmi"
    // }
}

mode_node.addEventListener('click',()=>{
    if(drop_down.style.display==="none"){
        drop_down.style.display="block"
    }
    else{
        drop_down.style.display="none"
    }
})


head_node.addEventListener('click',onclick)






