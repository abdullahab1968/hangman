function Score({score}) {
    function checkScore(score){
      if(score >= 80){
        return 'high-score'
      }
      else if(score >= 50 && score < 80){
        return 'medium-score'
      }
      else {
        return 'low-score'
      }
    }
    return (
      <div className={checkScore(score)}>
        <span> {score} </span>
      </div>
    );
  }
  
  export default Score;
  