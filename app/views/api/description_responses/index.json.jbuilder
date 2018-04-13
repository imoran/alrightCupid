@description_responses.each do |response|
  json.set! response.id do
    json.extract! response, :id, :user_id, :description_id, :response
  end
end
