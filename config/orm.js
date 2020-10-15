// Import MySQL connection.
const connection = require("./connection");

// Helper function to convert object key/value pairs to SQL syntax
function objToSql(ob) {
    let arr = [];

    // loop through the keys and push the key/value as a string int arr
    for (let key in ob) {
        let value = ob[key];
        // check to skip hidden properties
        if (Object.hasOwnProperty.call(ob, key)) {
            // if string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
            if (typeof value === "string" && value.indexOf(" ") >= 0) {
                value = "'" + value + "'";
            }

            // e.g. {eaten: true} => ["eaten=true"]
            arr.push(key + "=" + value);
        }
    }

    // translate array of strings to a single comma-separated string
    return arr.toString();
}

// Object for all our SQL statement functions.
const orm = {
    all: function(tableInput, cb) {
        let queryString = `SELECT * FROM ${tableInput};`;

        connection.query(queryString, function(err, result) {
            if (err) throw err;
            cb(result);
        });
    },
    create: function(table, cols, vals, cb) {
        let queryString = `INSERT INTO ${table} (${cols}) VALUES (?);`;

        connection.query(queryString, vals, function(err, result) {
            if (err) throw err;
            cb(result);
        });
    },
    update: function(table, objColVals, condition, cb) {
        let queryString = `UPDATE ${table} SET ${objToSql(objColVals)} WHERE ${condition}`
        connection.query(queryString, function(err, result) {
            if (err) throw err;
            cb(result);
        });
    },
    delete: function(table, condition, cb) {
        let queryString = `DELETE FROM ${table} WHERE id = ${condition}`;
        connection.query(queryString, function(err, result) {
            if (err) throw err;
            cb(result);
        });
    }
};

// Export the orm object for the model (burger.js).
module.exports = orm;