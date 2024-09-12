var axios = require("axios").default;

const ObjectIdentification = (imageUrl, minScore) => {
    const objectIdentificationPromise = new Promise((resolve, reject) => {
        var client = axios.create({
            baseURL: 'https://api.everypixel.com/v1',
            auth: { username: process.env.EVERYPIXEL_CLIENT_ID, password: process.env.EVERYPIXEL_SECRET }
        })

        // const response = { "keywords": [{ "keyword": "dog", "score": 0.9987587997538138 }, { "keyword": "cute", "score": 0.9977615134189366 }, { "keyword": "pets", "score": 0.996546427321023 }, { "keyword": "animal", "score": 0.9934123787302629 }, { "keyword": "outdoors", "score": 0.9920006503763599 }, { "keyword": "puppy", "score": 0.9819248423851044 }, { "keyword": "grass", "score": 0.9605500900145537 }, { "keyword": "purebred dog", "score": 0.9571049224283805 }, { "keyword": "nature", "score": 0.9070453292887979 }, { "keyword": "canine", "score": 0.8918770940635208 }, { "keyword": "mammal", "score": 0.8680798180122867 }, { "keyword": "retriever", "score": 0.8664734915246274 }, { "keyword": "young animal", "score": 0.859654013853291 }, { "keyword": "domestic animals", "score": 0.8555783264696074 }, { "keyword": "summer", "score": 0.7539676217815607 }, { "keyword": "looking", "score": 0.7506790593530278 }, { "keyword": "small", "score": 0.7399604981381152 }, { "keyword": "sitting", "score": 0.7365962299813269 }, { "keyword": "yellow", "score": 0.6247680744128908 }, { "keyword": "friendship", "score": 0.5823739943899336 }, { "keyword": "fun", "score": 0.34399978347855364 }, { "keyword": "meadow", "score": 0.32647123426759944 }, { "keyword": "green color", "score": 0.301951186695261 }, { "keyword": "one animal", "score": 0.2816618175341096 }, { "keyword": "playful", "score": 0.26561411378284305 }], "status": "ok" }

        client.get('/keywords', {
            params: {
                url: imageUrl
            },
        })
            .then(function (response) {
                const objectIdentificationTags = response.data.keywords.filter(x => x.score > minScore).map(x => x.keyword)
                resolve(objectIdentificationTags);
            }).catch(function (error) {
                console.error(error);
                reject(err);
            });
    })

    return objectIdentificationPromise
}


export default ObjectIdentification