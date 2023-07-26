export const writeCookie = (key, value, days) => {// creating a cooking that expires in 7 days
    let date = new Date()
        days = days || 365
        date.setDate(date.getDate() + days) // formulates the expiry date correctly

    let cookie = document.cookie = key + "=" + value +"; expires=" + date.toGMTString() + "; path=/"

    return cookie 
}

export const getCookie = (cookieName) => {
    const re = new RegExp(`(?<=${cookieName}=)[^;]*`) 
    console.log("****** Regular expression =", re)

    try {
        let cookie = document.cookie.match(re)[0] // using regular expression to find the pattern of the cookie.
        return cookie

    } catch (error) {
        console.log("Cookie not found")
        return false
        
    }
}