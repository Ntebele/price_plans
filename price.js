
document.addEventListener("alpine:init", ()=>{
    Alpine.data("Prices",()=>{
        return {
            myPrice_plan:[],
            init() {
                axios
                .get('http://localhost:4011/api/phonebill')
                  .then((result) => {
                    console.log(result.data.price_plan)
                    this.myPrice_plan=result.data.price_plan;
                  })},
            getdata(){
               
   return axios
                .get('http://localhost:4011/api/phonebill')
                .then((result)=>{
                    console.log(result.data.price_plan)
                    this.myPrice_plan=result.data.price_plan;
                })
            }
        }
    })
})