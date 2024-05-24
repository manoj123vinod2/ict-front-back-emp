const express=require('express')
const employeeModel=require('./model')
const cors=require('cors')
//iniatialise
const app=new express();

//middleware
app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(cors())
app.get('/view',async(req,res)=>{
    var data=await employeeModel.find()
    res.json(data);
    console.log(data)
     })

app.post('/create',async(req,res)=>{
    var result=await new employeeModel(req.body);
    result.save();
    res.send("data saved");
     })

app.delete('/remove/:id',async(req,res)=>{
        let id=req.params.id
        await employeeModel.findByIdAndDelete(id);
        res.send("data deleted");
    
     })
     app.put('/edit/:id',async(req,res)=>{
        let id=req.params.id
        await employeeModel.findByIdAndUpdate(id,req.body);
        res.send("data updated");
     })
app.listen(3006,()=>{
    console.log("server is running on port 3006")
})
