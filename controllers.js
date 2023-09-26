const ParamModel = require("./paramsSchema")

exports.getNotifs = (req, res) => {
    console.log('CONSOLE: { Query: ', req.query, 'Body: ', req.body, ' }')
    const body = Object.keys(req.body)
        .reduce((acc, key, i, arr) => 
           acc.concat(`${key}=${req.body[key]}${i === arr.length - 1 ? '' : '&'}`)
        , '');
    const params = new ParamModel({
        secret: req.query?.user_uuid,
        body,
    });
    params.save();
    res.sendStatus(200);
}

exports.home = async (req, res) => {
    const data = await ParamModel.find()
    res.send(data.map(item => ({ secret: item?.secret, body: item.body, })))
}