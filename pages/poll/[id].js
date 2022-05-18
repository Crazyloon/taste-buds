import PollResults from "../../components/PollResults";

const poll = ({poll}) => {
  return ( 
    <div>
      { poll.options ? <PollResults poll={poll} /> : <h1>Poll not found.</h1>}
    </div>
   );
}
 
export default poll;

export const getServerSideProps = async (context) => {
  const response = await fetch(`http://localhost:3000/api/poll/${context.query.id}`);

  const poll = await response.json();

  return {
    props: {
      poll: poll ? poll : { }
    }
  }
}
