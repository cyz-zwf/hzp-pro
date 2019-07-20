const express=require("express");
const router=express.Router();
const pool=require("../pool");

router.get("/",(req,res)=>{
    var sql=`SELECT * FROM  xz_index_product WHERE seq_recommended!=0 order by seq_recommended`;
    pool.query(sql,[],(err,result)=>{
        if(err){
            res.send(err);
            console.log(err);
        }else{
            res.send(result);
        }
    });
});

module.exports=router;
//用sql语句查找出需要用的
//SELECT * FROM  xz_index_product WHERE seq_recommended!=0 order by seq_recommended
