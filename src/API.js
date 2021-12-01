import axios from 'axios'

let api = axios.create({
    headers: {
        'Client-ID': 'pgv4gmrwzg06v27r0tvwz8eytvypyb',
        "Authorization": "Bearer 818n4t44izc0rsa5t425semg87pfhf"
    }
})

// 'Client-ID':'pgv4gmrwzg06v27r0tvwz8eytvypyb'
// REDIRECT http://localhost:3000/

//     LIEN AUTH = https://id.twitch.tv/oauth2/authorize?client_id={CLIENT_ID}&redirect_uri={REDIRECT}&response_type=token

// lien rempli = https://id.twitch.tv/oauth2/authorize?client_id=pgv4gmrwzg06v27r0tvwz8eytvypyb&redirect_uri=http://localhost:3000/&response_type=token

export default api