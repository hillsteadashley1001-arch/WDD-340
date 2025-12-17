/**
 * Basic input sanitization
 */
module.exports = input => {
  if (typeof input !== 'string') return input;

  return input.replace(/[<>]/g, '');
};
