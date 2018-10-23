# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
Book.create!([
  { name: 'Copying and Pasting from Stack Overflow' },
  { name: 'Trying Stuff Until it Works' }
])

tab1 = Table.create(name: 'Tablica pierwsza')

list1 = List.create(name: 'Lista pierwsza')

tab1.lists << list1

card1 = Card.create(name: 'Karta pierwsza')