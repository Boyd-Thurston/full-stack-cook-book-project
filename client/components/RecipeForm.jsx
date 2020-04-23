import React from 'react'
import { render } from 'enzyme'

class RecipeForm extends React.Component {
  state = {
    name: "",
    ingredient: "",
    ammount: ""

  }

  handleOnChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    })

  }
  
  render() {
    return (
      <>
      {/* info text */}
        <h2 className="title">How to use this form</h2>
        <p>
          This page allows you to add a your own new recipe to your cookbook. Use the form 
          fields below to give your recipe and name, enter the ingredients and the recipe its 
          self. As you do this your recipe will be construted below the form alowing you to 
          see it take shape before your eyes. Once you are stisfied you can submit it using 
          the controls at the bottom of the page. 
        </p>
        <br/>

      {/* add name field of the form */}
        <label className="label">Name your recipe</label>
        <div className="field is-grouped">
          <p className="control is-expanded">
            <input className="input" type="text" name="name" placeholder="recipe name" value={this.state.name} onChange={this.handleOnChange}/>
          </p>
          <p className="control">
            <button type="submit" className="button is-primary">Name it!</button>
          </p>
        </div>

      {/* add new ingredient field of the form */}
        <label className="label">Add a new ingredient</label>
        <div className="field is-grouped">
          <p className="control is-expanded">
            <input className="input" type="text" name="ingredient" placeholder="ingredient" value={this.state.ingredient} onChange={this.handleOnChange}/>
          </p>
          <p className="control">
            <input className="input" type="text" name="ammount" placeholder="ammount" value={this.state.ammount} onChange={this.handleOnChange}/>
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


        {/* add recipe filed of the form */}
          <div className="field">
            <label className="label">Recipe</label>
            <div className="control">
              <textarea className="textarea" placeholder="Enter your recipe"></textarea>
            </div>
          </div>


        {/* display full recipy to be submited */}
        <h2 className="title">{this.state.name}</h2>

        {/* submit new recipe control */}
      </>
    )
  }
}


export default RecipeForm
