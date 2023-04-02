import Letter from './Letter'
function Solution({letterStatus, solution}) {

    function displayLetters(word){
      const letters = []
      for(let ch of word){
        letterStatus[ch] ? letters.push(<Letter letter={ch}/>) : letters.push(<Letter letter=' _ '/>)
      }
      return letters
    }

    return (
      <div className='Solution'>
        {displayLetters(solution.word)}

        <div>
            <em>{solution.hint}</em>
        </div>
      </div>
    );
  }
  
export default Solution;
  