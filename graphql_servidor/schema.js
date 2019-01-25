import {buildSchema} from 'graphql'

const schema = buildSchema(`
  type Customer {
    id: ID
    name: String
    surname: String
    company: String
    emails: [Email]
    age: Int
    type: CustomerType
    orders: [Order]
  }

  type Order {
    product: String
    price: Int
  }

  type Email {
    email: String
  }

  """ Asign a category to a Customer """
  enum CustomerType {
    BASIC
    PREMIUM
  }

  type Query {
    getCustomer(id: ID) : Customer
  }

  input OrderInput {
    product: String
    price: Int
  }

  input EmailInput {
    email: String
  }

  """ Fields for New Customer """
  input CustomerInput {
      id: ID
      name: String!
      surname: String!
      company: String!
      emails: [EmailInput]!
      age: Int!
      type: CustomerType!
      orders: [OrderInput]
  }

  """ Mutations for creating Customers """
  type Mutation {
    #Resolver Name, Input with Data and Returned Value
    """ Allow you to create New Customers """
    createCustomer(input: CustomerInput) : Customer
  }
`)

export default schema
