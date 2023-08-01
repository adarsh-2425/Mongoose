//search for age and name
async function ageAndName() {
  try {
    const userAgeAndName = await User.where("age").gt(18).where('name').equals('Revi');
    console.log(userAgeAndName);
  } catch (err) {
    console.error(err.message);
  }
}
