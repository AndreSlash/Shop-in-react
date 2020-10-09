import React,{useState, createContext} from 'react'

export const ProductsContext=createContext();
export const ProductsProvide=props=>{
    const [products]=useState([
        {
          discount:0.05,
          id:1,
          category:'Christmas Ball',
          name:'Green christmas ball 24cm',
          cost: 4.99,
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
          image: ' https://slimages.macysassets.com/is/image/MCY/products/5/optimized/10768385_fpx.tif?op_sharpen=1&wid=500&hei=613&fit=fit,1&$filtersm$'
        },
        {
          id:7,
          category:'Christmas Lights',
          name:'Exclusive christmas lights',
          cost: 18.99,
          image: ' https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRkeqxK54JNMO9HBaqjLJNNt8RmIJq0Yybk2w&usqp=CAU'
        },
        {
          id:8,
          category:'Christmas Lights',
          name:'Christmas bulbs',
          cost: 12.99,
          image: 'https://static3.emako.pl/pol_pl_Lampki-choinkowe-576-LED-swiatelka-na-choinke-kolor-zolty-46102_1.jpg'
        },
        {
          id:9,
          category:'Christmas Trees',
          name:'Lime christmas ball',
          cost: 8.99,
          image: ' https://images.homedepot-static.com/productImages/b7be6901-98c3-4330-b722-97e23e4de0a3/svn/costway-pre-lit-christmas-trees-cm21242-64_1000.jpg'
        },
        {
          id:10,
          category:'Christmas Trees',
          name:'Lime christmas ball',
          cost: 8.99,
          image: 'https://secure.img1-fg.wfcdn.com/im/78537617/compr-r85/1342/13429619/norway-green-spruce-artificial-christmas-tree.jpg'
        },
        {
          id:11,
          category:'Christmas Trees',
          name:'Lime christmas ball',
          cost: 8.99,
          image: 'https://images-na.ssl-images-amazon.com/images/I/71EglVV0SML._SL1500_.jpg'
        },
        {
          discount:0.45,
          id:12,
          category:'Gifts',
          name:'A red big gift',
          cost: 14.99,
          image: 'https://previews.123rf.com/images/klikk/klikk1411/klikk141100017/33845566-stack-of-christmas-gifts-isolated-on-white-background.jpg'
        },
        {
          id:13,
          category:'Gifts',
          name:'Sweet present',
          cost: 12.99,
          image: 'https://st4.depositphotos.com/10614052/21224/i/1600/depositphotos_212249854-stock-photo-beautiful-christmas-gifts-white-background.jpg'
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
          image: 'https://images-na.ssl-images-amazon.com/images/I/61IlOR89UmL._AC_SX425_.jpg'
        },
        {
          id:15,
          category:'Christmas Sleigh',
          name:'Professional sleighs',
          cost: 448.99,
          image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRPoaq_0IFT3DxqpdnyquLeltYw-cH5Y1zFww&usqp=CAU'
        },
        {
          id:16,
          category:'Christmas Sleigh',
          name:'Amateur Sleigh',
          cost: 128.99,
          image: ' https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSMQEXoEh474pxz872gna_DU7TWs_EhwNeoqw&usqp=CAU'
        },
       

       
      ])
    
    return (
        <ProductsContext.Provider value={[products]}>
            {props.children}
        </ProductsContext.Provider>
    )
}
