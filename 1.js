const location = {
    city: 'Donetsk'
}

const user = Object.create(location)
user.username = 'Clutcher'

const ownerProperty = obj => {
    if(typeof(obj) === 'object'){
        for(let prop in obj){
            if(obj.hasOwnProperty(prop)){
                console.log(`Property ${prop} is: ${obj[prop]}`)
            }
        }
    }
}

ownerProperty(user)
