export function FormatDate(dateString) {
    return (new Date(dateString)).toLocaleDateString('en-US', {
        day: 'numeric',
        weekday: 'long',
        year: 'numeric',
        month: 'long',
    })
}