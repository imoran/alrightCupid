@descriptions.each do |description|
  json.set! description.id do
    json.extract! description, :id, :title
  end
end
