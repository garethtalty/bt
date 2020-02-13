var createHealth = function() {
  var rand = Math.floor(Math.random() * 3) + 1;
  switch (rand) {
    case 1:
      return 'r';
    case 2:
      return 'a';
    case 3:
    default:
      return 'g';
  }
};

var createCard = function(n) {
  return {
    name: `service-${n}`,
    uri: `http://some-application.net/${n}`,
    info: {
      health: createHealth(),
    },
  };
};

module.exports = Array(50)
  .fill()
  .map((card, idx) => createCard(idx));
