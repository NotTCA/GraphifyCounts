function abbreviate(num) {
  let string = "";
  if (num < 1000) {
    string = parseFloat(num);
  }
  if (num > 1000) {
    string = parseFloat(num / 1000);
  }
  if (num > 1000) {
    string += "K";
  }
  if (num > 10000) {
    string = parseFloat(num / 1000);
  }
  if (num > 10000) {
    string += "K";
  }
  if (num > 100000) {
    string = parseFloat(num / 1000);
  }
  if (num > 100000) {
    string += "K";
  }
  if (num > 1000000) {
    string = parseFloat(num / 1000000);
  }
  if (num > 1000000) {
    string += "M";
  }
  if (num > 10000000) {
    string = parseFloat(num / 1000000);
  }
  if (num > 10000000) {
    string += "M";
  }
  if (num > 100000000) {
    string = parseFloat(num / 1000000);
  }
  if (num > 100000000) {
    string += "M";
  }

  return string;
}
