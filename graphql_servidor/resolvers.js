class Customer {
  constructor(id, {name, surname, company, emails, age, type, orders}) {
    this.id = id
    this.name = name
    this.surname = surname
    this.company = company
    this.emails = emails
    this.age = age
    this.type = type
    this.orders = orders
  }
}

// Aux DB
const customerDB = {}

// resolver
const resolvers = {
  getCustomer : ({id}) => new Customer(id, customerDB[id]),
  createCustomer : ({input}) => {
    const id = require('crypto').randomBytes(10).toString('hex')
    customerDB[id] = input
    return new Customer(id, input)
  }
}

export default resolvers
