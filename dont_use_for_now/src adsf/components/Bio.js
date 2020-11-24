import CommunicationBar from "./CommunicationBar"
function Bio( props ){
    return (
        <>
            <div class="card-body">
            <h5 class="card-title">Snapshot</h5>
            <p class="card-text">{props.info}</p>
            </div>     
            <CommunicationBar userid={props.userid} username={props.username} />  
        </>
    )
}

export default Bio