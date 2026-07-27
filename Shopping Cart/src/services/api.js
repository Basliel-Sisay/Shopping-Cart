async function product() {
  try {
    const response = await fetch("https://fakestoreapi.com/products");
    if (!response.ok) {
      throw new Error("Network Error, Can't Fetch The Products");
    }
    const data = await response.json();
    return data;
  } catch (e) {
    console.log(e.message);
    return null;
  }
}

export { product };
