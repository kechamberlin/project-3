import axios from "axios";

export default {
    getAttorneys: () => {
        return axios.get("/associateattorney").then(({data}) => data);
    }
}