@users.each do |user|
  json.set! user.id do
    json.extract! user, :first_name
    json.image_url asset_path(user.image_url)
  end
end
