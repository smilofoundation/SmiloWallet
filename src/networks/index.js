import * as types from './types';
import * as nodes from './nodes';

const nodeList = {};

Object.keys(types).forEach(key => {
  // console.log("networks/index.js, keys, ", "types", types, "key", key, "types[key]", types[key]);
  nodeList[types[key].name] = [];
});

Object.keys(nodes).forEach(key => {
  // console.log("networks/index.js, forEach, ", "key", key, "nodes[key]", nodes[key]);
  if (nodes[key].service === nodes['xsmtestnet'].service) {
    const type = nodes[key].type;
    nodeList[type.name].splice(0, 0, nodes[key]);
  } else {
    nodeList[nodes[key].type.name].push(nodes[key]);
  }
});

export default nodeList;
