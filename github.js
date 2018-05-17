class Github{
  constructor(){
    // https://github.com/settings/applications/716968
  //Client ID =  ab80953d97b9f5fc6b05
  // Client Secret = fdda46812e21adc17289ec744719bb0fec1d5601
  this.client_id = 'ab80953d97b9f5fc6b05';
  this.client_secrete = 'a151f1803b50849bf13d8557316e249aaa9d5e8e';
  this.repos_count = 5;
  this.repos_sort = 'created: asc';
  }
  async getUser(user){
    const profileResponse = await fetch(`https://api.github.com/users/${user}?client_id=${this.client_id}&client_secrete=${this.client_secrete}`);

    const repoResponse = await fetch(`https://api.github.com/users/${user}/repos?per_page=${this.repos_count}&sort=${this.repos_sort}&client_id=${this.client_id}&client_secrete=${this.client_secrete}`);

    const profile = await profileResponse.json();
    const repos = await repoResponse.json();

      
    return {
      profile,
      repos
    }
  }
}