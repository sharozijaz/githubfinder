class GitHub {
    constructor(){
        this.client_id = 'eb97f15d12fd8b7053ae';
        this.client_secret = '0919f9e95f7559d3f06e2f0808275c999a8a5d28';
    }
    async getUser(user){
        const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`);
        
        const profile = await profileResponse.json();
        return{
            profile
        }
    }
}