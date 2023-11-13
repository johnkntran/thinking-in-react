const data = [
  {
    id: 1,
    name: 'John',
  },
  {
    id: 2,
    name: 'Kim',
  },
]

export default function getUser(id) {
  // Pretend it's hitting the network.
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(data.filter(user => user.id === id)[0]);
    }, 2500);
  });
}
