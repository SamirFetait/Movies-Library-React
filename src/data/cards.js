const cards = [
	{
		id: 1,
		title: "The Shawshank Redemption",
		text: "Two imprisoned men bond over a number of years, finding solace and eventual redemption.",
		imgSrc: "https://m.media-amazon.com/images/I/519NBNHX5BL._AC_.jpg",
		rate: 10,
		cast: ["Tim Robbins", "Morgan Freeman", "Bob Gunton"],
	},
	{
		id: 2,
		title: "The Godfather",
		text: "The aging patriarch of an organized crime dynasty transfers control to his reluctant son.",
		imgSrc:
			"https://m.media-amazon.com/images/M/MV5BNGEwYjgwOGQtYjg5ZS00Njc1LTk2ZGEtM2QwZWQ2NjdhZTE5XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
		rate: 5,
		cast: ["Marlon Brando", "Al Pacino", "James Caan"],
	},
	{
		id: 3,
		title: "The Dark Knight",
		text: "Batman must accept one of the greatest psychological and physical tests of his ability to fight injustice.",
		imgSrc:
			"https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_FMjpg_UX1000_.jpg",
		rate: 2,
		cast: ["Christian Bale", "Heath Ledger", "Aaron Eckhart"],
	},
	{
		id: 4,
		title: "Pulp Fiction",
		text: "The lives of two mob hitmen, a boxer, and others intertwine in four tales of violence and redemption.",
		imgSrc:
			"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0DpJOTYr_nVZh5QAXcGhZHc6SRNJABQ9Cow&s",
		rate: 4,
		cast: ["John Travolta", "Uma Thurman", "Samuel L. Jackson"],
	},
	{
		id: 5,
		title: "Forrest Gump",
		text: "The presidencies of Kennedy and Johnson, the Vietnam War, and more through the eyes of Forrest Gump.",
		imgSrc:
			"https://m.media-amazon.com/images/M/MV5BNDYwNzVjMTItZmU5YS00YjQ5LTljYjgtMjY2NDVmYWMyNWFmXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
		rate: 5,
		cast: ["Tom Hanks", "Robin Wright", "Gary Sinise"],
	},
	{
		id: 6,
		title: "Inception",
		text: "A thief who steals corporate secrets through dream-sharing is given the inverse task of planting an idea.",
		imgSrc:
			"https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_FMjpg_UX1000_.jpg",
		rate: 4,
		cast: ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Ellen Page"],
	},
	{
		id: 7,
		title: "Fight Club",
		text: "An insomniac office worker and a soapmaker form an underground fight club that evolves into something much more.",
		imgSrc: "https://m.media-amazon.com/images/I/51v5ZpFyaFL._AC_.jpg",
		rate: 7,
		cast: ["Brad Pitt", "Edward Norton ", "Helena Bonham Carter"],
	},
	{
		id: 8,
		title: "The Lord of the Rings: The Fellowship of the Ring",
		text: "A meek Hobbit sets out on a journey to destroy a powerful ring and save Middle-earth.",
		imgSrc: "https://m.media-amazon.com/images/I/51Qvs9i5a%2BL._AC_.jpg",
		rate: 8,
		cast: ["Elijah Wood", "Ian McKellen", "Orlando Bloom"],
	},
	{
		id: 9,
		title: "The Matrix",
		text: "A computer hacker learns about the true nature of his reality and his role in the war against its controllers.",
		imgSrc: "https://m.media-amazon.com/images/I/51vpnbwFHrL._AC_.jpg",
		rate: 9,
		cast: ["Keanu Reeves", "Laurence Fishburne", "Carrie-Anne Moss"],
	},
	{
		id: 10,
		title: "Gladiator",
		text: "A former Roman General sets out to exact vengeance against the corrupt emperor who murdered his family.",
		imgSrc:
			"https://m.media-amazon.com/images/M/MV5BYWQ4YmNjYjEtOWE1Zi00Y2U4LWI4NTAtMTU0MjkxNWQ1ZmJiXkEyXkFqcGc@._V1_.jpg",
		rate: 2,
		cast: ["Russell Crowe", "Joaquin Phoenix", "Connie Nielsen"],
	},
	{
		id: 11,
		title: "Interstellar",
		text: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
		imgSrc: "https://m.media-amazon.com/images/I/91kFYg4fX3L._AC_SY679_.jpg",
		rate: 6,
		cast: ["Matthew McConaughey", "Anne Hathaway", "Jessica Chastain"],
	},
	{
		id: 12,
		title: "The Green Mile",
		text: "The lives of guards on Death Row are affected by one of their charges: a black man accused of child murder.",
		imgSrc:
			"https://m.media-amazon.com/images/M/MV5BMTUxMzQyNjA5MF5BMl5BanBnXkFtZTYwOTU2NTY3._V1_FMjpg_UX1000_.jpg",
		rate: 7,
		cast: ["Tom Hanks", "Michael Clarke Duncan", "David Morse"],
	},
	{
		id: 13,
		title: "The Silence of the Lambs",
		text: "A young FBI cadet must receive help from an imprisoned cannibal killer to catch another serial killer.",
		imgSrc:
			"https://m.media-amazon.com/images/M/MV5BNDdhOGJhYzctYzYwZC00YmI2LWI0MjctYjg4ODdlMDExYjBlXkEyXkFqcGc@._V1_.jpg",
		rate: 9,
		cast: ["Jodie Foster", "Anthony Hopkins", "Scott Glenn"],
	},
	{
		id: 14,
		title: "Saving Private Ryan",
		text: "Following the Normandy Landings, a group of U.S. soldiers go behind enemy lines to retrieve a paratrooper.",
		imgSrc:
			"https://m.media-amazon.com/images/M/MV5BZGZhZGQ1ZWUtZTZjYS00MDJhLWFkYjctN2ZlYjE5NWYwZDM2XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
		rate: 2,
		cast: ["Tom Hanks", "Matt Damon", "Tom Sizemore"],
	},
	{
		id: 15,
		title: "Titanic",
		text: "A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the luxurious Titanic.",
		imgSrc:
			"https://m.media-amazon.com/images/M/MV5BYzYyN2FiZmUtYWYzMy00MzViLWJkZTMtOGY1ZjgzNWMwN2YxXkEyXkFqcGc@._V1_.jpg",
		rate: 8,
		cast: ["Leonardo DiCaprio", "Kate Winslet", "Billy Zane"],
	},
	{
		id: 16,
		title: "Whiplash",
		text: "A promising young drummer enrolls at a music conservatory and is mentored by an abusive instructor.",
		imgSrc:
			"https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p10488558_p_v12_ai.jpg",
		rate: 2,
		cast: ["Miles Teller", "J.K. Simmons", "Paul Reiser"],
	},
	{
		id: 17,
		title: "The Prestige",
		text: "After a tragic accident, two magicians engage in a battle to create the ultimate illusion.",
		imgSrc:
			"https://m.media-amazon.com/images/M/MV5BMjA4NDI0MTIxNF5BMl5BanBnXkFtZTYwNTM0MzY2._V1_FMjpg_UX1000_.jpg",
		rate: 7,
		cast: ["Christian Bale", "Hugh Jackman ", "Scarlett Johansson"],
	},
	{
		id: 18,
		title: "The Departed",
		text: "An undercover cop and a mole in the police try to identify each other while infiltrating an Irish gang.",
		imgSrc:
			"https://m.media-amazon.com/images/M/MV5BMTI1MTY2OTIxNV5BMl5BanBnXkFtZTYwNjQ4NjY3._V1_FMjpg_UX1000_.jpg",
		rate: 9,
		cast: ["Leonardo DiCaprio", "Matt Damon", "Jack Nicholson"],
	},
	{
		id: 19,
		title: "Django Unchained",
		text: "With the help of a German bounty-hunter, a freed slave sets out to rescue his wife from a brutal plantation owner.",
		imgSrc: "https://m.media-amazon.com/images/I/71HMyqG6MRL._AC_SY679_.jpg",
		rate: 3,
		cast: ["Jamie Foxx", "Christoph Waltz", "Leonardo DiCaprio"],
	},
	{
		id: 20,
		title: "Joker",
		text: "In Gotham City, a mentally troubled comedian embarks on a downward spiral of social revolution and bloody crime.",
		imgSrc:
			"https://m.media-amazon.com/images/M/MV5BNzY3OWQ5NDktNWQ2OC00ZjdlLThkMmItMDhhNDk3NTFiZGU4XkEyXkFqcGc@._V1_.jpg",
		rate: 2,
		cast: ["Joaquin Phoenix", "Robert De Niro", "Zazie Beetz"],
	},
];

export default cards;
