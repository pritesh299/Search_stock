import express, { query } from "express"
import axios from "axios";
import bodyParser from "body-parser"
const app= express()
const port=3000
const apiKey="YOUR_API_KEY"


app.use(bodyParser.urlencoded({extended:false}))
app.use(express.static("public"))


function roundCurrency(number) {

  return  Math.round(Math.abs(Number(number))*100)/100 >= 1.0e+12
       ? Math.round(Math.abs(Number(number)) / 1.0e+10 )/100 + " Trillion"

       :Math.round(Math.abs(Number(number))*100)/100  >= 1.0e+9

       ? Math.round(Math.abs(Number(number)) / 1.0e+7 )/100+ " Billion"
     
       : Math.round(Math.abs(Number(number))*100)/100  >= 1.0e+6

       ?Math.round(Math.abs(Number(number)) / 1.0e+5 )/100 + " Million"
      
       : Math.round(Math.abs(Number(number))*100)/100  >= 1.0e+3

       ? Math.round(Math.abs(Number(number)) / 1.0e+3 )/100 + " Thousand"

       : Math.round(Math.abs(Number(number))*100)/100 ;

}


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

    let symbol=req.body.symbol;

    try{
        const stockData= await axios.get(`https://financialmodelingprep.com/api/v3/profile/${symbol}`, {
            params: {
               apikey:apiKey,
            }
          })
         const stockHistoryData = await axios.get(`https://financialmodelingprep.com/api/v3/historical-price-full/${symbol}`, {
          params: {
             apikey:apiKey,
          }
        })
          stockData.data[0].mktCap= roundCurrency(stockData.data[0].mktCap)
          res.render("index.ejs",{data:stockData.data[0],stockHistory:stockHistoryData.data.historical})
       } catch (error){ 
        console.log(error.message,req.path)
                 res.render("index.ejs",{error:"Due to limited acesss of free API Information regarding this company is unobtainable.Since this just a personal project I didn't used any paid api service please understand. -developer",note:"Please try searching  US -based publically traded companies for successfull results "})
       }
      

})

app.listen(port,()=>{
    console.log(`server is runinng on port:${port}`)
})

