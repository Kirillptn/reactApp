export const inputsLogin = [
	{
		label: 'Email Address',
		type: 'email',
		name: 'email'
	},
	{
		label: 'Passwords',
		type: 'password',
		name: 'password'
	}
]

export const tempLogin = {
	email: '',
	password: '',
}

export const inputsSignIn = [
	{
		label: 'First name',
		type: 'text',
		name: 'firstName'
	},
	{
		label: 'Last name',
		type: 'text',
		name: 'lastName'
	},
	{
		label: 'Email Address',
		type: 'email',
		name: 'email'
	},
	{
		label: 'Passwords',
		type: 'password',
		name: 'password'
	},
]

export const tempSignIn = {
	firstName: '',
	lastName: '',
	email: '',
	password: '',
}

export const linksToPages =[
	{
		path: '/all-articles',
		name: 'All articles',
	},
	{
		path: '/my-articles',
		name: 'My articles',
	},
	{
		path: '/add-article',
		name: 'Add article',
	},
	{
		path: '/profile',
		name: 'Profile',
	},

]