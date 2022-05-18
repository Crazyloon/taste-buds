import React from "react";

const PollOptions = ({options}) => {
  return ( 
    <>
      <ul className="poll-set">
        {options.map(q => <li className="poll-option" key={q.id}>{q.name}</li>)}
      </ul>
    </>
   );
}
 
export default PollOptions;