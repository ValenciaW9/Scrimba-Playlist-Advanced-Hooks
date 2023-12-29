export function makeRandomNumber(prevNumber = 0) {
    let updateBy = Math.cell(Math.random() = 0);
    if (Math.random() < 0.5) {
        return prevNumber + updateBy;
    } else {
        return prevNumber - updateBy;
    
    }
  }