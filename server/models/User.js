class User {
	constructor(){
	this.users = []
	this.postedUsers = []
	}
	signUp(data){
		const user = {
			id: this.users.length + 1,
			firstname: data.firstname,
			lastname: data.lastname,
			othername: data.othername,
			email: data.email,
			phonenumber: data.phonenumber,
			username: data.username,
			registered: new Date(),
			isAdmin: data.isAdmin
		}
		const postedUser = {
				id: user.id,
				firstname: user.firstname,
				lastname: user.lastname,
				othername: user.othername,
				email: user.email,
				phonenumber: user.phonenumber,
				isAdmin: user.isAdmin
		}
		this.users.push(user)
		this.postedUsers.push(postedUser)
		return postedUser
		}
	
	getUser(id){
	const user = this.users.find((usr) => usr.id === parseInt(id, 10))
	return user
	}
	getUsers(){
		return this.postedUsers;
	}
	
}
export default new User;