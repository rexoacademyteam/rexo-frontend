/** @type {import('next').NextConfig} */

const nextConfig = {
    publicRuntimeConfig: {
        BASEAPI: process.env.BASEAPI,
        CAPTCHA_SITEKEY: process.env.CAPTCHA_SITEKEY
    },
    env: {
        BASEAPI: process.env.BASEAPI,
        CAPTCHA_SITEKEY: process.env.CAPTCHA_SITEKEY,
    }
}

module.exports = nextConfig
