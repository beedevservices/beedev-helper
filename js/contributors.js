function getContributors() {
    data = fetch(`https://api.github.com/repos/beedevservices/beedev-helper/contributors`)
    .then(res => res.json())
    .then(data => console.log(data))
}
getContributors()