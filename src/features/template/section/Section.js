import React, { useEffect } from 'react'
import { getCocktails } from '../../../store/cocktailSlice'
import { useDispatch, useSelector } from 'react-redux';
import './section.css'

function Section() {
  const cocktails = useSelector(getCocktails); 

  useEffect(() => {
    console.log(cocktails)
  }, [cocktails]);

  return (
    <section>
        <table>
          <thead>
            <tr>
              <th>Picture</th>
              <th>Drink Name</th>
              <th>Alcoholic</th>
              <th>Drink Category</th>
            </tr>
          </thead>
          <tbody>
            {
              cocktails?.drinks?.map((drink) => {
                return (
                  <tr key={drink.idDrink}>
                    <td>
                      <img src={drink.strDrinkThumb} />
                    </td>
                    <td>{drink.strDrink}</td>
                    <td>{drink.strAlcoholic === "Alcoholic" ? "Yes" : "No"}</td>
                    <td>{drink.strCategory}</td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>
        {
          !cocktails?.drinks && (
            <div className='empty-table'>The table is empty, please search for something :)</div>
          )
        }
    </section>
  )
}

export default Section
