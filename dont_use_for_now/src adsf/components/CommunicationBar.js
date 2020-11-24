function CommunicationBar( props ){
    return (
        <div class="card-footer">
          {/* communication bar */}
          <button onClick={()=>{ alert( `Chatting with ${props.userid}` ); }} class='btn btn-primary'>Chat with {props.username}</button>
          <button onClick={()=>{ alert( `Blocking ${props.userid}` ); }} class='btn btn-danger'>Block {props.username}</button>
        </div>        
    )
}

export default CommunicationBar