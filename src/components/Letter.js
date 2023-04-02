
function Letter({className,letter, onClickEvent}){
    const handleClick = () => {
        onClickEvent(letter)
    }
    return(
        <>
       {onClickEvent ? <span className={className} onClick={handleClick} >{letter}</span> : <span className={className}  >{letter}</span> }
       </>
    );
}

export default Letter;