import express, { query } from "express"
import axios from "axios";
import bodyParser from "body-parser"
const app= express()
const port=3000
const apiKey="3fmloKIMUdx66dS8gXpcZOtZtgHw2SrX"
const alphaVantageApiKey="Q8WVU5VO05ASCY41"

app.use(bodyParser.urlencoded({extended:false}))
app.use(express.static("public"))

app.get("/",async (req,res)=>{
  res.render("index.ejs")
})

app.post("/search", async(req,res)=>{
   
    try{
        const data= await axios.get(`https://financialmodelingprep.com/api/v3/search`, {
            params: {
               apikey:apiKey,
               query:req.body.stockInput,
            }
          })
         res.render("list_stock.ejs",{data:data.data})
       } catch (error){
     
        res.status(error.status).send(error.message)
       }

})

app.post("/", async (req,res)=>{

    let symbol=req.body.symbol
    try{
        const stockData= await axios.get(`https://financialmodelingprep.com/api/v3/profile/${symbol}`, {
            params: {
               apikey:apiKey,
            }
          })
      res.render("index.ejs",{data:stockData.data[0]})
       } catch (error){
        console.log(error.message,req.path)
                 res.render("index.ejs",{error:"Due to limited acesss of free API Information regarding this company is unobtainable.Since this just a personal project I didn't used any paid api service please understand. -developer",note:"Please try searching  US -based publically traded companies for successfull results "})
       }


})

app.listen(port,()=>{
    console.log(`server is runinng on port:${port}`)
})

