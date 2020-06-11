module.exports = function ArrayToString(Array) {
  return Array.split(', ').map((tool) => tool.trim());
};
