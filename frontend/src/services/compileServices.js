import axios from "axios"
const baseUrl = `http://localhost:5000/api/compile`

const compile = async code => {

  const data = {
    code,
    lang: 'cpp',
    input: ''
  }

	const response = await axios.post(baseUrl, data)
	return response.data

}

export default { compile }
