setTimeout(() => {
  setTimeout(() => {
    q(); // q invoked (6)
  }, 15);

  d(); // d invoked (1)

  setTimeout(() => {
    n(); // n invoked (4)
  }, 5);

  z(); // z invoked (5)
}, 10);

setTimeout(() => {
  s();
}, 20); // s invoked (7)

setTimeout(() => {
  f(); // f invoked (2)
});

g(); // g invoked (3)

// g, f, d

// z, n, z, q
