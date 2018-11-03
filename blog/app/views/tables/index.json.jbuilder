json.array! @tables do |table|
	json.call(
			table,
			:id,
			:name
		)
	json.lists table.lists do |list|
		json.id list.id
		json.name list.name

		json.cards list.cards do |card|
			json.id card.id
			json.name card.name
		end
	end
end
