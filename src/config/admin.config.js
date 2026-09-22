const ADMIN_CONF = {
    roles: ["owner"],
    jwtExpires: "7d",
    JWT_KEY: process.env.JWT_KEY
}

export {ADMIN_CONF}