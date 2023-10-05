function test(n) {
  return function (o) {
    return n + o;
  };
}

console.log(test(2)(4));
