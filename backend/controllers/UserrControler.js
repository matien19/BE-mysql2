import db from "../config/Database.js";

export const getUsers = async (req, res) => {
  try {
    const [response] = await db.query("SELECT * FROM users");
    res.json(response);
  } catch (error) {
    console.log(error.message);
  }
};
export const getUsersById = async (req, res) => {
  try {
    const id = req.params.id;
    const [response] = await db.query(`SELECT * FROM users WHERE id = ` + id);
    res.json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const createUser = async (req, res) => {
  try {
    const { name, email, gender } = req.body;
    if (!name || !email || !gender) {
      res.status(500).json({ msg: "Please provided All Field" });
    }
    const data = await db.query(`INSERT INTO users (name, email, gender) values (?, ?, ?)`, [name, email, gender]);
    if (!data) {
      res.status(404).json({ msg: "Error" });
    }
    res.status(201).json({ msg: "User Created successfuly" });
  } catch (error) {
    console.log(error.message);
  }
};
// export const updateUser = async (req, res) => {
//   try {
//     await User.update(req.body, {
//       where: {
//         id: req.params.id,
//       },
//     });
//     res.status(201).json({ msg: "User Updated successfuly" });
//   } catch (error) {
//     console.log(error.message);
//   }
// };
// export const deleteUser = async (req, res) => {
//   try {
//     await User.destroy({
//       where: {
//         id: req.params.id,
//       },
//     });
//     res.status(201).json({ msg: "User Deleted successfuly" });
//   } catch (error) {
//     console.log(error.message);
//   }
// };
