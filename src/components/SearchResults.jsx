function SearchResults({ meals,setId }) {
  if (!meals || meals.length === 0) {
    return (
      <div id="results" className="px-6 py-12 text-center text-gray-500">
        No meals found.
      </div>
    );
  }

  function handleSearch(meal){
    setId(meal);
    console.log(meal);
  }

  return (
    <div id="results" className="px-6 py-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {meals.map((meal) => (
        <div key={meal.idMeal} className="border shadow-md rounded-lg overflow-hidden bg-yellow-500 cursor-pointer hover:shadow-yellow-400 hover:scale-105 transition-all duration-300 ease-in-out" onClick={()=>handleSearch(meal.idMeal)}>
          <img src={meal.strMealThumb} alt={meal.strMeal} className="w-full h-48 object-cover" />
          <div className="p-4 bg-yellow-500">
            <h3 className="text-xl font-bold mb-2">{meal.strMeal}</h3>
            <p className="text-sm text-gray-600 line-clamp-3">
              {meal.strInstructions.slice(0, 150)}...
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default SearchResults;
