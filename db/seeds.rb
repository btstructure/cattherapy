User.destroy_all
Cat.destroy_all
Comment.destroy_all

user1 = User.create(username: 'Sam', password: 'password')
user2 = User.create(username: 'Laura', password: 'password2')
user3 = User.create(username: 'Alex', password: 'password3')

cat1 = Cat.create(name: "Garfield", image_url: "https://www.cartonionline.com/gif/film/garfield2/Garfield2_03.jpg", description: "Loves lasagna, hates oddie.")
cat2 = Cat.create(name: "Salem", image_url: "https://static.wikia.nocookie.net/thesabrinatheteenagewitch/images/e/e2/Salem.png/revision/latest?cb=20220310200215", description: "Did you know hes actually a witch?")
cat3 = Cat.create(name: "CatDog", image_url: "https://upload.wikimedia.org/wikipedia/en/6/64/CatDog.jpeg", description: "Best of both worlds")
cat4 = Cat.create(name: "Puss In Boots", image_url: "https://i0.wp.com/mypositiveoutlooks.com/wp-content/uploads/2021/08/puss-in-boots-real.jpg?resize=681%2C545&ssl=1", description: "Don't fall for the eyes")

comment1 = Comment.create(description: "Contributing to world hunger", user_id: user1.id, cat_id: cat1.id)
comment2 = Comment.create(description: "He has sick dance moves though", user_id: user2.id, cat_id: cat1.id)
comment3 = Comment.create(description: "Has the best nails!", user_id: user1.id, cat_id: cat2.id)
comment4 = Comment.create(description: "Biology gone wrong!", user_id: user3.id, cat_id: cat3.id)
comment5 = Comment.create(description: "When mom says you can only choose one.", user_id: user3.id, cat_id: cat3.id)
comment6 = Comment.create(description: "Stole my heart already", user_id: user2.id, cat_id: cat4.id)
