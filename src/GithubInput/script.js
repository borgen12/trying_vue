export default {
    name: 'GithubInput',
    data() {
        return {
            username: '',
        }
    },
    methods: {
        onSubmit(event) {
            if (this.username && this.username !== '') {
            }
            console.log(this.username)
        }
    }
}