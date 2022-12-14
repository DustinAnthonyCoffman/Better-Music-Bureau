exports.getTest = async (req, res) => {
    console.log('yessss')
    res.status(200).json({
        message: 'test api is working'
    })
}