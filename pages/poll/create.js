import React, {useState} from "react";
import { useRouter } from "next/router";
import mealData from "../../data/meals.json";
import Poll from "../../components/Poll";

const create = ({meals}) => {
  const [question, setQuestion] = useState('');
  const router = useRouter();

  const createPoll = async (question, meals) => {
    const url = "/api/poll";
    const options = meals.map(m => ({option: m.id, votes: 0 }));
    let json = JSON.stringify({question: question, options: options});
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: json
    });
  
    const body = await response.json();
    router.push(`/poll/${body.id}`);
  
  }

  const SelectedMealsList = ({meals}) => {

    if (meals.length > 1){
      return (
        <ul>
        {
          meals.map((item, index) => { return (<li key={index}>{item.name}</li>) })
        }
        </ul>
      )
    }
    return <div>Try selecting multiple meals to continue.</div>
  }

  return (  

    <section className={"pt-1"}> 
      <h2>Give your poll a question and go!</h2>
      <input className="form-input w-100 mb-1" type="text" placeholder="What should I make for dinner?" onChange={(e) => setQuestion(e.target.value)} value={question} />
      <Poll options={meals} />      
      <button className="btn btn-primary w-100 mt-1" onClick={() => createPoll(question, meals)}>Create Poll</button>
    </section>
  );
}

const allMeals = mealData.meals.filter((meal) => meal.mainImage && meal.name !== "");

export const getServerSideProps = (context) => {
  const validIndicies = Object.values(context.query);
  const meals = allMeals.filter(m => validIndicies.includes(m.id.toString()));
  return {
    props: { meals }
  }
}



export default create
