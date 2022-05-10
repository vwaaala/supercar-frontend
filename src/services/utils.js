export function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}

export function get_language() {
    return localStorage.getItem('lang') || 'pl'
}

export function set_language(lang) {
    return localStorage.setItem('lang', lang)
}

export function get_local_currency(number) {
    return 'zł ' + Number(number).toLocaleString("es-ES", {minimumFractionDigits: 2})
}