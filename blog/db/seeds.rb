# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


usr = User.create(email: 'test2@wbt.com', password: 'lolopolo', password_confirmation: 'lolopolo')
tab = Table.create(name: 'tablica')
list = List.create(name: "lista", table_id: tab.id)
tab.lists << list
usr.tables << tab


tab.save
usr.save

card = Card.create(name: 'karta')
list.cards << card

card.save

comment = Comment.create(name: 'koemnatarz')

card.comments << comment

comment.save