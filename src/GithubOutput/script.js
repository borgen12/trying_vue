import bus from '../bus'
import Vue from 'vue'
import axios from 'axios'

export default {
    name: 'GithubOutput',
    data() {
        return {
            currentUsername: null,
            githubData: {},
            info: null,
        }
    },
    created() {
        bus.$on('new-username', this.onUsernameChange)
    },
    destroyed() {
        bus.$off('new-username', this.onUsernameChange)
    },
    methods: {
        onUsernameChange(name) {
            this.currentUsername = name
            this.getGithubData(name)
        },
        getGithubData(name) {
            let url = `https://api.github.com/users/${name}`
            axios.get(url).then((response)=> {
                this.info = response;
            }).catch(error => {console.log(error);})

        }
    },
}