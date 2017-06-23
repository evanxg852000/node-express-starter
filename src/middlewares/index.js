import csurf from 'csurf'

export const protectCsrf = csrf({cookie: true})