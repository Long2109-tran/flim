// function start(){
//     setInterval(function (){  
//         var number = document.getElementById('number').value;
//         number++;
//         if(number==10){
//             number = 0;
//         }
//         document.getElementById('number').value = number;
//     } , 2000 );
// }
// console.log(start) 


// setTimeout(()=>{
//     console.log('laytien')
//     setTimeout(()=>{
//         console.log('muanguyenlieu')
//         setTimeout(()=>{
//             console.log('lambanh')
//             setTimeout(()=>{
//                 console.log('an')
//             },0);
//         },3000);
//     },5000);      
// },0);
//  async function cc(){
//   function getUserAccount() {
//     return fetch('http://127.0.0.1:3000/getUser/',{method:'GET'});
// }
  
//   function getComments() {
//     return fetch('http://127.0.0.1:3000/getComment/',{method:'GET'});
//   }
  
//   const responses = await Promise.all([getUserAccount(), getComments()])
//   const promises = responses.map(res => res.json());
//   const results = await Promise.all(promises);
//   console.log(results);
//   }
//   cc();

//   const { response } = require('express')
// const express = require('express')
// const { request } = require('http');
// const { message } = require('statuses');
//   const app = express()
//   let danhsachsinhvien = [{id:1,name:"quang long",age:22},{id:2,name:"minh an",age:23}];
//   app.use(express.json())
//   app.listen(3000, () =>{
//   console.log("App listening on port 3000")
//   })

//   function danhsachsinhvienRemove(danhsachsinhvien, value) { 
//     return danhsachsinhvien.filter(function(ele){ 
//         return ele.id != value; 
//     });
// }
 
//   app.get("/", (request, response) =>{
//     response.json({
//     name: "Tran Quang Long",
//     website: "vinamilkteanhungcovidau.com"  
//     })
//   })
  
//   app.get('/laysinhvien/:id', function testfn(req, res, next) {
//     const id = parseInt(req.params.id);
//     const sinhvien = danhsachsinhvien.find(sinhvien => sinhvien.id === id);
//     if(sinhvien){
//       res.json(sinhvien);
//       console.log(`đã tìm thấy sinh vien ${sinhvien.id}`);
//     }
//     else{
//      console.log(`Khong tim thay sinh vien ${id}`);
//      res.sendStatus(404);
//     }  
//   });


//   app.post("/sinhvien",(req,res)=>{
//     console.log(req.body)
//     const id = req.body.id
//     const name = req.body.name
//     const age = req.body.age
//     const sinhvien  = danhsachsinhvien.find(sinhvien => sinhvien.id === id)
//     console.log()
//     if(sinhvien){
//       res.json(danhsachsinhvien)
//       console.log(`da co sinhvien ${sinhvien.id}`)
//     }else{
//       danhsachsinhvien.push({id,name,age});
//       res.json(`them thanh cong sinhvien ${name}`)
//     }
//   });
//   app.put("/updatesinhvien",(req,res)=>{
//     const id = req.body.id
//     const name = req.body.name
//     const age = req.body.age
//     const sinhvien  = danhsachsinhvien.find(sinhvien => sinhvien.id === id)
//     if(sinhvien){
//       sinhvien.id = id
//       sinhvien.name = name
//       sinhvien.age = age
//       res.status(200).json({message:`sua thanh cong sinh vien ${id}`})
//     }else{
//       res.status(404).json({message:`khong tim thay sinh vien ${name}`})
//       console.log(`khong tim thay sinhvien ${id}`);
//     }
//   });
//   app.delete("/deletesinhvien",(req,res)=>{
//     const id = parseInt(req.body.id);
//     console.log(id)
//     const sinhvien  = danhsachsinhvien.find(sinhvien => sinhvien.id === id)
//     if(sinhvien){
//       danhsachsinhvien = danhsachsinhvienRemove(danhsachsinhvien,id);
//       res.status(200).json({message:`xoa thanh cong sinh vien ${id}`})
//       console.log(danhsachsinhvien) 
//     }else{
//       res.status(404).json({message:`khong tim thay sinh vien ${id}`})
//       console.log(`khong tim thay sinhvien ${id}`);
//     }
//   });
  


  
  

  