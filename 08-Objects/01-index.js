const systemConfig = {
  serviceName: 'User-API',
  environment: 'production',
  port: 8080,
  databaseHost: 'prod.db.internal',
  enableLogging: true
};

/**
 * A pure function that validates if a configuration object contains all required keys.
 * By returning a boolean, it separates the concern of "validation" from "error handling",
 * making the function highly reusable and testable.
 * @param {object} config The configuration object to validate.
 * @param {string[]} requiredKeys An array of strings representing the keys that must be present.
 * @returns {boolean} True if all required keys are present, false otherwise.
 */
function validateConfiguration(config, requiredKeys) {
    // Object.keys() is safe because it only returns the object's *own* properties.
    const configKeys = Object.keys(config);
    // Ask the direct, declarative question: "Does every required key exist in the config keys?"
    return requiredKeys.every(key => configKeys.includes(key));
}

// --- The `for...in` loop and its dangers ---

// A poorly-written library modifies the base Object prototype. This is a terrible practice.
Object.prototype.isConfigObject = true;

console.log("--- Looping with the modern, safe `Object.keys` ---");
Object.keys(systemConfig).forEach(key => {
    console.log(`  ${key}: ${systemConfig[key]}`);
});

console.log("\n--- Looping with the older, unsafe `for...in` ---");
// The for...in loop iterates over an object's own properties AND properties from its prototype chain.
// To make it safe, you must manually check if the property is the object's own.
for (const key in systemConfig) {
    // This check is crucial to avoid processing inherited properties.
    if (systemConfig.hasOwnProperty(key)) {
        console.log(`  ${key}: ${systemConfig[key]}`);
    }
}

// The `for...in` loop unexpectedly found the `isConfigObject` property from the prototype,
// which could cause bugs, data corruption, or crashes in a real system.
// This is why `Object.keys`, `Object.values`, and `Object.entries` are the preferred, safer methods.

// Clean up the global prototype to not affect other examples.
delete Object.prototype.isConfigObject;