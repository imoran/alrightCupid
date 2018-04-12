json.extract! user, :id, :first_name, :age, :city, :state, :image_url
json.description_responses user.description_responses.pluck(:response)
