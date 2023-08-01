//age over 18
async function userAge() {
  try {
    const userAge = await User.where("age").gt(18);
    console.log(userAge);
  } catch (err) {
    console.error(err.message);
  }
}
