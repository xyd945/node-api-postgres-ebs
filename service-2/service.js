var axios = require('axios');

const BASE_URL = process.env.BASE_URL;


const getUsers = async (request, response) => {
  const users = await axios.get(`http://${BASE_URL}/users`);
  response.status(200).json(users.data);
}

const getUserById = async (request, response) => {
  const id = parseInt(request.params.id)
  const users = await axios.get(`http://${BASE_URL}/users/${id}`);
  response.status(200).json(users.data);
}

const createUser = async (request, response) => {
  const { name, email } = request.body
  const users = await axios.post(`http://${BASE_URL}/users/`, { name: name, email: email });
  response.status(200).json(users.data);

}

const updateUser = async (request, response) => {
  const id = parseInt(request.params.id)
  const { name, email } = request.body
  const users = await axios.put(`http://${BASE_URL}/users/${id}`, { name: name, email: email });
  response.status(200).json(users.data);

}

const deleteUser = async (request, response) => {
  const id = parseInt(request.params.id)

  const users = await axios.delete(`http://${BASE_URL}/users/${id}`);
  response.status(200).json(users.data);
}

module.exports = {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
}