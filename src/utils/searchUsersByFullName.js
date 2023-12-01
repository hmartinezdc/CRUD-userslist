export const seachUsersByFullName = (fullName, usersData) => {
  // const [firstName, lastName] = fullName.trim().split(" ");

  // const userFound = usersData.filter((user) => {
  //   const userFirstName = user.first_name.toLowerCase();
  //   const userLastName = user.last_name.toLowerCase();

  //   if (lastName) {
  //     const completeName = `${userFirstName} ${userLastName}`;
  //     return completeName.toLowerCase().includes(fullName.toLowerCase());
  //   } else {
  //     return userFirstName.includes(firstName.toLowerCase());
  //   }
  // });
  // if (userFound.length === 0) {
  //   return usersData; // Retorna el array completo si no hay coincidencias
  // }

  const searchedUser = fullName.trim().toLowerCase();
  
  const userFound = usersData.filter((user) => {
    const fullNameUser = `${user.first_name} ${user.last_name}`.toLowerCase();
    const firstNameUser = user.first_name.toLowerCase();

    return (
      firstNameUser.includes(searchedUser) || fullNameUser.includes(searchedUser)
    );
  });

  

  return userFound;
};
