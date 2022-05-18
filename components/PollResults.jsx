import React, { useState } from "react";
import mealData from '../data/meals.json';

const getPollOptions = (poll) => {
  const optionIds = poll.options.map(o => o.option);
  const md = mealData.meals.filter(m => optionIds.includes(m.id));
  const data = md.map(m => Object.assign({}, m, poll.options.find(o => o.option === m.id), { pollId: poll.id}));
  return data;
}


const PollResults = ({poll}) => {
  const [hasVoted, setVoted] = useState(false)

  const castVote = async (poll, optionIndex) => {
    if (hasVoted) {
      return;
    }

    setVoted(true);

    let pollUpdate = Object.assign({}, poll);
    pollUpdate.options[optionIndex].votes++;

    const res = await fetch(`http://localhost:3000/api/vote/${poll.id}/${poll.options[optionIndex].option}`, {
      method: "POST",
      body: JSON.stringify({...poll.options})
    });

    const result = await res.json();
  }

  return ( 
    <>
      <h1 className="pt-1">{poll.question}</h1>
      <ul className={"poll-set" + (hasVoted ? " voted" : "")}>
        {getPollOptions(poll).map((option, index) => 
          <li className="btn btn-accent-outline poll-option" key={option.id} onClick={() => castVote(poll, index)}>
            <span>{option.name}</span>{ hasVoted ? <span className="pill">{option.votes}</span> : <></>}
          </li>)
        }
      </ul>
      <h6>Select an option above to cast your vote.</h6>
    </>
   );
}
 
export default PollResults;

// export const getServerSideProps = async (context) => {
//   const response = await fetch(`http://localhost:3000/api/poll/${context.query.id}`);

//   const poll = await response.json();

//   return {
//     props: {
//       poll: poll ? poll : { }
//     }
//   }
// }