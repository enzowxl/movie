import axios from 'axios'

export const CONFIG = {

    API_KEY: "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2OTUwNGI3ZDFkZWE2NTdjNWQ2NGJjODI3MjI2OGNhMyIsInN1YiI6IjY0NmUwNWRlOTY2MWZjMDExZDk1OTE0OCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.NksTjYXc42gM4NhgN9RfLjcDmViHtorYinqOwI1R3HI"

}

export const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3/'
})