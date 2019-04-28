export default function(type, arg) {
  async function query(address) {
    const response = await fetch(address);
    const responseData = await response.json();

    if (responseData.error) {
      throw new Error(responseData);
    } else {
      return responseData;
    }
  }

  if (type === "byId")
    return query(`https://rickandmortyapi.com/api/character/${arg}`);

  if (type === "custom")
    return query(`https://rickandmortyapi.com/api/character/?${arg}`);
}
