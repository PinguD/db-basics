const { user, todoItem, todoList, tag } = require("./models");

async function listsWithUsers() {
  try {
    const lists = await todoList.findAll({
      include: [user],
    });

    return lists.map((list) => list.toJSON());
  } catch (e) {
    console.log(e);
  }
}

async function getUsers() {
  const allUsers = await user.findAll({
    include: { model: todoList, attributes: ["name"] },
  });
  return allUsers.map((user) => user.toJSON());
}

async function getUserById() {
  try {
    const specificUser = await user.findOne({
      where: { id: 1 },
      include: { model: todoList, attributes: ["name"] },
    });
    return specificUser.toJSON();
  } catch (e) {
    console.log(e);
  }
}

async function getImportantTodoItems() {
  try {
    const importantTodoItems = await todoItem.findAll({
      where: { important: true },
      include: { model: todoList, attributes: ["name"] },
    });
    return importantTodoItems.map((todoItem) => todoItem.toJSON());
  } catch (e) {
    console.log(e);
  }
}

async function getUserListsAndTasks() {
  try {
    const UserListsAndTasks = await user.findOne({
      where: { id: 2 },
      include: {
        model: todoList,
        attributes: ["name"],
        include: { model: todoItem, attributes: ["task"] },
      },
    });
    return UserListsAndTasks.toJSON();
  } catch (e) {
    console.log(e);
  }
}

async function getItemsWithTags() {
  try {
    const itemsWithTags = await todoItem.findAll({
      include: { model: tag, attributes: ["title"] },
    });
    return itemsWithTags.map((todoItem) => todoItem.toJSON());
  } catch (e) {
    console.log(e);
  }
}

//getUsers().then((users) => console.log(users));
//getUserById().then((user) => console.log(user));
//listsWithUsers().then((lists) => console.log(lists));
//getImportantTodoItems().then((todoItem) => console.log(todoItem));
//getUserListsAndTasks().then((user) => console.log(user));
getItemsWithTags().then((todoItem) => console.log(todoItem));
