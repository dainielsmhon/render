//הפעלו את הפונקציה שמפעילה את דוט אי אן וי 
require('dotenv').config();
const express=require('express');
const app= express();
const port=process.env.PORT||3030;
//הגדרנו נקודת קצה בשיטת נט שמחזירה הודעה של כל מוצר שנשלח
app.get('/products',(req,res)=>{
    res.status(200).json({Msg:"All Product"})
});

app.listen(port,()=>{console.log('Server Started')});
