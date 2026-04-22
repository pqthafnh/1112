/**
 * Localization helper
 * Accepts a value that may be either a localized object { vi, en }
 * or a plain string. Returns the correct string for the given language.
 */
export function localize(value, language) {
  if (value == null) return value;
  if (typeof value === 'object') {
    return value[language] ?? value.vi ?? value.en ?? Object.values(value)[0];
  }
  return value;
}

export default localize;
