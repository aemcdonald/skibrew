export const getAllBreweries = async () => {
  const cities = ['crested_butte', 'telluride', 'steamboat_springs', 'breckenridge', 'winter_park', 'vail', 'aspen', 'silverthorne', 'frisco', 'dillon', 'silverton' ]
  const allBreweriesData = await cities.map(city => {
    return getBreweryByCity(city)})
  const data = Promise.all(allBreweriesData)
  return data
}

const getBreweryByCity = (city) => {
  return fetch(`https://api.openbrewerydb.org/breweries?by_state=colorado&by_city=${city}`)
  .then(response => {
    if(!response.ok) {
      throw Error("Failed to retrieve breweries")
    }
    return response.json()
  })
}
