@users.each do |user|
  json.set! user.id do
    json.extract! user, :id, :first_name, :motto, :age, :zipcode
    json.city user.get_city
    json.state user.get_state
    json.image_url asset_path(user.image_url)
  end
end
