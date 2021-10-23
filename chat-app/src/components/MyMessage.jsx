const MyMessage=({message})=>{
if(message?.attachments?.lenght>0){
    return (
        <div>
         <img
         src={message.attachments[0].file}
         alt="message.attachments"
         className="message-image"
         style={{float:'right'}}/>
        </div>
    )
 }
 return(
<div className="message" style={{float:'right', marginRight:'18px', color:'white', backgroundColor:'3B2A50'}}>
    {message.text}
</div>

 )


}
    export default MyMessage;