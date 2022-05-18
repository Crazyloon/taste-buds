import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Gallery from '../components/Gallery'
import mealData from '../data/meals.json'

const allMeals = mealData.meals
  .map((m) => ({ ...m, selected: false }))
  .filter((meal) => meal.mainImage && meal.name !== "");

export default function Home({meals}) {
  return (
    <div>
      <Gallery meals={meals}/>
    </div>
  )
}

export const getStaticProps = () => {
  return {
    props: {
      meals: allMeals,
    },
  };
};

