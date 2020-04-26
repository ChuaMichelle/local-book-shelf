const glob = require("glob");
const goodreadsNode = require("goodreads-api-node");

const myCredentials = {
  key: "kd5SbVhM7EYzGXoAc62dLQ",
  secret: "75iHdl07HtutzRpBN0DSSyK3bbC3zVg4FA0IyVm8uo",
};

const goodreads = goodreadsNode(myCredentials);

async function asyncForEach(array, callback) {
  for (let index = 0; index < array.length; index++) {
    await callback(array[index], index, array);
  }
}
