import Letter from './Letter'
function Letters({letterStatus, onClickEvent}){

    return(
        <div className='Letters'>
            <div>Available Letters</div>
            {Object.keys(letterStatus).map(l => <Letter className={`${letterStatus[l]}`} letter={l} onClickEvent={onClickEvent}/>)}
        </div>
    );
}

export default Letters;