const axios = require('axios')
const compileRouter = require('express').Router()

compileRouter.get('/', async (req, res) => {
  res.send('Compile router works')
})

compileRouter.post('/', async (req, res) => {

  const { code, lang, input } = req.body;

  const langMap = {
    'c': {language: 'c', version: '10.2.0'},
    'cpp': {language: 'c++', version: '10.2.0'}
  }

  const data = {
    'language': langMap[lang].language,
    'version': langMap[lang].version,
    'files': [
      {
        'name': 'main',
        'content': code
      }
    ],
    'stdin': input,
    'compile_timeout': 10000,
    'run_timeout': 3000,
    'compile_memory_limit': -1,
    'run_memory_limit': -1
  }

  const headers = {
    'Content-Type': 'application/json'
  }

    axios.post('https://emkc.org/api/v2/piston/execute', data, {
      headers: headers
    }).then((response) => {
        res.json(response.data.run);
        console.log(response.data);
    }).catch((error) => {
        console.log(error);
        res.status(500).send({ error: "Something went wrong" });
    });

})

module.exports = compileRouter
