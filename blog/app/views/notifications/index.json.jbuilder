json.array! @notifications do |notification|
	json.user_name notification.user.email
	json.card_name notification.card.name
	json.list_name notification.list.name
end
