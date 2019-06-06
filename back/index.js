const { ApolloServer, gql } = require('apollo-server');

async function fetchUserDetails() {
  return {
    userName: 'niokiss',
    mail: 'niokibouss@gmail.com',
    firstName: 'Nioki',
    lastName: 'Bouss Bouss',
    gender: 'w',
    sexualOrientation: ['w', 'm'],
    bio: 'Je suis un la reine de bouss bouss. Je fais rouuuuh aussi.',
    tags: ['catlover', 'ruhh', 'scotch'],
  };
}

async function login() {
  await new Promise(r => setTimeout(r, 1000));
  const profile = await fetchUserDetails();
  return {
    profile,
    error: false,
    token: '65qd65f1w651wev8',
    message: 'Connected.',
  };
}

const typeDefs = gql`
  type User {
    userName: String
    mail: String
    firstName: String
    lastName: String
    gender: String
    sexualOrientation: [String]
    bio: String
    tags: [String]
  }

  type LoginResult {
    token: String
    message: String
    error: Boolean
    profile: User
  }

  type Query {
    myProfile: User
  }

  type Mutation {
    login(mail: String!, password: String!): LoginResult
  }
`;

const resolvers = {
  Query: {
    myProfile: () => fetchUserDetails(),
  },
  Mutation: {
    login: (_, { mail, password }) => login(mail, password),
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
