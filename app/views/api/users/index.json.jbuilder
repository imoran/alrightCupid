json.array! @users.each do |user|
  json.extract! user, :first_name
  json.image_url asset_path(user.image_url)
end
