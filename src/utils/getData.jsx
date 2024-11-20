export const getData = async () => {
  try {
    const response = await fetch(
      "https://6738bb0d4eb22e24fca8cdd1.mockapi.io/recipe",
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (err) {
    console.error(err);
  }
};

export const postData = async (newRecipe) => {
  try {
    const response = await fetch(
      "https://6738bb0d4eb22e24fca8cdd1.mockapi.io/recipe",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newRecipe),
      },
    );
    const data = await response.json();
    return data;
  } catch (err) {
    console.error(err);
  }
};
