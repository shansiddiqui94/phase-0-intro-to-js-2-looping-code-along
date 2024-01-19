// Code your solutions in this file
function writeCards(people, event){
    let newArr = []
        for(let i = 0; i < people.length; i++){
            let messages = `Thank you, ${people[i]}, for the wonderful ${event} gift!`
            newArr.push(messages)
        }
            return newArr 
    }
    
    function countDown(int) {
        while (int >= 0) {
          console.log(int);
          int -= 1;
        }
        return int;
      }