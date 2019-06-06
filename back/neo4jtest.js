const neo4j = require('neo4j-driver').v1;

const driver = neo4j.driver("bolt://localhost", neo4j.auth.basic("neo4j", "coucou"));
const session = driver.session();

const resultPromise = session.run(
  `MATCH (tom {name: "Tom Hanks"}) RETURN tom`,
);

resultPromise.then(result => {
  session.close();

  console.log(JSON.stringify(result, null, 4));

  // on application exit:
  driver.close();
});
