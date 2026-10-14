function errorHandler(err, req, res, next) {
    if (err.isOperational) {
        return res.status(err.statusCode).json({
            success: false,
            message: err.message
        })
    }

    console.error(err)
    res.status(500).json({
        success: false,
        message: "Ой халепа, щось пішло не так"
    })
}

export { errorHandler }