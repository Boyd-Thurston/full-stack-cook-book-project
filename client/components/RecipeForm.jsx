import React from 'react'
import { render } from 'enzyme'

class RecipeForm extends React.Component {
  state = {

  }

  handleOnChange = event => {

  }
  
  render() {
    return (
      <>
        <p>
          Add a new ingredient
        </p>
        <div className="field is-grouped">
          <p className="control is-expanded">
            <input className="input" type="text" name="ingredient" placeholder="ingredient" value="" onChange={this.handleOnChange}/>
          </p>
          <p className="control">
            <input className="input" type="text" name="ammount" placeholder="ammount" value="" onChange={this.handleOnChange}/>
          </p>
          <div className="control">
            <div className="select">
              <select name="measurement">
                <option value="Tbsp">Tbsp</option>
                <option value="tsp">tsp</option>
                <option value="cup">cup</option>
                <option value="ml">ml</option>
                <option value="g">g</option>
                <option value="lb">lb</option>
                <option value="oz">oz</option>
                <option value="pt">pt</option>
              </select>
            </div>
          </div>
          <div className="control">
            <button type="submit" className="button is-primary">add</button>
          </div>
        </div>
      </>
    )
  }
}


export default RecipeForm
