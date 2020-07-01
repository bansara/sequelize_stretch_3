const Person = require('./person');
const Recipe = require('./recipe');
//YOUR CODE HERE

Recipe.belongsTo(Person);
Person.hasMany(Recipe);

Person.findWithRecipes = async function () {
    return await Person.findAll({
        include: [Recipe]
    })
}

Person.prototype.writeRecipe = async function (obj) {
    const newRecipe = await Recipe.create(obj);
    this.addRecipe(newRecipe);
}

module.exports = { Person, Recipe };
