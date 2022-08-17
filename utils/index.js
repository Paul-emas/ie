// Validate Phone Number

export function validateMobileNo(number) {
  const regex = /^(?:(?:(?:\+?234(?:h1)?|01)h*)?(?:\(\d{3}\)|\d{3})|\d{4})(?:\W*\d{3})?\W*\d{4}$/;

  if (regex.test(number)) {
    return true;
  } else {
    return false;
  }
}
