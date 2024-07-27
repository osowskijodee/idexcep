let domain = "example.com";

const config = {
    name: "example",
    ...(domain ? { domain } : {}),
    // other properties here...
};

console.log(config); 
// Output: { name: "example", domain: "example.com" }

domain = null;

const configWithoutDomain = {
    name: "example",
    ...(domain ? { domain } : {}),
    // other properties here...
};

console.log(configWithoutDomain); 
// Output: { name: "example" }
