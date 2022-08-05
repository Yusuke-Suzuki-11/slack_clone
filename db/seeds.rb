20.times do |n|
  pass = Faker::Internet.password(min_length: 8)
  User.create!(
    name: Faker::Name.name
    nickname: Faker::Name.nickname
    password: pass
    password_confirmation: apss
    email: Faker::Internet.email
  )
end

50.times do |n|
  DirectMessage.create!(
    to_user_id: n % 2 == 0 ? 1 : 2
    from_user_id: n % 2 == 0 ? 2 : 1
    message: "#{n}個目のこめんとですYO"
  )
end