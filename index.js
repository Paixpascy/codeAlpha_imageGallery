(function(){
   const buttons=document.querySelectorAll('.btn')
   const item=document.querySelectorAll('.item')

   buttons.forEach((button)=>{
    button.addEventListener('click',(e)=>{
        e.preventDefault()
        const filter=e.target.dataset.filter
        item.forEach((data)=>{
            if(filter ==='all'){
                data.style.display='block'
            }
            else{
                if(data.classList.contains(filter)){
                    data.style.display='block'
                }else{
                    data.style.display='none'
                }
            }
        })
    })
   })


})();
