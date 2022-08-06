import * as React from 'react'
import { Admin, Resource, ListGuesser } from 'react-admin'
import jsonServerProvider from 'ra-data-json-server'

const dataProvider = jsonServerProvider('http://localhost:8080')

const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource name="users" list={ListGuesser} />
    <Resource name="promos" list={ListGuesser} />
  </Admin>
)

export default App
