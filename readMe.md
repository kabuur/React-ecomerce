## 1 kow adoo kujiro     \full  soodaji 
            npm install
##  2 waxaad gashaa frontend,  
##       si aad ugasho  qor 
        cd frontend
##  3 kadib step 2  /frontend >  waxaad so dijisaa node_modules si aad usodajisid qor 
        npm install




##  4 waxad gashaa backend folder connectionka databasekaaga 
            mongoose.connect("mongodb://127.0.0.1:27017/test").then(()=>{
                    console.log("connected");
                }).catch((err)=>{
                    console.log(err.message+"errrror");
                })
    


##  kadib run gareey serverkaaga si aad u rangareeso terminalka adookajooga \full> kuqor sidaani
        npm run server
##      markaad rangareeso haduusan error kuqabsanin waxaa kusobixi doono 
        http://localhost:8000
        connected 
##     haduu kusoboxo sidaas waa success wuu connectigarowey


 ##   backend/routes waxaa jiro file kuqoran **productRoute.js**

            productRoute.get('/iproduct',async(req, res)=>{
                // await products.remove({});
                const xog = products.insertMany(data.product)
                res.send({xog});
                res.send("hhhh")
            })
##     waa in aan kuxarenaa databaka products si aan ugu xareeno waa in aan kuqornaa postimoneka ama Browserkaaga Apigaan *localhost:8000/api/iproduct*










##    waa in aan rangarenaa backendhigeena iyo frontendhigeena 
##    si aad u rangareeso backendigaaga waxaa qortaa adoo kajooga terminaalka /full> 
    npm run server
##    a sigoo rangareesnenin backendhiga ha ranarangarenin hadaad ran gareesidna kuuma so bandhigi doono products 

##    ha xirin terminalka aad ku rangaresay backendhiga waxaad furtaa terminaalkalr si aad u furto terminalka dhinaca midig qeebta kore calaamada plaska kuqoran click sii 

##   marka aan rangareno backendhiga waa in aan rangarenaa frontendhigeena  si aan urangareeno frontendhi waa in aan galnaa fronendhiga si aad ugasho kuqor new terminalka aad --
##   sofurtay  cd frontend  kabib qor 
        npm start




[`i.a wuu kuu rangaresmi donaa`]







