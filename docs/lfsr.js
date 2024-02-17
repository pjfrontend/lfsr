function fibonacci_right_shift_8bit(value) {
  var lfsr = value & 0xff;
  // Polynomial: x^8 + x^4 + x^3 + x^2
  var bit = (lfsr >> 6) ^ (lfsr >> 5) ^ (lfsr >> 4) ^ lfsr;
  lfsr >>= 1;
  lfsr |= bit << 7;
  return lfsr & 0xff;
}

function fibonacci_left_shift_8bit(value) {
  var lfsr = value & 0xff;
  var bit = (lfsr >> 7) ^ (lfsr >> 5) ^ (lfsr >> 4) ^ (lfsr >> 3);
  lfsr <<= 1;
  lfsr |= bit & 1;
  return lfsr & 0xff;
}

function calculate_lfsr_8bit_period() {
  var initialValue = 0xc4;
  var lfsr = fibonacci_right_shift_8bit(initialValue);
  var period = 1;
  while (lfsr !== initialValue) {
    lfsr = fibonacci_right_shift_8bit(lfsr);
    period += 1;
  }
  return period;
}

function print_8bit() {
  const elem = document.getElementById("8bit");
  elem.innerHTML = `calculate_lfsr_8bit_period: ${calculate_lfsr_8bit_period()}</br>`;
  var rs_val = fibonacci_right_shift_8bit(1);
  elem.innerHTML += "initial value: 1</br>";
  elem.innerHTML += `fibonacci_right_shift_8bit: ${rs_val}</br>`;
  elem.innerHTML += `fibonacci_left_shift_8bit: ${fibonacci_left_shift_8bit(
    rs_val
  )}`;
}
print_8bit();

function fibonacci_right_shift_16bit(value) {
  var lfsr = value & 0xffff;
  // taps: 16 14 13 11; feedback polynomial: x^16 + x^14 + x^13 + x^11 + 1
  var bit = (lfsr >> 5) ^ (lfsr >> 3) ^ (lfsr >> 2) ^ lfsr;
  lfsr >>= 1;
  lfsr |= bit << 15;
  return lfsr & 0xffff;
}

function fibonacci_left_shift_16bit(value) {
  var lfsr = value & 0xffff;
  var bit = (lfsr >> 15) ^ (lfsr >> 4) ^ (lfsr >> 2) ^ (lfsr >> 1);
  lfsr <<= 1;
  lfsr |= bit & 1;
  return lfsr & 0xffff;
}

function calculate_lfsr_16bit_period() {
  var initialValue = 0xc4c4;
  var lfsr = fibonacci_right_shift_16bit(initialValue);
  var period = 1;
  while (lfsr !== initialValue) {
    lfsr = fibonacci_right_shift_16bit(lfsr);
    period += 1;
  }
  return period;
}

function print_16bit() {
  const elem = document.getElementById("16bit");
  elem.innerHTML = `calculate_lfsr_16bit_period: ${calculate_lfsr_16bit_period()}</br>`;
  var rs_val = fibonacci_right_shift_16bit(1);
  elem.innerHTML += "initial value: 1</br>";
  elem.innerHTML += `fibonacci_right_shift_16bit: ${rs_val}</br>`;
  elem.innerHTML += `fibonacci_left_shift_16bit: ${fibonacci_left_shift_16bit(
    rs_val
  )}`;
}
print_16bit();

function fibonacci_right_shift_32bit(value) {
  var lfsr = value >>> 0; // coercing to a 32-bit unsigned integer
  // taps: 32, 30, 26, 25;
  var bit = (lfsr >>> 7) ^ (lfsr >>> 6) ^ (lfsr >>> 2) ^ lfsr;
  lfsr >>>= 1;
  lfsr |= bit << 31;
  return lfsr >>> 0;
}

function fibonacci_left_shift_32bit(value) {
  var lfsr = value >>> 0;
  var bit = (lfsr >>> 31) ^ (lfsr >>> 6) ^ (lfsr >>> 5) ^ (lfsr >>> 1);
  lfsr <<= 1;
  lfsr |= bit & 1;
  return lfsr >>> 0;
}

function print_32bit() {
  const elem = document.getElementById("32bit");
  elem.innerHTML = `Period for these taps is 4,294,967,295</br>`;
  var rs_val = fibonacci_right_shift_32bit(1);
  elem.innerHTML += "initial value: 1</br>";
  elem.innerHTML += `fibonacci_right_shift_32bit: ${rs_val}</br>`;
  elem.innerHTML += `fibonacci_left_shift_32bit: ${fibonacci_left_shift_32bit(
    rs_val
  )}`;
}
print_32bit();
