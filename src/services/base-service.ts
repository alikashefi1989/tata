import Axios, { AxiosInstance } from 'axios'

const useBaseService = (): AxiosInstance => {
    const axiosInstance: AxiosInstance = Axios.create()

    axiosInstance.defaults.baseURL = import.meta.env.VITE_API_URL
    axiosInstance.defaults.headers['Content-Type'] = 'application/json'

    axiosInstance.interceptors.response.use(
        function (response) {
            return response
        },
        function (error) {
            return Promise.reject(error)
        },
    )

    return axiosInstance
}

export default useBaseService