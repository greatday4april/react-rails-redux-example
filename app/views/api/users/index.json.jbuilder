@users.each do |user|
    json.set! user.id do
        json.partial! "api/users/api_user", api_user: user
    end
end
