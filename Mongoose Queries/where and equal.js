async function searchUser() {
  try {
    const user = await User.where("name").equals("Alice"); //same as User.find({name: "Alice"})
    console.log(user);
  } catch (err) {
    console.error(err.message);
  }
}
