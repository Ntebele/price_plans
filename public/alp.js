document.addEventListener("alpine:init", ()=>{
    Alpine.data('phoneBill',()=>{
        return {
            
    pricePlan:'Phone Bill',
    myPrice_plan:[],
    plan_name:'',
    action:'',
    sms_price:0,
    call_price:0,
    total:0,
    id:0,
    deleteId:0,
    message:'',
    Create_plan_name:'',
    Create_sms_price:'',
    Create_call_price:'',
    Createmessage:'',
    deleteIdmessage:'',
    Update_message:'',
    Update_call_price:'',
    Update_sms_price:'',
    Update_plan_name:'',
    Updateid:0,

    init(){
      return axios
      .get('/api/phonebill')
      .then((result)=>{
        console.log(this.myPrice_plan)
        this.myPrice_plan=result.data.price_Plan;
      })
    }, 
    
    bill(){
    return axios
    .post(`/api/phonebill?plan_name=${this.plan_name}&action=${this.action}`)
    .then((result)=>{
 
      this.total=result.data.total;
    })
  },

  deletes(){
    return axios
    .post(`/api/price_plan/delete?id=${this.deleteId}`)
    .then((result)=>{
      this.deleteIdmessage=result.data.message;
    })
  
  },

  create(){
     return axios
    .post(`/api/phonebill/create?plan_name=${this.Create_plan_name}&sms_price=${this.Create_sms_price}&call_price=${this.Create_call_price}`)
    .then((result)=>{
      this.Create_plan_name=result.data.plan_name;
      this.Create_sms_price=result.data.sms_price;
      this.Create_call_price=result.data.call_price;
      this.Createmessage=result.data.status;
    })
  },

  update() {
    return axios
      .post(`/api/phonebill/update`, {
        plan_name: this.Update_plan_name,
        sms_price: this.Update_sms_price,
        call_price: this.Update_call_price,
        id: this.Updateid
      })
      .then((result) => {
        this.Update_plan_name = "";
        this.Update_sms_price = "";
        this.Update_call_price = "";
        this.Updateid = "";
        this.Update_message = result.data.status;
      });
}


  
  }
  
  
        }
        
    )});