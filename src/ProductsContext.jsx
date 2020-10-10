import React,{useState, createContext} from 'react'

export const ProductsContext=createContext();
export const ProductsProvide=props=>{
    const [products]=useState([
        {
          discount:0.05,
          id:1,
          category:'Christmas Ball',
          name:'Green christmas ball 24cm',
          cost: 14.99,
          image: 'https://images.homedepot-static.com/productImages/55b3c88d-cb0b-4707-b9a6-88cbad17bac6/svn/northlight-christmas-ornaments-31754928-64_1000.jpg'
        },
        {
          id:2,
          category:'Christmas Ball',
          name:'Gold christmas bal 20cm',
          cost: 4.99,
          image: 'https://st.hzcdn.com/simgs/9bd10bf105b7bb97_4-4192/home-design.jpg'
        },
        {
          id:3,
          category:'Christmas Ball',
          name:'Extra large christmas ball 30cm',
          cost: 8.99,
          image: 'https://secure.img1-fg.wfcdn.com/im/08129069/resize-h600-w600%5Ecompr-r85/3289/32897889/Extra+Large+Christmas+Ornaments.jpg'
        },
        {
          id:4,
          category:'Christmas Ball',
          name:'Wool christmas house ball',
          cost: 12.99,
          image: 'https://www.coricamo.com/83872-large_pp/pattern-online-christmas-ball-with-a-view.jpg'
        },
        {
          discount:0.15,
          id:5,
          category:'Christmas Ball',
          name:'Sapphire custom christmas ball',
          cost: 38.99,
          image: 'https://assets.holyart.it/images/PR001979/en/1600/A/SN032924/CLOSEUP01_HD/h-7d0fc601/christmas-ball-80-mm-in-green-blown-glass-with-white-and-green-beads.jpg'
        },
        {
          id:6,
          category:'Christmas Lights',
          name:'Neon lights 2020',
          cost: 28.99,
          image: 'https://images-eu.ssl-images-amazon.com/images/I/616TAQPpW3L.jpg'
        },
        {
          id:7,
          category:'Christmas Lights',
          name:'Exclusive christmas lights',
          cost: 18.99,
          image: 'https://cf5.s3.souqcdn.com/item/2017/10/20/26/84/60/97/item_L_26846097_51844118.jpg'
        },
        {
          discount:0.10,
          id:8,
          category:'Christmas Lights',
          name:'Christmas bulbs',
          cost: 12.99,
          image: 'https://static3.emako.pl/pol_pl_Lampki-choinkowe-576-LED-swiatelka-na-choinke-kolor-zolty-46102_1.jpg'
        },
        {
          discount:0.20,
          id:9,
          category:'Christmas Trees',
          name:'Lime christmas ball',
          cost: 48.99,
          image: ' https://images.homedepot-static.com/productImages/b7be6901-98c3-4330-b722-97e23e4de0a3/svn/costway-pre-lit-christmas-trees-cm21242-64_1000.jpg'
        },
        {
          id:10,
          category:'Christmas Trees',
          name:'Lime christmas ball',
          cost: 22.99,
          image: 'https://secure.img1-fg.wfcdn.com/im/78537617/compr-r85/1342/13429619/norway-green-spruce-artificial-christmas-tree.jpg'
        },
        {
          id:11,
          category:'Christmas Trees',
          name:'Lime christmas ball',
          cost: 30.99,
          image: 'https://images-na.ssl-images-amazon.com/images/I/71EglVV0SML._SL1500_.jpg'
        },
        {
          discount:0.45,
          id:12,
          category:'Gifts',
          name:'A red big gift',
          cost: 14.99,
          image: 'https://cdn2.iconfinder.com/data/icons/christmas/512/gift.png'
        },
        {
          id:13,
          category:'Gifts',
          name:'Sweet present',
          cost: 12.99,
          image: 'https://target.scene7.com/is/image/Target/GUEST_ec534292-c0fb-463d-abce-9e17cb3aba85?wid=488&hei=488&fmt=pjpeg'
        },
        {
          id:14,
          category:'Gifts',
          name:'Lovely present',
          cost:13.99,
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSjGwDgt9XLdUnovt8G0t8UwFgsEzGdyYG0mA&usqp=CAU'
        },
        {
          id:15,
          category:'Christmas Sleigh',
          name:'Little sleigh for kids',
          cost: 58.99,
          image: 'https://cdn.shopify.com/s/files/1/1741/6027/products/Snow_Racer_sled_sledge_sleigh_toboggan_for_sale_in_Ireland_www.sled.ie-500x500_large.jpg?v=1495122685'
        },
        {
          discount:0.30,
          id:16,
          category:'Christmas Sleigh',
          name:'Professional sleighs',
          cost: 448.99,
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRPoaq_0IFT3DxqpdnyquLeltYw-cH5Y1zFww&usqp=CAU'
        },
        {
          id:17,
          category:'Christmas Sleigh',
          name:'Amateur Sleigh',
          cost: 128.99,
          image: ' https://images-na.ssl-images-amazon.com/images/I/41CzQlYR-pL._AC_SX522_.jpg'
        },
       

       
      ])
    
    return (
        <ProductsContext.Provider value={[products]}>
            {props.children}
        </ProductsContext.Provider>
    )
}
