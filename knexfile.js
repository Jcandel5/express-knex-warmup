// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: {
      filename: 'postgresql://localhost/DATABASE_NAME_THAT_MAKES_SENSE_FOR_G95_DATABASE'
    }
  },

  production: {
    client: 'pg',
    connection: 'process.env.postgresql://localhost/DATABASE_NAME_THAT_MAKES_SENSE_FOR_G95_DATABASE'
}
}
