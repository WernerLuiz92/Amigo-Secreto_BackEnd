const { v4: uuidv4 } = require('uuid')

require('../resources/db/connection')()

const SecretModel = require('../resources/db/models/Secret')

module.exports.create = async (event, context) => {
    context.callbackWaitsForEmptyEventLoop = false

    const { id: secretId } = event.pathParameters
    const { name, email } = JSON.parse(event.body)
    const externalId = uuidv4()


    try {
        const result = await SecretModel.updateOne(
            {
                externalId: secretId,
                'participants.email': { $ne: email }
            },
            {
                $push: {
                    participants: {
                        externalId,
                        name,
                        email,
                    }
                }
            }
        )

        if (!result.nModified) {
            throw new Error()
        }
        
        return {
            statusCode: 201,
            body: JSON.stringify({
                success: true,
                id: externalId,
            })
        }

    } catch (error) {
        console.log(error)
        return {
            statusCode: 500,
            body: JSON.stringify({
                success: false,
            }),
        }        
    }
}

module.exports.delete = async (event, context) => {
    context.callbackWaitsForEmptyEventLoop = false
    
    try {
        
    } catch (error) {
        console.log(error)
        return {
            statusCode: 500,
            body: JSON.stringify({
                success: false,
            }),
        }        
    }
}