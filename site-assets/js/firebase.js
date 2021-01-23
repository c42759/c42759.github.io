// Your web app's Firebase configuration
var firebaseConfig = {
	apiKey: "AIzaSyArajOKb7PYQFIKWcurGl19qcsDv7kTA7s",
	authDomain: "c42759-github-io.firebaseapp.com",
	databaseURL: "https://c42759-github-io.firebaseio.com",
	projectId: "c42759-github-io",
	storageBucket: "c42759-github-io.appspot.com",
	messagingSenderId: "467900658378",
	appId: "1:467900658378:web:0898b8bd2fd22989883a33"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);


class blog {
	static getPost(postId) {
		return firebase.database().ref('/posts/' + postId).once('value').then(function (snapshot) {
			return snapshot.val()
		});

	}

	static getPosts(limit) {
		return firebase.database().ref('/posts/').orderByChild('published_at').limitToLast(limit).once('value').then(function (snapshot) {
			return snapshot.val()
		});

		/*
			AN IDEA OF HOW TO HANDLE THE getPosts REQUEST PROMISE HANDLING
			THIS SUPPORTS REVERSE LOGIC (FIREBASE DOESN'T SUPPORT TO REVERSE ORDER)
			blog.getPosts(5).then(function (posts) {
				var reversed_keys = Object.keys(posts).reverse()

				reversed_keys.forEach(function(k) {
					console.log(posts[k])
				})
			})
		*/
	}

	static setPost(title, description, cover = "", published = false) {
		return firebase.database().ref('posts/').push({
			title: title,
			description: description,
			media: {
				cover: cover
			},
			published: published,
			published_at: ((published) ? new Date().toJSON() : null),
			created_at: new Date().toJSON()
		});

	}

	static deletePost(postId) {
		return firebase.database().ref('posts/' + postId).remove()
	}
}

class tools {
	static randomString(length) {
		var result = '';

		var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
		var charactersLength = characters.length;

		for (var i = 0; i < length; i++) {
			result += characters.charAt(Math.floor(Math.random() * charactersLength));
		}
		return result;
	}
}