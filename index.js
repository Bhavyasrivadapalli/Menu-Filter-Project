const menu=[
{
    id:1,
    title:'Rasmalai',
    category: 'sweet',
    price:45,
    img:'1.jpg',
    desc:'Rasmalai is a very delicious dessert which is found mostly in the northern parts of india',

}
,{
    id:2,
    title:'Samosa',
    category: 'snack',
    price:30,
    img:'2.jpg',
    desc:'Samosa is a very delicious snack which is found mostly in the northern parts of india',
},
{
    id:3,
    title:'Burger',
    category: 'snack',
    price:199,
    img:'3.jpg',
    desc:'Burger is a very delicious snack which is found all over the world',
},
{
id:4,
title:'chole bature',
category: 'Breakfast',
price:99,
img:'4.jpg',
desc:'chole bature  is a very delicious snack which is mostly found in northern parts of india',
},
{
    id:5,
    title:'Butter Chicken',
    category:' Main course',
    price:249,
    img:'5.jpg',
    desc:'Butter Chicken is a very delicious snack which is mostly found in northern parts of india',
    },
    {
        id:6,
        title:'Masala Dosa',
        category:'Breakfast',
        img:'6.jpg',
        price:75,
        desc:'Masala Dosa is a very delicious snack which is mostly found in southern parts of india',
        },
        {
            id:7,
            title:'Full meals',
            category:'Main course',
            img:'7.jpg',
            price:140,
            desc:'Full meals is a very delicious snack which is mostly found in southern parts of india',
            },
        {
                id:8,
                title:'Chicken Dum Birayani',
                category:'Main course',
                price:299,
                img:'8.jpg',
                desc:'Chicken Dum Birayani is a very delicious snack which is mostly found in southern parts of india',
                },
         {
                    id:9,
                    title:'Veg Thali',
                    category:'Main course',
                    price:199,
                    img:'9.jpg',
                    desc:'Veg Thali is a very delicious snack which is mostly found in southern parts of india',
                    },
                    {
                        id:10,
                        title:'Jalebi',
                        category:'sweet',
                        price:45,
                        img:'10.jpg',
                        desc:'Jalebi is a very delicious snack which is mostly found in southern parts of india',
                        },

];
const sectionCenter=document.querySelector('.section-center');
const filterBtns=document.querySelectorAll('.filter-btn');

window.addEventListener('DOMContentLoaded',function(){
    displayMenuItems(menu);
});
/* filterBtns.forEach(function (btn){
    btn.addEventListener('click',function(e){
        
    })
}) */
/* filterBtns.forEach(function (btn){
   
    btn.addEventListener('click',function(e){
        console.log(e.currentTarget.dataset);
    });


}); */
filterBtns.forEach(function (btn){
    btn.addEventListener('click',function(e){
        console.log(e.currentTarget.dataset.id);
      const category= e.currentTarget.dataset.id;
      const menuCategeory=menu.filter(function(menuItem){
        if(menuItem.category===category){
            return menuItem;
        }
        console.log(menuItem.category);
        
      });
     
     // console.log(menuCategeory);
     if(category==='all'){
        displayMenuItems(menu);
     }else{
        displayMenuItems(menuCategeory);
     }
    });

})



function displayMenuItems(menuItems){


    let display=menuItems.map(function(item){
       return `  <article class="menu-item">
       <img src=${item.img} class="photo" alt="" style="height: 100px; width: 100px;">
       <div class="item-info">
       <header>
           <h4>${item.title} </h4>
           <h4 class="price">${item.price} </h4>

       </header>
       <p class="item-text">${item.desc} </p>
       </div>
   </article>`;
    
    });
    display=display.join('');
    //console.log(display);
    sectionCenter.innerHTML=display;
}
    


