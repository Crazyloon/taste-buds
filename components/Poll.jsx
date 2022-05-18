import React, {useState} from "react";
import PollOptions from "./PollOptions";
import PollResults from "./PollResults";

const Poll = ({options}) => {
  const [selection, setSelection] = useState(-1);
  const [results, setResults] = useState([]);

  return ( 
    <div className="poll-component">
        {selection ? <PollOptions options={options} /> : <PollResults results={results} />}
    </div>
   );
}
 
export default Poll;